<template>
  <form class="form" @submit="onSubmitForm">
    <div class="field">
      <input type="text" placholder="Login" id="login" />
    </div>
    <div class="field">
      <input type="email" placeholder="Email" id="email" />
    </div>
    <div class="field">
      <button class="button" type="submit">Submit</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "SignUpForm",

  methods: {
    onSubmitForm(e) {
      e.preventDefault();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./signUpForm.scss";
</style>
