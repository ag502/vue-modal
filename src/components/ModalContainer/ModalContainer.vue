<template>
  <transition name="modal-fade">
    <div class="modal-backdrop" @click.self="$modal.close(name)" v-if="isOpen">
      <div class="modal">
        <div class="modal-content">
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import ModalPlugin from "@/plugins/Modal";

export default {
  name: "ModalContainer",

  props: {
    name: String,
  },

  data() {
    return {
      isOpen: false,
    };
  },

  created() {
    ModalPlugin.eventBus.$on("open", (name) => (this.isOpen = name === this.name));
    ModalPlugin.eventBus.$on("close", (name) => {
      if (name === this.name) {
        this.isOpen = false;
      }
    });
  },
};
</script>

<style lang="scss" scoped>
@import "./modalContainer.scss";
</style>
