<template>
  <LandingHead
    class="is-fullheight"
    :loginUri="loginWithSpotifyUri"
  />
</template>

<script>
import buildUrl from 'build-url'
import LandingHead from '@/components/LandingHead'

export default {
  components: { LandingHead },

  computed: {
    loginWithSpotifyUri () {
      const codePage = this.$router.resolve({ name: 'code' })
      const redirectUri = `${location.origin}${codePage.href}`

      const queryParams = {
        client_id: process.env.VUE_APP_SPOTIFY_CLIENT_ID,
        redirect_uri: redirectUri,
        response_type: 'token',
        scope: 'user-read-currently-playing'
      }

      return buildUrl('https://accounts.spotify.com/authorize', { queryParams })
    }
  }
}
</script>
