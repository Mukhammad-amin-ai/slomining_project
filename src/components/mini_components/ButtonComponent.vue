<template>
  <button class="global_btn">{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: String
  }
}
</script>

<style>
.global_btn {
  padding: 10px;
  font-family: Montserrat-Medium, sans-serif;
  border-radius: 5px;
  cursor: pointer;
  border: 0;
  background: transparent;
  color: var(--white);
}
.default_black {
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  -webkit-backdrop-filter: blur(60px);
  backdrop-filter: blur(60px);
  background: linear-gradient(
    90deg,
    hsla(0, 0%, 100%, 0.1) -1.52%,
    hsla(0, 0%, 100%, 0.024) 104.35%
  );
  transition: background 0.2s linear;
}
.default_white {
  transition: background 0.2s linear;
  border: 1px solid rgba(255, 255, 255, 0.3);
}
.default_white:hover {
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  -webkit-backdrop-filter: blur(60px);
  backdrop-filter: blur(60px);
  background: linear-gradient(
    90deg,
    hsla(0, 0%, 100%, 0.1) -1.52%,
    hsla(0, 0%, 100%, 0.024) 104.35%
  );
}
.default_black:hover {
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: none !important;
  box-shadow: none;
  -webkit-backdrop-filter: none;
}
</style>
