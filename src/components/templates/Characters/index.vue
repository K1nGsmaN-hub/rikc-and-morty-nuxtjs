<template>
  <section class="characters container">
    <RFInput
      id="characters-search"
      class="characters__search"
      type="text"
      placeholder="Найти персонажа"
      v-model="searchInput"
      @input="searchCharacter"
    />

    <div class="characters__view">
      <RFText class="characters__view-title">
        Всего персонажей: {{ characters.length }}
      </RFText>
      <button
        type="button"
        class="characters__view-control"
        @click="changeViewStyle"
      >
        <GridIcon v-if="viewStyle === 'row'" />
        <RowIcon v-else />
      </button>
    </div>

    <div :class="['characters__content', `characters__content_${viewStyle}`]">
      <CharacterCard
        v-for="char in characters"
        :key="char.id"
        :name="char.name"
        :image="char.image"
        :status="char.status"
        :race="`${char.species}, ${char.gender}`"
        :view="viewStyle"
      />
    </div>
  </section>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import RFInput from 'atoms/RFInput/index.vue'
import RFText from 'atoms/RFText/index.vue'
import GridIcon from 'icons/grid.svg?inline'
import RowIcon from 'icons/row.svg?inline'
import { ICharacters } from 'types/DTO/Characters'
import { CharacterCardView } from 'molecules/CharacterCard/character-card.types'
import CharacterCard from 'molecules/CharacterCard/index.vue'

export default Vue.extend({
  name: 'Characters',
  components: { CharacterCard, RFText, RFInput, GridIcon, RowIcon },
  props: {
    characters: {
      type: Array as PropType<ICharacters[]>,
      required: true,
    },
  },
  data() {
    return {
      searchInput: '',
      viewStyle: 'row' as CharacterCardView,
    }
  },
  methods: {
    changeViewStyle() {
      if (this.viewStyle === 'row') {
        this.viewStyle = 'column'
      } else {
        this.viewStyle = 'row'
      }
    },
    async searchCharacter() {
      setTimeout(await this.$store.dispatch(
        'characters/searchCharacters',
        this.searchInput
      ), 2000)
    },
  },
})
</script>

<style lang="scss" scoped>
.characters {
  margin-top: 54px;

  & &__search {
    margin-bottom: 20px;
  }

  &__view {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    &-title {
      font-size: 10px;
      font-weight: 500;
      line-height: 16px;
      color: $c-text;
      text-transform: uppercase;
    }

    &-control {
      width: 34px;
      height: 34px;
      background: none;
      padding: 5px;
      margin: 0;
      border: none;
      border-radius: 5px;

      &:active {
        background-color: #152a3a;
      }
    }
  }

  &__content {
    display: grid;
    grid-gap: 24px;
    justify-content: center;
    overflow-y: auto;
    max-height: calc(100vh - 238px);

    &_row {
      grid-template-columns: 1fr;
    }

    &_column {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>
