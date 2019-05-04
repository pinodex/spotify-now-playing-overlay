<template>
  <Widget
    v-if="accessToken"

    :showArtist="showArtist"
    :showAlbumArt="showAlbumArt"
    :showSpotifyLogo="showSpotifyLogo"
    :accessToken="accessToken"
  />
</template>

<script>
import Widget from '@/components/NowPlaying'

export default {
  components: { Widget },

  data: () => ({
    showArtist: true,
    showAlbumArt: true,
    showSpotifyLogo: true,
    accessToken: null
  }),

  mounted () {
    const { showArtist, showAlbumArt, showSpotifyLogo, accessToken } = this.$route.query

    this.showArtist = Boolean(showArtist)
    this.showAlbumArt = Boolean(showAlbumArt)
    this.showSpotifyLogo = Boolean(showSpotifyLogo)
    this.accessToken = accessToken
  }
}
</script>
