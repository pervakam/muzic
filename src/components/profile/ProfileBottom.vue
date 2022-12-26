<template>
  <div class="profile__bottom">
    <div class="profile__aside">
      <button v-if="isEdit" class="profile__aside-edit btn">
        {{ buttonText }}
        <span contenteditable>{{ price }}</span>
      </button>
      <ProfileList :list="list" v-if="list" />
      <div class="profile__musical" v-if="musical">
        <musical-style-item
          v-for="(item, index) in styles"
          :key="index"
          :isEdit="false"
          :category="item"
          musicButtonAddText="+ редактировать"
        />
      </div>
      <Social :socialList="socialList" :isEdit="isEdit" v-if="socialList" />
    </div>
    <div class="profile__more">
      <Playlist :isEdit="isEdit" v-if="!addMusic" />
      <MusicalStyle :isEdit="isEdit" v-if="!addMusic" />
      <div class="profile-add-music" v-if="addMusic">
        <transition>
          <button
            class="profile-add-music__button"
            @click="addMusicField"
            v-if="!musicField"
          >
            Добавить музыку
          </button>
        </transition>
        <transition>
          <add-music
            v-if="musicField"
            @button-click="musicField = !musicField"
          />
        </transition>
        <div class="songs">
          <review-card
            v-for="file in musicFiles"
            :key="file.title"
            :music-file="file"
            :review1="true"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileList from "@/components/profile/ProfileList.vue";
import Social from "@/components/Social.vue";
import Playlist from "@/components/playlist/Playlist.vue";
import MusicalStyle from "@/components/musical-style/MusicalStyleList.vue";
import MusicalStyleItem from "@/components/musical-style/MusicalStyleItem.vue";
import AddMusic from "@/components/player/AddMusic.vue";
import ReviewCard from "@/components/review/ReviewCard.vue";

export default {
  props: [
    "isEdit",
    "buttonText",
    "list",
    "socialList",
    "price",
    "musical",
    "styles",
    "addMusic",
  ],
  components: {
    ProfileList,
    Social,
    Playlist,
    MusicalStyle,
    MusicalStyleItem,
    AddMusic,
    ReviewCard,
  },
  data() {
    return {
      musicField: false,
      musicFiles: [
        {
          artist: "DJ Dark & MD DJ",
          title: "Erhu (Original Mix)",
          src: require("@/assets/mp3/Erhu.mp3"),
          artwork: require("@/assets/mp3/Erhu.png"),
          genres: ["deep house", "dance", "house"],
          demo: false,
          comments: [],
          yandex: false,
          headerControl: true,
        },
        {
          artist: "KVPV",
          title: "Sunshine",
          src: require("@/assets/mp3/Sunshine.mp3"),
          artwork: require("@/assets/mp3/Sunshine.png"),
          genres: ["deep house", "dance"],
          demo: true,
          comments: [
            "Песня начинается с интенсивных, зажигательных, запоминающихся гитарных риффов, смешанных с динамичными барабанными битами. Все это уже говорит слушателям о наступающем вайбе — жанр здесь можно было бы охарактеризовать как прогрессив-метал. Он резкий, живой, заводной, очень хорошо сбалансирован как в аранжировках, так и в композиции в целом.",
          ],
          yandex: false,
          headerControl: true,
        },
        {
          artwork: require("@/assets/mp3/Sunshine.png"),
          genres: ["deep house", "dance"],
          comments: [
            "Песня начинается с интенсивных, зажигательных, запоминающихся гитарных риффов, смешанных с динамичными барабанными битами. Все это уже говорит слушателям о наступающем вайбе — жанр здесь можно было бы охарактеризовать как прогрессив-метал. Он резкий, живой, заводной, очень хорошо сбалансирован как в аранжировках, так и в композиции в целом.",
          ],
          yandex: true,
          headerControl: true,
        },
      ],
    };
  },
  methods: {
    addMusicField() {
      console.log("hello");
      this.musicField = true;
    },
  },
};
</script>

<style lang="sass" scoped>
.profile__musical
    margin-bottom: 30px

.profile-add-music
  &__button
    background-color: #FFEEEE
    height: 60px
    width: 100%
    text-align: center
    border-radius: 10px
    border: 1px solid rgba(255, 108, 108, 0.2)
    font-weight: 600
    font-size: 16px
    line-height: 19px
    color: #FF6C6C

.songs
  margin-top: 36px
  display: flex
  flex-direction: column
  gap: 30px
</style>
