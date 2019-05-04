<template>
  <div>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>

    <footer
      class="footer"
      v-if="!widgetMode"
    >
      <section class="section">
        <div class="container has-text-centered">
          <p>
            <a href="https://github.com/pinodex/spotify-now-playing-overlay">
              Fork me on Github
            </a>
          </p>

          <p>
            <router-link
              :to="{ name: 'privacyPolicy' }"
            >
              Privacy Policy
            </router-link>
          </p>
        </div>
      </section>
    </footer>

    <a
      class="fork is-hidden-touch"
      href="https://github.com/pinodex/spotify-now-playing-overlay"
      v-if="!widgetMode"
    >
      <img src="@/assets/img/forkme_right_darkblue_121621.png" alt="Fork on Github">
    </a>
  </div>
</template>

<script>
export default {
  computed: {
    widgetMode () {
      return this.$route.name == 'nowPlaying'
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/styles.scss';

.fork {
  position: fixed;
  top: 0;
  right: 0;
}
</style>
