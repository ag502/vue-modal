<template>
  <div id="app">
    <header>
      <h1>Modular modals in Vue from scratch</h1>
      <p>Click one of the buttons to open corresponding popup or click popup backdrop to close it</p>
    </header>

    <main>
      <div class="control">
        <button>Sign in</button>
      </div>
      <div class="control">
        <button>Sign up</button>
      </div>
    </main>

    <ModalContainer v-show="false">
      <SignInForm />
    </ModalContainer>

    <ModalContainer v-show="false">
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
};
</script>

<style lang="scss" scoped>
@import "./app.scss";
</style>
