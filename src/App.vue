<template>
  <div id="app">
    <header>
      <h1>Modular modals in Vue from scratch</h1>
      <p>Click one of the buttons to open corresponding popup or click popup backdrop to close it</p>
    </header>

    <main>
      <div class="control">
        <button @click="$modal.open(signInModalName)">Sign in</button>
      </div>
      <div class="control">
        <button @click="$modal.open(signUpModalName)">Sign up</button>
      </div>
    </main>

    <ModalContainer :name="signInModalName">
      <SignInForm />
    </ModalContainer>

    <ModalContainer :name="signUpModalName">
      <SignUpForm />
    </ModalContainer>
  </div>
</template>

<script>
import { ModalContainer, SignInForm, SignUpForm } from "./components";

export default {
  name: "App",

  components: {
    ModalContainer,
    SignInForm,
    SignUpForm,
  },

  data() {
    return {
      signInModalName: "sign-in",
      signUpModalName: "sign-up",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./app.scss";
</style>
