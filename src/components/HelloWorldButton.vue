<script setup lang="ts">
import { ref } from 'vue';

const message = ref('Fetch API');

async function getMessage() {
	const res = await fetch('api/');
	const data = await res.json();

	message.value = `Message: ${data.message}`;
}
</script>

<template>
	<button @click="getMessage">{{ message }}</button>
</template>
