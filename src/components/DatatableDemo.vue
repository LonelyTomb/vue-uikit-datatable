<template>
<article class="uk-article">
    <h1 class="uk-article-title uk-text-center uk-heading-primary">Vue Uikit Datatable</h1>
    <section class="uk-section uk-section-default uk-flex uk-flex-center uk-padding-remove">
        <ul class="uk-tab-center" uk-tab="connect: .demos">
            <li v-for="tab in tabs" :key="tab" :class="[{ 'uk-active': currentTab === tab}]">
                <a href="#" @click="currentTab = tab" class="uk-text-capitalize">{{tab}}</a>
                </li>
        </ul>
    </section>
    <section>
        <ul class="uk-switcher uk-margin demos">
            <li v-for="tab in tabs" :key="tab" class="tab">
              <div v-if="currentTab === tab">
              <keep-alive>
              <div :is="currentTab"></div>
              </keep-alive>
              </div>
            </li>
        </ul>
    </section>
</article>
</template>

<script>
import Spinner from "./examples/Spinner";
export default {
  name: "",
  components: {
    Spinner,
    BasicExample: () => ({
      component: import("./examples/Basic"),
      loading: Spinner
    }),
    Checkbox: () => ({
      component: import("./examples/Checkbox"),
      loading: Spinner
    }),
    Search: () => ({
      component: import("./examples/Search"),
      loading: Spinner
    })
  },
  data() {
    return {
      currentTab: "BasicExample",
      tabs: ["BasicExample", "Checkbox", "Search"]
    };
  }
};
</script>

<style scoped>
</style>