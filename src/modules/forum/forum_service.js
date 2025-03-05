"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEntry = exports.updateEntry = exports.getEntryById = exports.getAllForum = exports.createEntry = void 0;
const forum_models_js_1 = __importDefault(require("./forum_models.js"));
const createEntry = (forumData) => __awaiter(void 0, void 0, void 0, function* () {
    const user = new forum_models_js_1.default(forumData);
    return yield user.save();
});
exports.createEntry = createEntry;
const getAllForum = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield forum_models_js_1.default.find();
});
exports.getAllForum = getAllForum;
const getEntryById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield forum_models_js_1.default.findById(id);
});
exports.getEntryById = getEntryById;
const updateEntry = (id, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield forum_models_js_1.default.updateOne({ _id: id }, { $set: updateData });
});
exports.updateEntry = updateEntry;
const deleteEntry = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield forum_models_js_1.default.deleteOne({ _id: id });
});
exports.deleteEntry = deleteEntry;
