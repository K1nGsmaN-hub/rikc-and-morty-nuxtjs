<template>
  <div class="global">
    <Nuxt class="main" role="main" />
    <Menu />
  </div>
</template>

<script>
import Menu from 'organisms/Menu'

export default {
  components: {
    Menu,
  },
}
</script>

<style lang="scss" scoped>
.global {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #0b1e2d;
}
.main {
  flex-grow: 1;
}
</style>
