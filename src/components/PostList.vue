<template>
  <div class="container">
    <div class="row">
      <paginate name="blogs" :list="posts" :per="10" tag="div">
        <section :key="blog.id" v-for="blog in paginated('blogs')">
          <h2>{{ blog.title }}</h2>
          <b-row align-h="end">
            <router-link :to="'/posts/' + blog.id" class="btn btn-primary">read more</router-link>
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
    </div>
  </div>
</template>

<script>
export default {
  name: "PostList",

  data() {
    return {
      posts: [],
      paginate: ["blogs"]
    };
  },

  created() {
    this.$http
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json(), error => console.log(error))
      .then(
        json => (this.posts = json.slice(0, 50)),
        error => console.log(error)
      );
  }
};
</script>