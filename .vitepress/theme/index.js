// .vitepress/theme/index.js
import DefaultTheme from "vitepress/theme";
import "./custom.css";
import MyLayout from "./NadstresnicaLayout.vue";

export default {
    extends: DefaultTheme,
    Layout: MyLayout,
    head: [['link', { rel: 'icon', href: 'assets/favicon.ico' }]],
};