<template>
  <el-card class="box-card">
    <!-- <el-popover
      :visible="visible"
      placement="top"
      :width="460"
    >
      <p>Are you sure to delete this?</p>
      <div style="text-align: right; margin: 0">
        <el-button size="small" text @click="visible = false">cancel</el-button>
        <el-button size="small" type="primary" @click="visible = false"
          >confirm</el-button
        >
      </div>
      <template #reference>
        <el-button @click="visible = true">Delete</el-button>
      </template>
    </el-popover> -->
    <el-popover
      :visible="visible"
      trigger="click"
      placement="top"
      :width="460"
    >
      <el-input v-model="input" placeholder="Please input" />
      <el-button type="info" @click="handleClose" style="float: right;">
        <template #icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="0 96 960 960"
            width="48"
          >
            <path
              d="m650 641-42-42 134-105-262-204-102 79-43-43 145-112 360 280-190 147Zm86 86-43-43 97-75 50 37-104 81Zm94 264L641 801 480 926 120 646l50-37 310 241 118-92-43-43-75 59-360-280 120-94L73 234l43-43 757 757-43 43ZM493 484Z"
            />
          </svg>
        </template>
      </el-button>
      <el-button type="danger" @click="visible = !visible" style="float: right;">
        <template #icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="0 96 960 960"
            width="48"
          >
            <path
              d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"
            />
          </svg>
        </template>
      </el-button>
      <template #reference>
        <el-button @click="visible = true">Click to activate</el-button>
      </template>
    </el-popover>
  </el-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
const visible = ref(false)

const handleClose = (done: () => void) => {
  input.value = ''
  done()
}
</script>
