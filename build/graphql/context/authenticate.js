"use strict";
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function () {
            return m[k];
          },
        });
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const admin = __importStar(require("firebase-admin"));
const User_1 = __importDefault(require("../../entities/User"));
const typeorm_1 = require("typeorm");
const firebaseAdmin = admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_SERVICE_ACCOUNT_EMAIL,
    privateKey: process.env.FIREBASE_SERVICE_ACCOUNT_PRIVATE_KEY.replace(
      /\\n/g,
      "\n"
    ),
  }),
  projectId: process.env.FIREBASE_PROJECT_ID,
});
exports.default = async (request, context) => {
  if (
    request.request.headers.authorization &&
    request.request.headers.authorization.startsWith("Bearer ")
  ) {
    const token = request.request.headers.authorization.substring(7);
    let decodedToken;
    try {
      decodedToken = await firebaseAdmin.auth().verifyIdToken(token);
    } catch (e) {
      console.error("verifyIdToken error", e);
      return context;
    }
    const user = await typeorm_1
      .getConnection()
      .transaction(async (manager) => {
        var _a, _b, _c;
        const user = await manager
          .getRepository(User_1.default)
          .findOne({ where: { authenticationId: decodedToken.uid } });
        if (user) return user;
        const result = await manager.getRepository(User_1.default).insert({
          email:
            (_a = decodedToken.email) !== null && _a !== void 0 ? _a : null,
          name: (_b = decodedToken.name) !== null && _b !== void 0 ? _b : "",
          profileImageURL:
            (_c = decodedToken.picture) !== null && _c !== void 0 ? _c : "",
          authenticationId: decodedToken.uid,
        });
        const createdUser = await manager
          .getRepository(User_1.default)
          .findOne(result.identifiers[0].id);
        if (!createdUser)
          throw new Error(
            "User generation failed. No new user was successfully created."
          );
        return createdUser;
      });
    return { ...context, user };
  }
  return context;
};
