<template>
  <div class="v-artist-music">
    <div class="container">
      <profile-top
        :isEdit="isEdit"
        :img="profile.img"
        :name="profile.name"
        :desc="profile.desc"
      />
      <profile-bottom
        :isEdit="isEdit"
        :buttonText="aside.buttonText"
        :list="aside.list"
        :socialList="socialList"
        :price="profile.price"
        :musical="true"
        :styles="styles"
        :addMusic="true"
      />
    </div>
  </div>
</template>

<script>
import ProfileTop from "@/components/profile/ProfileTop.vue";
import ProfileBottom from "@/components/profile/ProfileBottom.vue";

export default {
  components: {
    ProfileTop,
    ProfileBottom,
  },
  data() {
    return {
      isEdit: false,
      profile: {
        img: require("@/assets/images/deafheaven.png"),
        name: "Deafheaven",
        price: 123,
        desc: "Блэк-метал-группа из Сан-Франциско, основанная в 2010 году. Группа была создана двумя музыкантами — вокалистом Джорджем Кларком и гитаристом Керри МакКоем, которые вместе записали и самостоятельно выпустили демо-альбом. После выпуска демо в группу пришли три новых участника и Deafheaven начали гастролировать. В конце 2010 года группа подписала контракт с Deathwish Inc., а позже выпустила свой дебютный альбом Roads to Judah в апреле 2011 года. Они создали уникальный стиль, сочетающий в себе блэк-метал, шугейз и пост-рок, позже названный рецензентами «блэкгейз».",
      },
      socialList: [
        {
          name: "yandex",
          icon: require("@/assets/img/yandex-music.svg"),
          url: "#",
        },
        {
          name: "vk",
          icon: require("@/assets/img/vk.svg"),
          url: "#",
        },
        {
          name: "youtube",
          icon: require("@/assets/img/youtube.svg"),
          url: "",
        },
      ],
      aside: {
        buttonText: "Рецензировать за:",
        list: [
          {
            icon: require("@/assets/img/playlist.svg"),
            text: "Треков",
            count: 139,
          },
          {
            icon: require("@/assets/img/recens.svg"),
            text: "Рецензий",
            count: 43,
          },
          {
            icon: require("@/assets/img/like.svg"),
            text: "Одобрено",
            count: 96,
          },
        ],
      },
      styles: [
        {
          list: [
            "дрим-поп",
            "метал",
            "хардкор",
            "альтернативный рок",
            "edm",
            "трэп",
            "неопсиходелия",
            "гаражный рок",
            "мамбл рэп",
            "r&b",
          ],
        },
      ],
    };
  },
};
</script>

<style lang="sass" scoped>
.v-artist-music
  padding-top: 80px
  background-color: $background
</style>
