<template>
  <transition name="modal-fade">
    <div class="modal-backdrop" @click.self="$emit('close')">
      <div class="modal">
        <div class="modal-content">
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ModalContainer",
};
</script>

<style lang="scss" scoped>
@import "./modalContainer.scss";
</style>
