import { defineClientConfig } from '@vuepress/client'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Button from './Component/Button.vue'
import ButtonDisabled from './Component/ButtonDisabled.vue'
import loadingButton from './Component/loadingButton.vue'
import ButtonSize from './Component/ButtonSize.vue'
import Markdown from 'vue3-markdown-it';
export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.use(ElementPlus)
    app.use(Markdown)
    app.component('Button', Button)
    app.component('ButtonDisabled', ButtonDisabled)
    app.component('loadingButton', loadingButton)
    app.component('ButtonSize', ButtonSize)
  },
  setup() {},
  rootComponents: [],
})
