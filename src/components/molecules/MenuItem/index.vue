<template>
  <button
    type="button"
    :class="{ 'menu-item': true, 'menu-item_active': isActive }"
  >
    <img
      :src="require(`~/assets/images/${image}${isActive ? '-active' : ''}.png`)"
      :alt="image"
    />
    <RFHeading class="menu-item__title" tag="h2">{{ title }}</RFHeading>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
import RFHeading from 'atoms/RFHeading/index.vue'

export default Vue.extend({
  name: 'MenuItem',
  components: { RFHeading },
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
    title: {
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
.menu-item {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 5px 10px;
  background: none;
  border: none;
  border-radius: 10px;

  &:active {
    background-color: #0b1e2d;
  }

  & > img {
    width: 24px;
    height: 24px;
  }

  & &__title {
    font-size: 12px;
    line-height: 16px;
    font-weight: 400;
    color: $c-text;
  }

  &_active &__title {
    color: $c-primary;
  }
}
</style>
