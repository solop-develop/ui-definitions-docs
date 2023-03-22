<template>
  <el-card class="box-card">
    <div>
			<el-switch v-model="value" />
			<hr class="my-4" />
			<el-pagination
				v-show="value"
				:total="50"
				layout="prev, pager, next"
			/>
		</div>
  </el-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const value = ref(true)

</script>
