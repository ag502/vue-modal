<template>
  <div id="app">
    <header>
      <h1>Modular modals in Vue from scratch</h1>
      <p>Click one of the buttons to open corresponding popup or click popup backdrop to close it</p>
    </header>

    <main>
      <div class="control">
        <button @click="isSignInModalOpen = true">Sign in</button>
      </div>
      <div class="control">
        <button @click="isSignUpModalOpen = true">Sign up</button>
      </div>
    </main>

    <ModalContainer v-show="isSignInModalOpen" @close="isSignInModalOpen = false">
      <SignInForm />
    </ModalContainer>

    <ModalContainer v-show="isSignUpModalOpen" @close="isSignUpModalOpen = false">
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
      isSignInModalOpen: false,
      isSignUpModalOpen: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./app.scss";
</style>
