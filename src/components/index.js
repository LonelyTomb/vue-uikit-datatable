import Vue from "vue";
import DropDown from "./DropDown.vue";

const Components = {
    DropDown
}

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name]);
})

export default Components;