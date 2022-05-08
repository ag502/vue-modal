import { ModalContainer } from "@/components";

const defaultOptions = {
  componentName: "ModalContainer",
};

export default {
  install(Vue, options = {}) {
    if (this.installed) {
      return;
    }

    this.installed = true;
    this.eventBus = new Vue();

    Vue.prototype.$modal = {
      open: (name) => {
        this.eventBus.$emit("open", name);
      },
      close: (name) => {
        this.eventBus.$emit("close", name);
      },
    };

    Vue.component(options.componentName || defaultOptions.componentName, ModalContainer);
  },
};
