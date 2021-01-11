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
const MenuIngredient_1 = __importDefault(require("./MenuIngredient"));
let Ingredient = class Ingredient {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", String)
], Ingredient.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: "text", nullable: false }),
    __metadata("design:type", String)
], Ingredient.prototype, "name", void 0);
__decorate([
    typeorm_1.OneToMany(() => MenuIngredient_1.default, (menuIngredient) => menuIngredient.ingredient),
    typeorm_1.JoinColumn(),
    __metadata("design:type", Array)
], Ingredient.prototype, "menuIngredients", void 0);
Ingredient = __decorate([
    typeorm_1.Entity()
], Ingredient);
exports.default = Ingredient;
