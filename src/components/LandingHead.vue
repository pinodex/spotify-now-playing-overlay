<template>
  <div class="hero">
    <div class="hero-body">
      <div class="container">
        <div class="content">
          <div class="image spotify-logo">
            <img src="@/assets/svg/spotify-logo.svg" alt="Spotify Logo">
          </div>

          <p class="is-size-3">Overlay for OBS &amp; XSplit</p>

          <p
            v-show="showLoginButton"
          >
            <a class="button is-success is-large is-rounded is-outlined"
              :href="loginUri"
            >
              Login with Spotify
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showLoginButton: {
      type: Boolean,
      default: true
    },

    loginUri: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.hero {
  text-align: center;

  transition: all .3s ease;
}
</style>
