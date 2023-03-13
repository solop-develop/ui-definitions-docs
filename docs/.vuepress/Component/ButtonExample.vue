<template>
  <el-card class="box-card">
    <p style="text-align: center;">
      <p style="color: black;">
        {{ slotHeader }}
      </p>
      <el-button
        :type="typoButton"
        :disabled="isDisable"
        :loading="isLoading"
        :size="sizeButton"
        :plain="isPlain"
        :round="isRound"
        :circle="isCircle"
        :icon="iconButton"
      >
        {{ text }} {{ slotContent }}
      </el-button>
      <p style="color: black;">
        {{ slotFooter }}
      </p>
    </p>
    <el-divider content-position="center">
      {{ '(Attributes and Props) Button' }}
    </el-divider>
    <!-- <el-form
      label-position="top"
      label-width="100px"
      :inline="true"
    >
      <el-form-item label="Button Content">
        <el-input v-model="text" placeholder="Button Content" />
      </el-form-item>
      <el-form-item label="Type Button">
        <el-select v-model="typoButton" class="m-2" placeholder="Select" size="large">
            <el-option
              v-for="item in optionsType"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
      </el-form-item>
      <el-form-item label="Disabled Button">
        <el-switch
          v-model="isDisable"
          style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
        />
      </el-form-item>
      <el-form-item label="Loading Button">
        <el-switch
          v-model="isLoading"
          style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
        />
      </el-form-item>
      <el-form-item label="Plain Button">
        <el-switch
          v-model="isPlain"
          style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
        />
      </el-form-item>
      <el-form-item label="Round Button">
        <el-switch
          v-model="isRound"
          style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
        />
      </el-form-item>
      <el-form-item label="Circle Button">
        <el-switch
          v-model="isCircle"
          style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
        />
      </el-form-item>
    </el-form> -->
    <br>
    <el-form
      label-position="top"
      label-width="100px"
      :inline="true"
    >
      <el-form-item label="Size Button">
        <el-select v-model="sizeButton" class="m-2" placeholder="Select" size="large">
          <el-option label="Default" value="" />
          <el-option label="Large" value="large" />
          <el-option label="Small" value="small" />
        </el-select>
      </el-form-item>
      <el-form-item label="Icon Button">
        <el-select v-model="iconButton" class="m-2" placeholder="Select" size="large">
          <el-option label="Default" value="" />
          <el-option label="Check" :value="Check" />
          <el-option label="Delete" :value="Delete" />
          <el-option label="Edit" :value="Edit" />
          <el-option label="Message" :value="Message" />
          <el-option label="Search" :value="Search" />
        </el-select>
      </el-form-item>
      <el-form-item label="Enable Slots Header">
        <el-switch
          v-model="isSlotHeader"
          style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
          @change="onSubmit(isSlotHeader, 'slotHeader')"
        />
        <el-input  v-if="isSlotHeader" v-model="slotHeader" placeholder="Add content to Slot Header"/>
      </el-form-item>
      <el-form-item label="Enable Slots Content">
        <el-switch
          v-model="isSlotContent"
          style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
          @change="onSubmit(isSlotContent, 'slotContent')"
        />
        <el-input  v-if="isSlotContent" v-model="slotContent" placeholder="Add content to Slot Content" />
      </el-form-item>
      <el-form-item label="Enable Slots Footer">
        <el-switch
          v-model="isSlotFooter"
          style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
          @change="onSubmit(isSlotFooter, 'slotFooter')"
        />
        <el-input v-if="isSlotFooter" v-model="slotFooter" placeholder="Add content to Slot Footer" />
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script lang="ts" setup>
  import {
    Check,
    Delete,
    Edit,
    Message,
    Search,
    Star,
  } from '@element-plus/icons-vue'
import { ref } from 'vue'
const text = ref('Example')
const typoButton = ref('')
const sizeButton =  ref('')
const iconButton =  ref('')
const isDisable = ref(false)
const isLoading = ref(false)
const isPlain = ref(false)
const isRound = ref(false)
const isCircle = ref(false)

const optionsType = [
  {
    value: '',
    label: 'Default',
  },
  {
    value: 'primary',
    label: 'Primary',
  },
  {
    value: 'success',
    label: 'Success',
  },
  {
    value: 'info',
    label: 'Info',
  },
  {
    value: 'warning',
    label: 'Warning',
  },
  {
    value: 'danger',
    label: 'Danger',
  }
]

const slotHeader = ref('')
const slotContent = ref('')
const slotFooter = ref('')

const isSlotHeader = ref(false)
const isSlotContent = ref(false)
const isSlotFooter = ref(false)

const onSubmit = (action, option) => {
  if (option === 'slotHeader' && !action) {
    slotHeader.value = ''
    return
  } else if (option === 'slotContent' && !action) {
    slotContent.value = ''
    return
  } else if (option === 'slotFooter' && !action) {
    slotFooter.value = ''
    return
  }
}
</script>
<style lang="scss" scoped>
  .el-row {
    margin-bottom: 20px;
  }
  .el-button-code {
    padding-top: 0px;
    float: right;
  }
  .el-card-option {
    padding-top: 0px;
    padding-right: 10px;
    padding-bottom: 0px;
    padding-left: 10px;
  }
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    text-align: center;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>
<style>
  .el-card.is-always-shadow {
    background: transparent;
    color: transparent;
  }
  .el-row {
    margin-bottom: 20px;
  }
</style>
