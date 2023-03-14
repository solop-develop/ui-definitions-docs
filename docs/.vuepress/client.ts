import { defineClientConfig } from '@vuepress/client'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// Field Button
import Button from './Component/Atom/FieldButtom/Button.vue'
import ButtonDisabled from './Component/Atom/FieldButtom/ButtonDisabled.vue'
import loadingButton from './Component/Atom/FieldButtom/loadingButton.vue'
import ButtonSize from './Component/Atom/FieldButtom/ButtonSize.vue'
import ButtonExample from './Component/Atom/FieldButtom/ButtonExample.vue'
// Field Text
import TextBasic from './Component/Atom/FieldText/TextBasic.vue'
import TextClearable from './Component/Atom/FieldText/TextClearable.vue'
import TextDisable from './Component/Atom/FieldText/TextDisable.vue'
import TextPassword from './Component/Atom/FieldText/TextPassword.vue'
import TextTextarea from './Component/Atom/FieldText/TextTextarea.vue'
import TextSizes from './Component/Atom/FieldText/TextSizes.vue'
import TextLimitLength from './Component/Atom/FieldText/TextLimitLength.vue'
// Field Switch
import SwitchBasic from './Component/Atom/FieldSwitch/SwitchBasic.vue'
import SwitchDisabled from './Component/Atom/FieldSwitch/SwitchDisabled.vue'
import SwitchIcon from './Component/Atom/FieldSwitch/SwitchIcon.vue'
import SwitchLoading from './Component/Atom/FieldSwitch/SwitchLoading.vue'
import SwitchSizes from './Component/Atom/FieldSwitch/SwitchSizes.vue'
import SwitchText from './Component/Atom/FieldSwitch/SwitchText.vue'
// Field Date
import DateFormats from './Component/Atom/FieldDatePiker/DateFormats.vue'
import DatePikerBasic from './Component/Atom/FieldDatePiker/DatePikerBasic.vue'
import DateRange from './Component/Atom/FieldDatePiker/DateRange.vue'
import MonthRange from './Component/Atom/FieldDatePiker/MonthRange.vue'
// Field Select
import SelectBase from './Component/Atom/FieldSelect/SelectBase.vue'
import SelectDisableOption from './Component/Atom/FieldSelect/SelectDisableOption.vue'
import SelectDisable from './Component/Atom/FieldSelect/SelectDisable.vue'
import SelectClearable from './Component/Atom/FieldSelect/SelectClearable.vue'
import SelectMultipleSelect from './Component/Atom/FieldSelect/SelectMultipleSelect.vue'
import SelectFilter from './Component/Atom/FieldSelect/SelectFilter.vue'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.use(ElementPlus)
    // Field Button
    app.component('Button', Button)
    app.component('ButtonDisabled', ButtonDisabled)
    app.component('loadingButton', loadingButton)
    app.component('ButtonSize', ButtonSize)
    app.component('ButtonExample', ButtonExample)
    // Field Text
    app.component('TextBasic', TextBasic)
    app.component('TextClearable', TextClearable)
    app.component('TextDisable', TextDisable)
    app.component('TextPassword', TextPassword)
    app.component('TextTextarea', TextTextarea)
    app.component('TextSizes', TextSizes)
    app.component('TextLimitLength', TextLimitLength)
    // Field Switch
    app.component('SwitchBasic', SwitchBasic)
    app.component('SwitchDisabled', SwitchDisabled)
    app.component('SwitchIcon', SwitchIcon)
    app.component('SwitchLoading', SwitchLoading)
    app.component('SwitchSizes', SwitchSizes)
    app.component('SwitchText', SwitchText)
    // Field Date
    app.component('DateFormats', DateFormats)
    app.component('DatePikerBasic', DatePikerBasic)
    app.component('DateRange', DateRange)
    app.component('MonthRange', MonthRange)
    // Field Select
    app.component('SelectBase', SelectBase)
    app.component('SelectDisableOption', SelectDisableOption)
    app.component('SelectDisable', SelectDisable)
    app.component('SelectClearable', SelectClearable)
    app.component('SelectMultipleSelect', SelectMultipleSelect)
    app.component('SelectFilter', SelectFilter)
  },
  setup() {},
  rootComponents: [],
})
