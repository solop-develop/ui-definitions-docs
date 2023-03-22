// .vuepress/client.ts
import { defineClientConfig } from "@vuepress/client";
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// Field Button
import Button from './Component/Atom/FieldButtom/Button.vue';
import ButtonDisabled from './Component/Atom/FieldButtom/ButtonDisabled.vue';
import loadingButton from './Component/Atom/FieldButtom/loadingButton.vue';
import ButtonSize from './Component/Atom/FieldButtom/ButtonSize.vue';
import ButtonExample from './Component/Atom/FieldButtom/ButtonExample.vue';
// Field Text
import TextBasic from './Component/Atom/FieldText/TextBasic.vue';
import TextClearable from './Component/Atom/FieldText/TextClearable.vue';
import TextDisable from './Component/Atom/FieldText/TextDisable.vue';
import TextPassword from './Component/Atom/FieldText/TextPassword.vue';
import TextTextarea from './Component/Atom/FieldText/TextTextarea.vue';
import TextSizes from './Component/Atom/FieldText/TextSizes.vue';
import TextLimitLength from './Component/Atom/FieldText/TextLimitLength.vue';
// Field Switch
import SwitchBasic from './Component/Atom/FieldSwitch/SwitchBasic.vue';
import SwitchDisabled from './Component/Atom/FieldSwitch/SwitchDisabled.vue';
import SwitchIcon from './Component/Atom/FieldSwitch/SwitchIcon.vue';
import SwitchLoading from './Component/Atom/FieldSwitch/SwitchLoading.vue';
import SwitchSizes from './Component/Atom/FieldSwitch/SwitchSizes.vue';
import SwitchText from './Component/Atom/FieldSwitch/SwitchText.vue';
// Field Date
import DateFormats from './Component/Atom/FieldDatePiker/DateFormats.vue';
import DatePikerBasic from './Component/Atom/FieldDatePiker/DatePikerBasic.vue';
import DateRange from './Component/Atom/FieldDatePiker/DateRange.vue';
import MonthRange from './Component/Atom/FieldDatePiker/MonthRange.vue';
// Field Select
import SelectBase from './Component/Atom/FieldSelect/SelectBase.vue';
import SelectDisableOption from './Component/Atom/FieldSelect/SelectDisableOption.vue';
import SelectDisable from './Component/Atom/FieldSelect/SelectDisable.vue';
import SelectClearable from './Component/Atom/FieldSelect/SelectClearable.vue';
import SelectMultipleSelect from './Component/Atom/FieldSelect/SelectMultipleSelect.vue';
import SelectFilter from './Component/Atom/FieldSelect/SelectFilter.vue';
// Field Number
import NumberBsic from './Component/Atom/FieldNumber/NumberBsic.vue';
import NumberDisabled from './Component/Atom/FieldNumber/NumberDisabled.vue';
import NumberSteps from './Component/Atom/FieldNumber/NumberSteps.vue';
import NumberStepsStrictly from './Component/Atom/FieldNumber/NumberStepsStrictly.vue';
import NumberPrecision from './Component/Atom/FieldNumber/NumberPrecision.vue';
import NumberControlsPosition from './Component/Atom/FieldNumber/NumberControlsPosition.vue';
import NumberValueType from './Component/Atom/FieldNumber/NumberValueType.vue';
// Field Image
import ImageBasic from './Component/Atom/FieldImage/ImageBasic.vue';
// Field Tags
import TagsBasic from './Component/Atom/FieldTags/TagsBasic.vue';
import TagsRounded from './Component/Atom/FieldTags/TagsRounded.vue';
import TagsSizes from './Component/Atom/FieldTags/TagsSizes.vue';
import TagsTheme from './Component/Atom/FieldTags/TagsTheme.vue';
// Field Progress
import ProgressBasic from './Component/Atom/FieldProgress/ProgressBasic.vue';
import ProgressInternalPercentage from './Component/Atom/FieldProgress/ProgressInternalPercentage.vue';
import ProgressType from './Component/Atom/FieldProgress/ProgressType.vue';
// Field Silder
import SliderBasic from './Component/Atom/FieldSlider/SliderBasic.vue';
import SliderStep from './Component/Atom/FieldSlider/SliderStep.vue';
import SliderRange from './Component/Atom/FieldSlider/SliderRange.vue';
import SliderVertical from './Component/Atom/FieldSlider/SliderVertical.vue';
// Field Avatar
import AvatarBasic from './Component/Atom/FieldAvatar/AvatarBasic.vue';

/**
 * Moleculas
 */
// Action Panel
import ActionPanelClear from './Component/Molecula/ActionPanelClear.vue';
import ActionPanelClose from './Component/Molecula/ActionPanelClose.vue';
import ActionPanelCheck from './Component/Molecula/ActionPanelCheck.vue';
import ActionPanelSlots from './Component/Molecula/ActionPanelSlots.vue';
// Paginations
import PaginationBackground from './Component/Molecula/Paginations/PaginationBackground.vue';
import PaginationBasic from './Component/Molecula/Paginations/PaginationBasic.vue';
import PaginationHide from './Component/Molecula/Paginations/PaginationHide.vue';
import PaginationEvents from './Component/Molecula/Paginations/PaginationEvents.vue';

export default defineClientConfig({
  enhance: ({ app, router, siteData }) => {
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
    // Field Number
    app.component('NumberBsic', NumberBsic)
    app.component('NumberDisabled', NumberDisabled)
    app.component('NumberSteps', NumberSteps)
    app.component('NumberStepsStrictly', NumberStepsStrictly)
    app.component('NumberPrecision', NumberPrecision)
    app.component('NumberControlsPosition', NumberControlsPosition)
    app.component('NumberValueType', NumberValueType)
    // Field Image
    app.component('ImageBasic', ImageBasic)
    // Field Tags
    app.component('TagsBasic', TagsBasic)
    app.component('TagsRounded', TagsRounded)
    app.component('TagsSizes', TagsSizes)
    app.component('TagsTheme', TagsTheme)
    // Field Progress
    app.component('ProgressBasic', ProgressBasic)
    app.component('ProgressInternalPercentage', ProgressInternalPercentage)
    app.component('ProgressType', ProgressType)
    // Field Silder
    app.component('SliderBasic', SliderBasic)
    app.component('SliderStep', SliderStep)
    app.component('SliderRange', SliderRange)
    app.component('SliderVertical', SliderVertical)
    // Field Avatar
    app.component('AvatarBasic', AvatarBasic)
    // Action Panel
    app.component('ActionPanelClear', ActionPanelClear)
    app.component('ActionPanelClose', ActionPanelClose)
    app.component('ActionPanelCheck', ActionPanelCheck)
    app.component('ActionPanelSlots', ActionPanelSlots)
    // Paginations
    app.component('PaginationBackground', PaginationBackground)
    app.component('PaginationBasic', PaginationBasic)
    app.component('PaginationHide', PaginationHide)
    app.component('PaginationEvents', PaginationEvents)

  },
});
