<template>
  <div class="col-sm-12">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand to="/">Aotter</b-navbar-brand>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/posts">Posts</b-nav-item>
      </b-navbar-nav>
    </b-navbar>

    <div class="jumbotron">
      <div class="container">
        <span class="display-4 h1">Aotter Vue Blog</span>
        <p class="lead">Yooooooooooooooooooooooooooooooooooooooooooooooooo</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader"
};
</script>
