<template>
<div>
	<h1>user list</h1>

	<ul>
		<li v-for="item in list" :key="item.id">{{ item.name }}</li>
	</ul>

	<p>
			<a @click="$router.back()" href="javascript:void 0">
				back
			</a>
	</p>
</div>
</template>

<script lang="ts" src="./user_list.ts"></script>