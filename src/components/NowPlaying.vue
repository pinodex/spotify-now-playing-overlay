<template>
  <div class="media">
    <div
      class="media-left"
      v-show="showAlbumArt"
    >
      <figure
        class="image"
        :class="{ 'is-64x64': showArtist, 'is-48x48': !showArtist }"
      >
        <PreloadedImage
          v-if="albumArt"
          :src="albumArt"
          alt="Album Art"
        />
      </figure>
    </div>

    <div class="media-content">
      <p class="is-size-4 has-text-white">{{ trackName }}</p>

      <p
        class="is-size-6 has-text-white"
        v-show="showArtist"
      >
        {{ artistName }}
      </p>
    </div>

    <div
      class="media-right"
      v-show="showSpotifyLogo"
    >
      <figure class="image is-32x32">
        <img src="@/assets/svg/spotify-logo-without-text.svg" alt="Spotify">
      </figure>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

import PreloadedImage from '@/components/PreloadedImage'

const endpointUri = 'https://api.spotify.com/v1/me/player/currently-playing'

export default {
  components: { PreloadedImage },

  props: {
    showArtist: {
      type: Boolean,
      default: true
    },

    showAlbumArt: {
      type: Boolean,
      default: true
    },

    showSpotifyLogo: {
      type: Boolean,
      default: true
    },

    accessToken: {
      type: String,
      default: null
    }
  },

  data: () => ({
    userPlayer: null
  }),

  computed: {
    trackName () {
      return this.userPlayer ? this.userPlayer.item.name : null
    },

    artistName () {
      if (!this.userPlayer || this.userPlayer.item.artists.length == 0) {
        return null
      }

      return this.userPlayer.item.artists[0].name
    },

    albumArt () {
      if (!this.userPlayer || this.userPlayer.item.album.images.length == 0) {
        return null
      }

      return this.userPlayer.item.album.images[0].url
    }
  },

  mounted () {
    this.loadUserPlayer()
  },

  methods: {
    loadUserPlayer () {
      const headers = {
        'Authorization': `Bearer ${this.accessToken}`
      }

      this.$http.get(endpointUri, { headers })
        .then(response => {
          this.userPlayer = response.data

          setTimeout(this.loadUserPlayer, 5000)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.media {
  background: rgba(10, 10, 10, 0.75);
  border-radius: 4px;
  padding: 1rem;

  align-items: center;
}

.media-content {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
