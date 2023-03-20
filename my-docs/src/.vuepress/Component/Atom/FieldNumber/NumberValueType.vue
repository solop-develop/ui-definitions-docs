<template>
  <el-card class="box-card">
    <p> {{ 'Value Type' }} <el-tag effect="Light">  {{ 'ID / INTEGER ' }} </el-tag> </p>
    <el-input-number v-model="num" :step="2" step-strictly style="width: 100%" />
    <p> {{ 'Value Type' }} <el-tag effect="Light">  {{ 'NUMBER / QUANTITY' }} </el-tag> </p>
    <el-input-number
      v-model="num2"
      :precision="2"
      :step="0.1"
      step-strictly
      style="width: 100%"
    />
    <p> {{ 'Value Type' }} <el-tag effect="Light">  {{ 'AMOUNT / COSTS_PLUS_PRICES' }} </el-tag> </p>
    <el-input-number
      v-show="currentFocust"
      ref="FieldNumberAmount"
      v-model="num3"
      :precision="2"
      :step="0.1"
      step-strictly
      style="width: 100%"
      @focus="isFocus"
      @blur="isBlur"
      @change="handleChange"
    />
    <el-input
      v-show="!currentFocust"
      v-model="amount"
      style="width: 100%"
      @focus="isFocus"
    />
  </el-card>
</template>
<script lang="ts" setup>
import { ref, computed } from 'vue'
const FieldNumberAmount = ref({});
const num = ref(1)
const num2 = ref(1)
const num3  = ref(1)
const amount = ref('')

const currentFocust = ref(false)
amount.value = '$' + num3.value.toString()
const handleChange = (value: number) => {
  amount.value = '$' + value.toString()
}

const isFocus = (focus: boolean) => {
  FieldNumberAmount.value.focus();
  currentFocust.value = true;
};
const isBlur = (blur: boolean) => {
  currentFocust.value = false;
};
</script>

<style>
.el-input-number .el-input__inner {
  line-height: 1;
  text-align: right;
}
.el-input .el-input__inner {
  line-height: 1;
  text-align: right;
}
</style>
