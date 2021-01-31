<template>
<div>
	<h1>edit user data</h1>
	<form action="/" method="POST" @submit.prevent="handleSubmit">

		<label>ユーザID: {{ formUserId }}</label> <br>
		<br>

		<label>ユーザ名: <input v-model.lazy="formUserName"></label> <br>
		<br>

		<label>グループID: <input v-model.lazy="formGroupId"></label> <br>
		<br>

		<input type="submit" value="登録">
		<input type="button" value="戻る" @click="$router.back()">

	</form>
</div>
</template>

<script lang="ts" src="./user_data.ts"></script>
