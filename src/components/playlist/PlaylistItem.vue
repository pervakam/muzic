<template>
	<a :href="link" class="playlist__item" target="_blank">
		<div class="playlist__img"><img :src="img" :alt="name"></div>
		<div class="playlist__item-content">
			<h4 class="playlist__name">{{ name }}</h4>
			<div class="playlist__text" v-html="text"></div>
		</div>
		<button v-if="isEdit" class="playlist__trash" @click="removeItem" :data-id="index"><img src="~@/assets/img/trash.svg" alt="Удалить"></button>
	</a>
</template>

<script>
	export default {
		props: ['isEdit', 'link', 'img', 'name', 'text', 'index', 'playlistData'],
		emits: ['update:playlistData'],
		methods: {
			removeItem(e) {
				e.preventDefault();
				console.log(e.target);
				this.$emit('update:playlistData', this.playlistData.splice(e.target.dataset.id, 1));
			}
		}
	}
</script>
