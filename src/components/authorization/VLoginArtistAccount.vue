<template>
  <div class="v-login-artist-account container-narrow">
    <h1 class="v-login-artist-account__title typography-title">Вход</h1>
    <div class="v-login-artist-account__blocks">
      <base-block class="v-login-artist-account__block">
        <img
          class="v-login-artist-account__avatar"
          src="@/assets/account.png"
          alt="avatar"
        />
        <span class="v-login-artist-account__text typography-caption"
          >Deafheaven</span
        >
      </base-block>
      <base-block class="v-login-artist-account__block">
        <base-button
          class="v-login-artist-account__add"
          icon="add"
          :outline="true"
          @button-click="addNewArtist"
        ></base-button>
      </base-block>
    </div>
  </div>
</template>

<script>
import BaseBlock from "@/components/base1/BaseBlock.vue";
import BaseButton from "@/components/base1/BaseButton.vue";

export default {
  components: {
    BaseBlock,
    BaseButton,
  },
  methods: {
    addNewArtist() {
      this.$router.push("/add_artist");
    },
  },
};
</script>

<style lang="sass" scoped>
.v-login-artist-account
  margin-top: 95px
  margin-bottom: 123px
  +xs()
    margin-top: 23px
    margin-bottom: 23px

  &__text
    +xs()
      display: none

  &__title
    text-align: center
    margin-bottom: clamp(20px, 5%, 30px)


  &__blocks
    display: flex
    flex-wrap: wrap
    align-items: center
    justify-content: center
    gap: clamp(15px, 5%, 30px)


  &__block
    flex-shrink: 0
    width: clamp(135px, 40%, 285px)
    aspect-ratio: 1/1
    display: flex
    align-items: center
    justify-content: center
    flex-direction: column
    gap: 10px
    padding: 0
    cursor: pointer
    user-select: none


  &__avatar
    border-radius: 10px
    overflow: hidden
    max-width: 100%
    flex-shrink: 0
    width: 54%
    height: 54%


  &__add
    padding: 0
    width: 54%
    height: 54%
    flex-grow: 0
</style>
