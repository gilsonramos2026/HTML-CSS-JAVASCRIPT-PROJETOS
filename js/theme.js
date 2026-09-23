/**
 * theme.js
 * Controla o tema (claro/escuro). A troca real de cor é 100% CSS
 * (ver css/theme.css) — aqui só decidimos QUAL atributo aplicar
 * e lembramos a escolha do usuário no localStorage.
 */
const Theme = {
 STORAGE_KEY: "app:theme",
 init() {
 const saved = localStorage.getItem(this.STORAGE_KEY);
 const preferred = saved || (
 window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"
 );
 this.apply(preferred);
 },
 apply(theme) {
 document.documentElement.setAttribute("data-theme", theme);
 localStorage.setItem(this.STORAGE_KEY, theme);
 },
 toggle() {
 const current = document.documentElement.getAttribute("data-theme");
 this.apply(current === "dark" ? "light" : "dark");
 },
 current() {
 return document.documentElement.getAttribute("data-theme");
 }
};
