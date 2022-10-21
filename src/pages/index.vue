<template>
  <Characters :characters="characters" />
</template>

<script lang="ts">
import Vue from 'vue'
import CharacterCard from 'molecules/CharacterCard/index.vue'
import RFInput from 'atoms/RFInput/index.vue'
import { ICharacters } from 'types/DTO/Characters'
import Characters from "templates/Characters/index.vue";

export default Vue.extend({
  name: 'Index',
  components: { Characters, RFInput, CharacterCard },
  async asyncData({ store }) {
    await store.dispatch('characters/fetchCharacters')
  },
  computed: {
    characters(): ICharacters[] {
      return this.$store.getters['characters/getCharacters']
    },
  },
})
</script>
