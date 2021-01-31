<template>
<div>
		<h1 style="cursor: pointer" @click="handleClick">{{ message }}</h1>

		<ul>
			<li><router-link to="/">index</router-link></li>
			<li><router-link to="/hello">hello!</router-link></li>
		</ul>

		<div style="margin: 2em; padding: 1em; border: 1px solid gray;">
			<router-view/>
		</div>
</div>
</template>

<script lang="ts" src="./_layout.ts"></script>
