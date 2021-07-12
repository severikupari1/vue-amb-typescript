<template>
  <div class="home">
    <h1 class="page-title">Article list</h1>
    <div class="card-container">
      <router-link
        v-for="post in list"
        :key="post.id"
        :to="'/article/' + post.id"
      >
        <el-card :body-style="{ padding: '0px' }" class="article">
          <custom-image
            class="image"
            image-src="https://scx2.b-cdn.net/gfx/news/hires/2019/2-nature.jpg"
          ></custom-image>
          <div class="title">
            {{ post.title }}
          </div>
        </el-card>
      </router-link>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import CustomImage from '@/components/CustomImage.vue';

const posts = namespace('posts');
@Component({
  components: { CustomImage }
})
export default class Home extends Vue {
  mounted() {
    this.getAllPosts();
  }
  @posts.State
  public list!: Array<object>;

  @posts.Action
  public getAllPosts!: () => void;
}
</script>
<style lang="scss" scoped>
a {
  text-decoration: none;
  font-style: none;
}
</style>
