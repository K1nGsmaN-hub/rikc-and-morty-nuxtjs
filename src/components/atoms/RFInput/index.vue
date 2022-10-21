<template>
  <label :for="id" :class="['rf-input', isError && 'rf-input--error']">
    <!-- @slot slot for input label -->
    <span class="rf-input-span">
      <slot name="label" />
    </span>
    <span class="rf-input-container">
      <i>
        <img :src="require(`~/assets/icons/search.svg`)" />
      </i>
      <input
        :id="id"
        v-model="model"
        :type="type"
        :inputmode="type"
        :placeholder="placeholder"
        :readonly="readonly"
        :class="['rf-input__field', icon && 'rf-input__field--with-icon']"
      />
      <slot name="coin" />
    </span>
    <span v-if="isError" class="rf-input__message">
      <!-- @slot slot for input mess age -->
      <slot name="message" />
    </span>
  </label>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import PropsValidator from 'services/common/PropsValidator'

type InputType = 'text' | 'numeric' | 'email' | 'phone'

/**
 * ATOMS/RFInput
 * @displayName RFInput
 */
export default Vue.extend({
  name: 'RFInput',
  props: {
    /**
     * ID of the input field
     */
    id: {
      type: String,
      default: '',
      required: true,
    },
    /**
     * Input field type
     * @values text, numeric, email, phone
     */
    type: {
      type: String as PropType<InputType>,
      default: 'text',
      validator: (v: InputType) => {
        return PropsValidator.includes<InputType>(
          ['text', 'numeric', 'email', 'phone'],
          v,
          'ATOMS/RFInput'
        )
      },
    },
    /**
     * Placeholder of input field
     */
    placeholder: {
      type: String,
      default: '-',
    },
    /**
     * Readonly mode for input field
     */
    readonly: {
      type: Boolean,
      default: false,
    },
    /**
     * Disabled state of the input field
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Error state of the input field
     */
    isError: {
      type: Boolean,
      default: false,
    },
    /**
     * Value of the input field
     * @model
     */
    value: {
      type: String,
      default: '',
    },
    /**
     * Icon's FileName with extension from assets/icons/...
     * @model
     */
    icon: {
      type: String,
      default: '',
    },
  },
  computed: {
    model: {
      get(): string {
        return this.value
      },
      set(value: string): void {
        /**
         * Emit the value from input field
         * @type {function}
         * @property {string} value
         */
        this.$emit('input', value)
      },
    },
  },
})
</script>

<style lang="scss" scoped>
/** Label styles */
$label-font-size: rem(14);
$label-color: $c-text;

/** Input styles */
$input-font-size: rem(16);
$input-color: #fff;
$input-placeholder-color: $c-text;
$input-focused-border-color: #152A3A;
$input-background: #152A3A;
$input-hover-background: #152A3A;
$input-error-color: $c-error;

/** Message styles */
$message-font-size: rem(12);

.rf-input {
  position: relative;
  display: flex;
  flex-direction: column;
  font-size: $label-font-size;
  line-height: 20px;
  color: $label-color;
  &-span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      display: flex;
      align-items: center;
      color: $c-primary;
    }
  }
  &-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
  }
  i {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 15px;
    img,
    svg {
      display: block;
    }
  }
  &__field {
    width: 100%;
    border: none;
    box-sizing: border-box;
    background: $input-background;
    padding: 12px 15px 12px 49px;
    margin: 0;
    font-size: $input-font-size;
    line-height: 24px;
    color: #fff;
    font-weight: 500;
    transition: 0.25s;
    outline: none;
    border-radius: 100px;
    &--with-icon {
      padding-left: 40px;
    }
    &:hover {
      background: $input-hover-background;
    }
    &:focus {
      border-color: $input-focused-border-color;
      caret-color: $input-focused-border-color;
    }
    &::placeholder {
      color: $input-placeholder-color;
    }
  }
  &__message {
    font-size: $message-font-size;
    line-height: 20px;
    color: $input-error-color;
  }
  &--error {
    .rf-input__field {
      border-color: $input-error-color;
      &:focus {
        caret-color: $input-error-color;
      }
    }
  }
}
</style>
