<template>
  <component
    :is="tag"
    :class="['rf-heading', variant && `rf-heading--${variant}`]"
  >
    <!-- @slot default slot for content -->
    <slot />
  </component>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import PropsValidator from 'services/common/PropsValidator'

type TagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
type VariantType = 'light' | 'dark'

/**
 * ATOMS/RFHeading
 * @displayName RFHeading
 */
export default Vue.extend({
  name: 'RFHeading',
  props: {
    tag: {
      type: String as PropType<TagType>,
      default: 'h1',
      validator(v: TagType) {
        return PropsValidator.includes<TagType>(
          ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
          v,
          'ATOMS/RFHeading'
        )
      },
    },
    variant: {
      type: String as PropType<VariantType>,
      default: 'light',
      validator(v: VariantType) {
        return PropsValidator.includes<VariantType>(
          ['light', 'dark'],
          v,
          'ATOMS/RFHeading'
        )
      },
    },
  },
})
</script>

<style lang="scss" scoped>
$color-dark: $c-text;
$color-light: #fff;

/** H1 font styles */
$h1-font-size: rem(24);
$h1-font-weight: 700;
$h1-line-height: 38px;
$h1-margin: 0;

/** H2 font styles */
$h2-font-size: rem(22);
$h2-font-weight: 700;
$h2-line-height: 32px;
$h2-margin: 0;

/** H3 font styles */
$h3-font-size: rem(16);
$h3-line-height: 24px;
$h3-font-weight: 500;
$h3-margin: 0;

.rf-heading {
  &--dark {
    color: $color-dark;
  }
  &--light {
    color: $color-light;
  }
}

h1.rf-heading {
  font-family: $f-heading;
  font-size: $h1-font-size;
  font-weight: $h1-font-weight;
  line-height: $h1-line-height;
  margin: $h1-margin;
  @include small-laptop {
    font-size: rem(56);
    line-height: 1.3;
  }
}
h2.rf-heading {
  font-family: $f-heading;
  font-size: $h2-font-size;
  font-weight: $h2-font-weight;
  line-height: $h2-line-height;
  margin: $h2-margin;
  @include small-laptop {
    font-size: rem(28);
    line-height: 1.3;
  }
}
h3.rf-heading {
  font-family: $f-heading;
  font-size: $h3-font-size;
  font-weight: $h3-font-weight;
  line-height: $h3-line-height;
  margin: $h3-margin;
}
</style>
