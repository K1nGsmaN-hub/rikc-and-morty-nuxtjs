<template>
  <article :class="['character-card', `character-card_${view}`]">
    <div class="character-card__image">
      <img :src="image" alt="character avatar">
    </div>

    <div class="character-card__info">
      <RFText class="character-card__status">{{ status }}</RFText>
      <RFHeading tag="h3" class="character-card__name">{{ name }}</RFHeading>
      <RFText class="character-card__race">{{ race }}</RFText>
    </div>
  </article>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import RFText from "atoms/RFText/index.vue";
import RFHeading from "atoms/RFHeading/index.vue";
import { CharacterCardView } from "./character-card.types";

export default Vue.extend({
  name: 'CharacterCard',
  components: {RFHeading, RFText},
  props: {
    view: {
      type: String as PropType<CharacterCardView>,
      default: 'row'
    },
    status: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    race: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.character-card {
  display: flex;
  justify-content: flex-start;
  align-items: center;

  &_column {
    flex-direction: column;

    .character-card__image {
      width: 120px;
      height: 120px;
      margin: 0 0 18px;
    }

    .character-card__info {
      text-align: center;
    }
  }

  &__image {
    overflow: hidden;
    width: 74px;
    height: 74px;
    margin: 0 18px 0 0;
    border-radius: 100%;

    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  & &__status {
    font-size: 10px;
    line-height: 16px;
    font-weight: 500;
    letter-spacing: 1.5px;
    color: $c-primary;
    text-transform: uppercase;
  }

  & &__name {
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    color: #fff;
    letter-spacing: 0.5px;
  }

  & &__race {
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.5px;
    color: $c-subtle-text;
  }
}
</style>
