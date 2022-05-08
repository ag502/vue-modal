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
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
@import "./app.scss";
</style>
