<template>
  <nav class="menu">
    <MenuItem
      v-for="{ id, image, isActive, title } in tabs"
      :key="id"
      :title="title"
      :image="image"
      :is-active="isActive"
    />
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import MenuItem from 'molecules/MenuItem/index.vue'

const TABS = {
  characters: 'characters',
  locations: 'locations',
  episodes: 'episodes'
}

export default Vue.extend({
  name: 'Menu',
  components: { MenuItem },
  data() {
    return {
      tabs: [
        {
          id: 0,
          title: 'Персонажи',
          image: TABS.characters,
          isActive: true,
        },
        {
          id: 1,
          title: 'Локации',
          image: TABS.locations,
          isActive: false,
        },
        {
          id: 2,
          title: 'Эпизоды',
          image: TABS.episodes,
          isActive: false,
        },
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
.menu {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding: 5px 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #152A3A;
  box-shadow: 0 -4px 30px rgba(0, 0, 0, 0.08);
}
</style>
