<template>
  <header
      class="header"
      :class="{'header--unauthorized' : isSignIn === false}"
  >
    <div class="container header-inner">
      <router-link to="/">
        <img src="@/assets/images/logo.svg" alt="logo" />
      </router-link>
      <nav v-if="isSignIn" class="header-menu">
        <ul class="header-list">
          <li v-for="(link, index) in links" :key="index">
            <router-link class="header-link typography-link" :to="link.link">
              <base-icon :name="link.icon" />
              <span>{{ link.name }}</span>
            </router-link>
          </li>
          <li>
            <button
                class="header-link typography-link"
                @click="logout"
            >
              <base-icon name="logout" />
              <span>Выйти</span>
            </button>
          </li>
        </ul>
      </nav>
      <div v-else class="header-menu header-menu--unauthorized">
        <div class="header__registration-links">
          <button
              class="header__registration-link header__registration-link--curator"
              @click="setCurrentForm('RegistrationCurator')"
          >
            <span>Стать куратором</span>
          </button>
          <button
              class="header__registration-link"
              @click="setCurrentForm('RegistrationArtist')"
          >
            <span>Зарегистрироваться</span>
          </button>
        </div>
        <button
            class="header-link typography-link"
            @click="setCurrentForm('Login')"
        >
          <base-icon name="login" />
          <span>Войти</span>
        </button>
      </div>
      <button class="header-mobile-menu">
        <base-icon name="burger" />
      </button>
    </div>
  </header>
</template>

<script>
import BaseIcon from "@/components/base/BaseIcon.vue";
import {useAuthStore} from "@/stores/AuthStore";
import {storeToRefs} from "pinia";

export default {
  components: {
    BaseIcon,
  },
  data() {
    return {
      links: [
        { link: "/profile", name: "Профиль", icon: "profile" },
        { link: "/reviews", name: "Рецензии", icon: "review" },
        { link: "/wallet/curator", name: "Кошелек", icon: "wallet" },
        { link: "/settings", name: "Настройки", icon: "settings" },
        { link: "/allpages", name: "Все страницы", icon: "logout" },
      ],
    };
  },
  setup() {
    const auth = useAuthStore()

    const {isSignIn} = storeToRefs(auth)
    const {setCurrentForm, logout} = auth

    return {
      isSignIn,
      setCurrentForm,
      logout
    }
  }
};
</script>

<style lang="sass" scoped>
.header
  padding: 24px 0
  background-color: $light

  &--unauthorized
    padding: 8px 0

  +sm()
    padding: 0
    min-height: initial
  &-menu
    +sm()
      display: none
    &--unauthorized
      display: flex
  &__registration-links
    display: flex
    margin-right: 52px
    background: $accent
    border: 2px solid $accent
    border-radius: 8px

  &__registration-link
    padding: 12px 28px
    font-weight: 700
    font-size: 18px
    line-height: 150%

    span
      color: $light

    &--curator
      background-color: $light
      border-radius: 8px

      span
        color: $accent

  &-inner
    +flex($jc: space-between)
  &-list
    display: flex
    gap: 30px
  &-link
    display: flex
    align-items: center
    gap: 10px
    font-weight: 500
  &-mobile-menu
    display: none
    position: relative
    right: -24px
    +sm()
      display: flex
</style>
