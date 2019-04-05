<template>
  <div class="container">
    <Swiper/>
    <PostList/>

    <div class="row">
      <footer class="col-sm-12">
        <hr>
        <p class="text-center">lch9487&copy; 2019</p>
      </footer>
    </div>
  </div>
</template>

<script>
import Swiper from "./Swiper";
import PostList from "./PostList";

export default {
  name: "Blog",

  components: { Swiper, PostList }
};
</script>