<template>
<div>
	<h1>user list</h1>

	<ul>
		<li v-for="item in list" :key="item.id">
			<a href="javascript: void 0" @click="handleSelect(item.id)">{{ item.name }}</a>
		</li>
	</ul>

	<p>
			<a @click="$router.back()" href="javascript:void 0">
				back
			</a>
	</p>
</div>
</template>

<script lang="ts" src="./user_list.ts"></script>