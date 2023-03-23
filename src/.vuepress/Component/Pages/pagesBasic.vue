<template>
	<el-card class="box-card">
		<el-button v-if="route !== ''" type="success" plain @click="route = ''"> {{ back }} </el-button>
		<span v-else>
			<el-button type="success" plain @click="route = home"> {{ home }} </el-button>
			<el-button type="success" plain @click="route = about"> {{ about }} </el-button>
		</span>
		<el-card shadow="never">
			<p style="text-align: center">
				Current route: {{ route }}
			</p>
		</el-card>
	</el-card>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const about = 'About';
const home = 'Home';
const back = 'Go back';
const route = ref('')
</script>
<style>
.link-base {
	text-decoration: auto;
}
</style>
