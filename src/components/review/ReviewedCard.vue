<template>
  <li class="review-card">
    <!-- Track info & controls -->
    <div class="review-card__header">
      <!-- Music player -->
      <music-player
        class="player"
        :track-artist="artist"
        :track-title="title"
        :track-artwork="artwork"
        :track-src="src"
        :track-demo="demo"
        :is-view-buttons="onReview"
      />

      <!-- Feedback status -->
      <review-status
        v-if="!onReview"
        class="review-status"
        :status="musicFile.status"
      />
    </div>

    <!-- Track tags -->
    <ul class="review-card__tags">
      <base-tag color="gray" v-for="tag in musicFile.genres" :key="tag">
        {{ tag }}
      </base-tag>
    </ul>

    <!-- Track reviews -->
    <div class="review-card__reviews" v-if="comments && comments.length > 0">
      <ul class="reviews-list">
        <li
          class="reviews-list__item"
          v-for="comment in comments"
          :key="comment"
        >
          <p>{{ comment }}</p>
        </li>
        <div class="reviewed-input">
          <textarea
            :class="{ disabled: true }"
            :disabled="true"
            :placeholder="reviewText"
          ></textarea>
          <div class="reviewed-input__footer">
            <div v-show="isAddedToPlaylist" class="reviewed-input__caption">
              <span>Размещено в </span>
              <img :src="addedPlaylist.icon || ''" alt="" />
              <span>«{{ addedPlaylist.name || "" }}»</span>
            </div>
          </div>
        </div>
      </ul>
    </div>
  </li>
</template>

<script setup>
import { ref } from "vue";
import MusicPlayer from "@/components/player/MusicPlayer.vue";
import ReviewStatus from "@/components/review/ReviewStatus.vue";

const props = defineProps({
  musicFile: { type: Object, required: true },
});

const addedPlaylist = ref({ name: "", icon: "" });

// Variables for tarck details
const artist = props.musicFile.artist;
const title = props.musicFile.title;
const artwork = props.musicFile.artwork;
const src = props.musicFile.src;
const demo = props.musicFile.demo;
const comments = props.musicFile.comments;
const onReview = props.musicFile.onReview;
const reviewText = props.musicFile.reviewText;
</script>

<style lang="sass" scoped>
.review-card
  background: $white-color
  padding: 20px 40px 20px 20px
  border: 1px solid $third-color
  border-radius: 20px
  list-style-type: none

.review-card__header
  display: flex
  align-items: flex-end
  gap: 47px

  .player
    width: 100%


.review-status
  flex-shrink: 0
  width: 250px


.review-card__tags
  display: flex
  margin-top: 10px
  & li + li
    margin-left: 5px


.review-card__reviews
  margin-top: 16px

.reviews-list__item
  background: $secondary-color
  padding: 30px 33px
  border-radius: 10px
  overflow: hidden

.reviews-list__item + .reviews-list__item
  margin-top: 20px

.reviews-list__item p
  font-size: $p-font-size
  line-height: $p-line-heigth
  letter-spacing: $letter-spacing
  color: $text-color-secondary

.reviewed-input
  margin-top: 20px
  margin-left: auto

  &__caption
    display: flex
    align-items: center
    font-size: 16px
    line-height: 19px
    letter-spacing: $letter-spacing

    img
      margin: 0 10px
      width: 30px
      height: auto
      object-fit: contain
      display: block
.reviewed-input textarea
  display: block
  max-height: 138px
  width: 100%
  font-size: $p-font-size
  line-height: $p-line-heigth
  letter-spacing: $letter-spacing
  color: $text-color-secondary
  resize: none
  background: $textarea-color
  padding: 30px 30px 30px 25px
  border: none
  border-radius: 10px
  overflow: hidden
.reviewed-input textarea::placeholder
  font-size: $p-font-size
  line-height: $p-line-heigth
  letter-spacing: $letter-spacing
  color: $text-color-secondary
.reviewed-input__footer
  display: flex
  align-items: center
  padding-left: 35px
  margin-top: 20px

  .cancel
    margin-left: auto
    width: 173px

  .save
    width: 173px
    margin-left: 20px

.reviewed-input__footer .add-to-playlist
  font-size: $default-font-size
  font-weight: 700
  line-height: $default-line-height
  letter-spacing: $letter-spacing
  color: $main-color
</style>
