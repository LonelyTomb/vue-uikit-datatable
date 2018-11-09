import Vue from "vue";
import Datatable from "./Datatable.vue";

const Components = {
  Datatable
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
