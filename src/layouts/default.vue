<template>
  <div class="global">
    <template v-if="typeOfModal !== 'ModalEnterPassword'">
      <TheHeader />
      <Nuxt class="main" role="main" />
      <TheFooter />
      <MobileBottomMenu />
    </template>
    <Modals />
  </div>
</template>

<script>
import TheHeader from 'templates/TheHeader'
import TheFooter from 'templates/TheFooter'
import Modals from 'organisms/Modals'
import MobileBottomMenu from 'molecules/MobileBottomMenu'
export default {
  components: {
    MobileBottomMenu,
    Modals,
    TheFooter,
    TheHeader,
  },
  computed: {
    typeOfModal() {
      return this.$store.getters['modals/getTypeOfModal']
    },
  },
  created() {
    if (process.env.SHOW_MODAL === 'show') {
      this.$store.commit('modals/setCloseOnBackdrop', false)
      this.$store.commit('modals/open', {
        typeOfModal: 'ModalEnterPassword',
      })
    }
  },
}
</script>

<style lang="scss" scoped>
.global {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.main {
  flex-grow: 1;
}
</style>
