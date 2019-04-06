<template>
  <div>
    <article class="col-sm-12">
      <h1>{{ post.title }}</h1>
      <p>{{ post.body }}</p>

      <h2>Discussion</h2>
      <Button :onClick="showComments" v-if="!showCommentBox">show comments</Button>

      <ul class="list-group" v-if="showCommentBox">
        <li :key="comment.id" v-for="comment in comments" class="list-group-item">
          <strong>{{ comment.email }}</strong>
          <em>wrote:</em>
          {{ comment.body }}
        </li>
      </ul>
    </article>

    <h3 :key="relatedPost.id" v-for="relatedPost in relatedPosts">
      <router-link :key="$route.path" :to="`/posts/${relatedPost.id}`">{{ relatedPost.title }}</router-link>
    </h3>
  </div>
</template>

<script>
import Button from "./widgets/Button";

export default {
  data() {
    return {
      post: {},
      comments: [],
      showCommentBox: false,
      relatedPosts: []
    };
  },
  watch: {
    "$route.params.id": function(id) {
      this.showCommentBox = false;
      this.fetchData();
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.$http
        .get(
          "https://jsonplaceholder.typicode.com/posts/" + this.$route.params.id
        )
        .then(response => response.json(), error => console.log(error))
        .then(json => (this.post = json), error => console.log(error));

      this.$http
        .get("https://jsonplaceholder.typicode.com/posts/")
        .then(response => response.json(), error => console.log(error))
        .then(
          json => (this.relatedPosts = json.slice(0, 5)),
          error => console.log(error)
        );
    },
    showComments() {
      this.$http
        .get(
          "https://jsonplaceholder.typicode.com/comments?postId=" +
            this.$route.params.id
        )
        .then(response => response.json(), error => console.log(error))
        .then(json => (this.comments = json), error => console.log(error))
        .then(() => (this.showCommentBox = true));
    }
  },
  components: { Button }
};
</script>
