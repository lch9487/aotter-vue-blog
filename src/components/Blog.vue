<template>
  <div class="container">
    <Swiper/>

    <div class="row">
      <paginate name="blogs" :list="posts" :per="10" tag="div">
        <section :key="blog.id" v-for="blog in paginated('blogs')">
          <h2>{{ blog.title }}</h2>
          <b-row align-h="end">
            <router-link :to="'/post/' + blog.id" class="btn btn-primary">read more</router-link>
          </b-row>
          <hr>
        </section>
      </paginate>

      <paginate-links
        for="blogs"
        :async="true"
        :show-step-links="true"
        :step-links="{
          next: 'Next',
          prev: 'Previous'
        }"
        :classes="{
          'ul': 'pagination',
          'ul > li': 'page-item',
          'ul > li > a': 'page-link',
        }"
      ></paginate-links>

      <footer class="col-sm-12">
        <hr>
        <p class="text-center">lch9487&copy; 2019</p>
      </footer>
    </div>
  </div>
</template>

<script>
import Swiper from "./Swiper";

export default {
  name: "Blog",

  data() {
    return {
      posts: [],
      paginate: ["blogs"]
    };
  },

  created() {
    this.$http
      .get("http://jsonplaceholder.typicode.com/posts")
      .then(response => response.json(), error => console.log(error))
      .then(
        json => (this.posts = json.slice(0, 50)),
        error => console.log(error)
      );
  },

  components: { Swiper }
};
</script>