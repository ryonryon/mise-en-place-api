"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Menu_1 = __importDefault(require("./Menu"));
const Ingredient_1 = __importDefault(require("./Ingredient"));
let MenuMenuIngredient = class MenuMenuIngredient {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", String)
], MenuMenuIngredient.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Menu_1.default, (menu) => menu.ingredients, {
        onDelete: "CASCADE",
    }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", Object)
], MenuMenuIngredient.prototype, "menu", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Ingredient_1.default, (ingredient) => ingredient.menuIngredients),
    typeorm_1.JoinColumn(),
    __metadata("design:type", Object)
], MenuMenuIngredient.prototype, "ingredient", void 0);
MenuMenuIngredient = __decorate([
    typeorm_1.Entity()
], MenuMenuIngredient);
exports.default = MenuMenuIngredient;
