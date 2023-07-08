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
exports.Contact = exports.contactsCategory = void 0;
const typeorm_1 = require("typeorm");
const clients_entity_1 = __importDefault(require("./clients.entity"));
var contactsCategory;
(function (contactsCategory) {
    contactsCategory["GENERAL"] = "Geral";
    contactsCategory["FAMILIAR"] = "Familiar";
    contactsCategory["FRIEND"] = "Amigo";
    contactsCategory["COWORKER"] = "Colega";
    contactsCategory["SUPPLIER"] = "Fornecedor";
    contactsCategory["CUSTOMERS"] = "Cliente";
})(contactsCategory || (exports.contactsCategory = contactsCategory = {}));
let Contact = exports.Contact = class Contact {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Contact.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Contact.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Contact.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "bigint" }),
    __metadata("design:type", Number)
], Contact.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", default: "Sem comentário" }),
    __metadata("design:type", Object)
], Contact.prototype, "comment", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: contactsCategory,
        default: contactsCategory.GENERAL,
    }),
    __metadata("design:type", String)
], Contact.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Contact.prototype, "isFavorite", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "date" }),
    __metadata("design:type", Object)
], Contact.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => clients_entity_1.default),
    __metadata("design:type", Object)
], Contact.prototype, "client", void 0);
exports.Contact = Contact = __decorate([
    (0, typeorm_1.Entity)("contacts")
], Contact);
