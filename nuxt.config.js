"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// https://nuxt.com/docs/api/configuration/nuxt-config
const vite_1 = __importDefault(require("@tailwindcss/vite"));
exports.default = defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    css: ['~/assets/css/main.css'],
    vite: {
        plugins: [
            (0, vite_1.default)(),
        ],
    },
});
