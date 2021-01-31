<template>
<div>

	<div style="margin: 2em; padding: 1em; border: 1px solid gray;">
		<router-view/>
	</div>

	<div v-show="isBusy"
			class="busy-veil"
			style="
				position: fixed; left:0; top:0; right:0; bottom:0; z-index: 9999999;
				width: 100%; height: 100%;
				background-color:rgba(0, 0, 0, 0.1);">

		<table style="width:100%; height:100%;">
			<tr><td
				style="text-align:center; vertical-align:middle; font-weight: bold;
					font-size:large; color:white; text-shadow: 0 1px 3px black;">

			<span style="padding: 1em 12em; background-color: #3068a8">
				Loading...
			</span>
			</td></tr>
		</table>
	</div>
</div>
</template>

<script lang="ts" src="./_layout.ts"></script>
