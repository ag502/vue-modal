<template>
  <form class="form" @submit="onSubmitForm">
    <div class="field">
      <input type="text" id="login" placeholder="Login" />
    </div>
    <div class="field">
      <input type="text" id="password" placeholder="Password" />
    </div>
    <div>
      <button class="button" type="submit">Submit</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "SignInForm",

  methods: {
    onSubmitForm(e) {
      e.prevenDefault();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./signUpForm.scss";
</style>
