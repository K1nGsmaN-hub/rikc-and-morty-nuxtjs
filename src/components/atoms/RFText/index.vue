<template>
  <p :class="['text', variant && `text--${variant}`]">
    <!-- @slot default slot for content -->
    <slot />
  </p>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import PropsValidator from 'services/common/PropsValidator'

type VariantType = 'large' | 'default' | 'small'

/**
 * ATOMS/RFText
 * @displayName RFText
 */
export default Vue.extend({
  name: 'RFText',
  props: {
    variant: {
      type: String as PropType<VariantType>,
      default: 'default',
      validator(v: VariantType) {
        return PropsValidator.includes<VariantType>(
          ['large', 'default', 'small'],
          v,
          'ATOMS/RFText'
        )
      },
    },
  },
})
</script>

<style lang="scss" scoped>
.text {
  color: #fff;
  margin: 0;
  &--default {
    font-size: rem(12);
    line-height: rem(16);
  }
  &--large {
    font-size: rem(16);
    line-height: rem(24);
    font-weight: 700;
  }
  &--small {
    font-size: rem(10);
    line-height: rem(16);
  }
}
</style>
