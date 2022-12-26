<template>
	<!-- start section profile -->
	<section class="profile">
		<div class="container">

			<ProfileUserTop :img="profile.img" :name="profile.name" :desc="profile.desc" :cat="profile.cat"/>
			<ProfileUserBottom :sendText="aside.sendText" :list="aside.list" :socialList="socialList"  :price="profile.price"/>

		</div>
	</section>
	<!-- end section profile -->
</template>

<script>
// @ is an alias to /src
import ProfileUserBottom from '@/components/profile/ProfileUserBottom.vue'
import ProfileUserTop from '@/components/profile/ProfileUserTop.vue'

export default {
	name: 'Profile Edit',
	components: {
		ProfileUserBottom,
		ProfileUserTop
	},
	data() {
		return {
			profile: {
				img: require('@/assets/img/profile-logo.jpg'),
				name: 'Electric Funeral Records',
				cat: 'ПЛЕЙЛИСТ',
				price: 123,
				desc: '<p>Уделяя особое внимание року, гранжу, стоунеру, экстремальному металлу, металлу, хардкору и панк-року, мы стремимся продвигать и пробиваться сквозь барьеры всех видов тяжелой и экстремальной музыки по всему миру.</p><p>Мы верим в силу музыки и будем сотрудничать с группами и музыкантами, которые вносят свой вклад в наше дело. Мы хотим предоставить публике и художнику уникальный способ восприятия искусства. Мы очень рады сделать этот шаг к организованной, устойчивой, единой сцене и, прежде всего, включенной и без каких-либо предубеждений и различий!</p>'
			},
			socialList: [
				{
					name: 'yandex',
					icon: require('@/assets/img/yandex-music.svg'),
					url: '#'
				},
				{
					name: 'vk',
					icon: require('@/assets/img/vk.svg'),
					url: '#'
				},
				{
					name: 'youtube',
					icon: require('@/assets/img/youtube.svg'),
					url: ''
				}
			],
			aside: {
				sendText: 'Отправить музыку',
				list: [
					{
						icon: require('@/assets/img/playlist.svg'),
						text: 'Взял в плейлист',
						count: 109,
					},
					{
						icon: require('@/assets/img/recens.svg'),
						text: 'Срецензировал',
						count: 43,
					},
					{
						icon: require('@/assets/img/react.svg'),
						text: 'Среагировал',
						count: 96,
					},
					{
						icon: require('@/assets/img/like.svg'),
						text: 'Лайков на рецензии',
						count: 138,
					},
					{
						icon: require('@/assets/img/dislike.svg'),
						text: 'Дизлайков на рецензии',
						count: 256,
					}
				]
			}
		}
	}
}
</script>