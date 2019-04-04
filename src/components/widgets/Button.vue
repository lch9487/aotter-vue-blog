<template>
  <button @click="onClick" class="fancy-btn fancy-btn--green">
    <slot>Button</slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    onClick: {
      type: Function
    }
  }
};
</script>

<style lang="scss" scoped>
.fancy-btn {
  &,
  &:link,
  &:visited {
    text-transform: uppercase;
    text-decoration: none;
    padding: 5px 10px;
    display: inline-block;
    border-radius: 16px;
    transition: all 0.2s;
    position: relative;
    font-size: 16px;

    border: none;
    cursor: pointer;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 2px 3px rgba(#000, 0.2);

    &::after {
      transform: scaleX(1.4) scaleY(1.6);
      opacity: 0;
    }
  }

  &:active,
  &:focus {
    outline: none;
    transform: translateY(-1px);
    box-shadow: 0 2px 3px rgba(#000, 0.2);
  }

  &--green {
    background-color: #28b485;
    color: #fff;

    &::after {
      background-color: #28b485;
    }
  }

  &::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 16px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.4s;
  }
}
</style>
