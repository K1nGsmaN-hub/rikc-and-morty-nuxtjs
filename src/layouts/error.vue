<template>
  <section class="page error__page">
    <div class="container">
      <div class="error__wrapper">
        <template v-if="error.statusCode === 404">
          <div class="error__code">
            <Error404 />
          </div>
          <RFHeading tag="h1">Страница не найдена</RFHeading>
          <div class="error__description">
            Неправильно набран URL-адрес, либо страницы больше не существует
          </div>
        </template>

        <template v-else>
          <div class="error__code">
            {{ error.statusCode }}
          </div>
          <RFHeading tag="h1">Ошибка</RFHeading>
          <div class="error__description">
            {{ error.message }}
          </div>
        </template>

        <RFButton variant="primary" to="/" class="error__button" link>
          Вернуться на главную
        </RFButton>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import RFButton from 'atoms/RFButton/index.vue'
import RFHeading from 'atoms/RFHeading/index.vue'
import Error404 from 'icons/error404.svg?inline'
export default Vue.extend({
  components: { RFHeading, RFButton, Error404 },
  layout: 'error',
  props: ['error'], // you can set a custom layout for the error page
})
</script>
<style lang="scss" scoped>
.error {
  &__wrapper {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  &__code {
    font-size: rem(74);
    color: $c-primary;
  }
  &__description {
    font-size: rem(16);
    color: #1a1b18;
    font-weight: 400;
  }
  &__button {
    margin-top: 20px;
    padding: 14px 62px;
  }
  &__page {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
