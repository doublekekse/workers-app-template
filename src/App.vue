<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
	<header>
		<nav>
			<RouterLink to="/">Home</RouterLink>
			<RouterLink to="/about">About</RouterLink>
		</nav>
	</header>
	<RouterView />
</template>

<style scoped>
header {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	padding: 1rem;
	border-bottom: 1px solid black;

	nav {
		display: flex;
		gap: 1rem;
		justify-content: center;
	}
}
</style>
