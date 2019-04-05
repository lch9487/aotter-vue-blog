<template>
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
</template>

<script>
import Button from "./widgets/Button";

export default {
  data() {
    return {
      post: {},
      comments: [],
      showCommentBox: false
    };
  },
  created() {
    this.$http
      .get("http://jsonplaceholder.typicode.com/posts/" + this.$route.params.id)
      .then(response => response.json(), error => console.log(error))
      .then(json => (this.post = json), error => console.log(error));
  },
  methods: {
    showComments() {
      this.$http
        .get(
          "http://jsonplaceholder.typicode.com/comments?postId=" +
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

<style>
</style>