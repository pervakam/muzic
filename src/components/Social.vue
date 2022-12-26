<template>
	<div class="social">
		<div class="social__list">
			<div class="social__item" v-for="(item, index) in socialList" :key="index">
				<a :href="item.url" class="social__icon"><img :src="item.icon" :alt="item.name"></a>
				<button v-if="isEdit" class="social__edit" @click="edtItem"><img src="~@/assets/img/social-edit.svg" alt="Редактировать"></button>
			</div>
			<button v-if="isEdit" class="social__item social__item_add"><img src="~@/assets/img/add.svg" alt="Добавить"></button>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['socialList', 'isEdit']
	}
</script>