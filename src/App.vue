<template>
  <div id="app" class="px-8 py-8 min-h-screen">
    <ParentComponent />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ParentComponent from "./components/ParentComponent.vue";

@Component({
  components: {
    ParentComponent
  }
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
