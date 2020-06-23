<template>
  <div class="feedback">
    <div class="feedback-content">
      <div class="title feedback-title">
        Lorem ipsum <br>
        dolor
      </div>
      <form
        class="feedback-form"
        method="post"
        active="/"
      >
        <div class="form-group w-100 feedback-form__phone">
          <label
            for="phone"
            class="form-label w-100"
          >Ваш телефон</label>
          <PhoneMaskInput
            id="phone"
            v-model="phone"
            type="tel"
            mask="\+\7 (111) 111-11-11"
            class="form-control w-100"
            title="Your phone"
            placeholder="+7 (___) ___-__-__"
          />
        </div>
        <div class="form-group w-100 privacy-policy">
          <input
            id="privacy-policy"
            v-model="privacyPolicy"
            type="checkbox"
            class="privacy-policy__input"
            checked
          >
          <label
            for="privacy-policy"
            class="privacy-policy__label"
            title="Privacy policy"
          >
            <span>Я принимаю </span>
            <router-link
              title="Privacy policy link"
              to="/"
            >условия</router-link>
          </label>
        </div>
        <hr>
        <button
          type="submit"
          class="btn btn--primary w-100"
          :class="{'btn--disabled': !(checkPhone && checkPrivacyPolicy)}"
          aria-label="Button for sending a feedback form"
          title="Button for sending a feedback form"
          :disabled="!(checkPhone && checkPrivacyPolicy)"
        >
          Отправить
        </button>
      </form>
      <div class="feedback-footer">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import PhoneMaskInput from 'vue-masked-input';

export default {
  name: 'Feedback',
  components: {
    PhoneMaskInput,
  },
  props: { showFeedback: Boolean },
  data: () => ({
    phone: '',
    privacyPolicy: true,
    checkPhone: false,
    checkPrivacyPolicy: true,
  }),
  watch: {
    phone(val) {
      this.checkPhone = !val.includes('_');
    },
    privacyPolicy(val) {
      this.checkPrivacyPolicy = val;
    },
  },
};
</script>

<style lang="scss" scoped>
.feedback {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 992px) {
    padding: 20px;
  }
  &-content {
    width: 850px;
    @media screen and (max-width: 992px) {
      width: auto;
      height: 100%;
    }
  }
  &-title {
    margin-bottom: 30px;
  }
  &-form {
    display: flex;
    flex-wrap: wrap;
    width: 300px;
    margin: 0 auto;
    margin-bottom: 70px;
    &__phone {
      margin-bottom: 25px;
    }
  }
  &-footer {
    font-size: $font-size-sm;
    font-family: $font-family-subtitle;
    text-align: center;
  }
}
</style>
