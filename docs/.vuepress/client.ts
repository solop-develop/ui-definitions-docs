import { defineClientConfig } from '@vuepress/client'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Button from './Component/Atom/FieldButtom/Button.vue'
import ButtonDisabled from './Component/Atom/FieldButtom/ButtonDisabled.vue'
import loadingButton from './Component/Atom/FieldButtom/loadingButton.vue'
import ButtonSize from './Component/Atom/FieldButtom/ButtonSize.vue'
import ButtonExample from './Component/Atom/FieldButtom/ButtonExample.vue'
import TextBasic from './Component/Atom/FieldText/TextBasic.vue'
import TextClearable from './Component/Atom/FieldText/TextClearable.vue'
import TextDisable from './Component/Atom/FieldText/TextDisable.vue'
import TextPassword from './Component/Atom/FieldText/TextPassword.vue'
import TextTextarea from './Component/Atom/FieldText/TextTextarea.vue'
import TextSizes from './Component/Atom/FieldText/TextSizes.vue'
import TextLimitLength from './Component/Atom/FieldText/TextLimitLength.vue'


export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.use(ElementPlus)
    app.component('Button', Button)
    app.component('ButtonDisabled', ButtonDisabled)
    app.component('loadingButton', loadingButton)
    app.component('ButtonSize', ButtonSize)
    app.component('ButtonExample', ButtonExample)
    app.component('TextBasic', TextBasic)
    app.component('TextClearable', TextClearable)
    app.component('TextDisable', TextDisable)
    app.component('TextPassword', TextPassword)
    app.component('TextTextarea', TextTextarea)
    app.component('TextSizes', TextSizes)
    app.component('TextLimitLength', TextLimitLength)
  },
  setup() {},
  rootComponents: [],
})
