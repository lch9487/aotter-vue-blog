<template>
  <swiper :options="swiperOption">
    <swiper-slide :key="photo.id" v-for="photo in photos" @click.native="() => goToPage(photo.id)">
      <img :src="photo.url" :alt="photo.title">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
export default {
  name: "carrousel",
  data() {
    return {
      photos: [],
      swiperOption: {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  methods: {
    goToPage(id) {
      this.$router.push(`/posts/${id}`);
    }
  },
  mounted() {
    this.$http
      .get("https://jsonplaceholder.typicode.com/photos")
      .then(response => response.json(), error => console.log(error))
      .then(
        json => (this.photos = json.slice(0, 3)),
        error => console.log(error)
      );
  }
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  height: auto;
}
</style>
