// .vitepress/theme/index.js
import DefaultTheme from "vitepress/theme";
import "./custom.css";
import MyLayout from "./MyLayout.vue";

export default {
    extends: DefaultTheme,
    Layout: MyLayout,
};