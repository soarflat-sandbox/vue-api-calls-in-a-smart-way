<template>
  <div class="max-w-sm w-full mx-auto posts--parent-component">
    <h1 class="mb-2 text-grey-lighter">Posts API</h1>
    <posts-list v-if="!isLoading" :posts="computedPosts">
      <template slot-scope="post">
        <div class="posts--item">
          <figure class="flex items-center mb-3">
            <img
              class="h-16 w-16 rounded-full mr-2"
              :src="`https://robohash.org/${post.title}`"
              :alt="post.title"
            />
            <figcaption>
              <h3 class="text-base">{{ post.title }}</h3>
            </figcaption>
          </figure>
          <p class="text-grey-dark">{{ post.body }}</p>
        </div>
      </template>
    </posts-list>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PostsList from "./PostsList.vue";
import RepositoryFactory from "../repositories/RepositoryFactory";

const PostsRepository = RepositoryFactory.create("posts");

@Component({
  components: {
    PostsList
  }
})
export default class ParentComponent extends Vue {
  private isLoading = false;
  private posts = [];

  get computedPosts() {
    return this.posts.slice(0, 10);
  }

  async fetch() {
    this.isLoading = true;
    const { data } = await PostsRepository.get();
    this.isLoading = false;
    this.posts = data;
  }

  created() {
    this.fetch();
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
