<template>
  <component :is="currentForm" />
</template>

<script>
import Login from "@/components/authorization/Login";
import RegistrationArtist from "@/components/authorization/RegistrationArtist";
import RegistrationCurator from "@/components/authorization/RegistrationCurator";
import {useAuthStore} from "@/stores/AuthStore";
import {storeToRefs} from "pinia";

export default {
  components: {
    Login,
    RegistrationArtist,
    RegistrationCurator
  },
  setup() {
    const auth = useAuthStore()
    const {currentForm} = storeToRefs(auth)

    return {
      currentForm,
    }

  }
}

</script>

<style scoped lang="sass">

</style>
