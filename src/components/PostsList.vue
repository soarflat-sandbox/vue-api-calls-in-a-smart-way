<template>
  <div class="posts--list">
    <div
      class="p-4 shadow-md bg-white rounded border bg-white mb-2 list--item"
      v-for="post in posts"
      v-bind="{ post }"
      :key="post.id"
    >
      <slot v-bind="post"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class PostList extends Vue {
  @Prop({ default: [] }) readonly posts!: [];
}
</script>
