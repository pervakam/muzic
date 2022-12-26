<template>
  <div class="review">
    <main>
      <div class="container">
        <div class="review__head">
          <div class="review__back">
            <div class="review__back-btn">
              <img
                class="review__back-icon"
                src="@/assets/images/icons/arrow-left.svg"
                alt=""
              />
            </div>
            <div class="review__back-text">Назад в профиль</div>
          </div>
          <div class="review__labels">
            <div class="review__label">
              <div class="review__label-icon">
                <img src="@/assets/images/icons/sound.svg" alt="" />
              </div>
              <div class="review__label-text">Взято в плейлист</div>
              <div class="review__label-value">20</div>
            </div>
            <div class="review__label">
              <div class="review__label-icon">
                <img src="@/assets/images/icons/doc.svg" alt="" />
              </div>
              <div class="review__label-text">Рецензий</div>
              <div class="review__label-value">13</div>
            </div>
            <div class="review__label">
              <div class="review__label-icon">
                <img src="@/assets/images/icons/sad.svg" alt="" />
              </div>
              <div class="review__label-text">Не оценено</div>
              <div class="review__label-value">5</div>
            </div>
          </div>
        </div>
        <div class="review__main">
          <reviewed-card :music-file="musicFile"></reviewed-card>

          <div class="review__comments">
            <div
              v-for="comment of paginatedComments"
              :key="comment.id"
              class="review__comment"
            >
              <div class="review__comment-date">{{ comment.date }}</div>
              <img :src="comment.avatar" class="review__comment-avatar" />
              <div class="review__comment-col">
                <div class="review__comment-name">{{ comment.name }}</div>
                <p v-if="comment.text" class="review__comment-text">
                  {{ comment.text }}
                </p>
                <div class="review__comment-bottom">
                  <div
                    v-if="comment.addedToPlaylist"
                    class="review__comment-caption"
                  >
                    <span>Размещено в </span>
                    <img src="@/assets/images/icons/vk.svg" alt="" />
                    <span>«Название плейлиста»</span>
                  </div>
                  <div
                    v-if="comment.icons && comment.icons.length"
                    class="review__comment-icons"
                  >
                    <div
                      v-for="(icon, idx) of comment.icons"
                      :key="idx"
                      :class="icon"
                      class="review__comment-icon"
                    >
                      <img
                        v-if="icon === 'like'"
                        src="@/assets/images/icons/like-green.svg"
                        alt=""
                      />
                      <img
                        v-if="icon === 'sad'"
                        src="@/assets/images/icons/sad.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div v-if="comment.isSkipped" class="review__comment-skipped">
                  <img src="@/assets/images/icons/smile-icon.png" alt="" />
                </div>
              </div>
            </div>
          </div>

          <pagination
            :pages="pagesCount"
            :currentPage="currentPage"
            @onChange="onChangePage"
          >
          </pagination>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import ReviewedCard from "@/components/review/ReviewedCard.vue";
import Pagination from "@/components/Pagination.vue";
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
export default {
  components: { ReviewedCard, Pagination },
  setup() {
    const musicFile = ref({
      artist: "KVPV",
      title: "Sunshine",
      src: require("@/assets/mp3/Sunshine.mp3"),
      artwork: require("@/assets/mp3/Sunshine.png"),
      genres: ["deep house", "dance"],
      demo: true,
      onReview: true,
    });

    const comments = ref([
      {
        id: 0,
        date: "12.11.2022",
        name: "Дмитрий Васильев",
        avatar: require("@/assets/images/review-author1.png"),
        text: "Ответ куратора: Песня начинается с интенсивных, зажигательных, запоминающихся гитарных риффов, смешанных с динамичными барабанными битами. Все это уже говорит слушателям о наступающем вайбе — жанр здесь можно было бы охарактеризовать как прогрессив-метал. Он резкий, живой, заводной, очень хорошо сбалансирован как в аранжировках, так и в композиции в целом. Все это уже говорит слушателям о наступающем вайбе — жанр здесь можно было бы охарактеризовать как прогрессив-метал. Он резкий, живой, заводной, очень хорошо сбалансирован как в аранжировках, так и в композиции в целом. Все это уже говорит слушателям о наступающем вайбе",
        addedToPlaylist: true,
        icons: ["like", "sad"],
        isSkipped: false,
      },
      {
        id: 1,
        date: "12.11.2022",
        name: "Floyd Miles",
        avatar: require("@/assets/images/review-author2.png"),
        isSkipped: true,
      },
      {
        id: 2,
        date: "12.11.2022",
        name: "Jacob Jones",
        avatar: require("@/assets/images/review-author3.png"),
        isSkipped: false,
        addedToPlaylist: true,
      },
      {
        id: 3,
        date: "12.11.2022",
        name: "Electric Funeral Records",
        avatar: require("@/assets/images/review-author4.png"),
        isSkipped: false,
        addedToPlaylist: false,
        text: "Песня начинается с интенсивных, зажигательных, запоминающихся гитарных риффов, смешанных с динамичными барабанными битами. Все это уже говорит слушателям о наступающем вайбе — жанр здесь можно было бы охарактеризовать как прогрессив-метал. Он резкий, живой, заводной, очень хорошо сбалансирован как в аранжировках, так и в композиции в целом. Все это уже говорит слушателям о наступающем вайбе",
        icons: ["sad"],
      },
      {
        id: 4,
        date: "12.11.2022",
        name: "Дмитрий Васильев",
        avatar: require("@/assets/images/review-author1.png"),
        text: "Ответ куратора: Песня начинается с интенсивных, зажигательных, запоминающихся гитарных риффов, смешанных с динамичными барабанными битами. Все это уже говорит слушателям о наступающем вайбе — жанр здесь можно было бы охарактеризовать как прогрессив-метал. Он резкий, живой, заводной, очень хорошо сбалансирован как в аранжировках, так и в композиции в целом. Все это уже говорит слушателям о наступающем вайбе — жанр здесь можно было бы охарактеризовать как прогрессив-метал. Он резкий, живой, заводной, очень хорошо сбалансирован как в аранжировках, так и в композиции в целом. Все это уже говорит слушателям о наступающем вайбе",
        addedToPlaylist: true,
        icons: ["like"],
        isSkipped: false,
      },
      {
        id: 5,
        date: "12.11.2022",
        name: "Дмитрий Васильев",
        avatar: require("@/assets/images/review-author1.png"),
        text: "Ответ куратора: Песня начинается с интенсивных, зажигательных, запоминающихся гитарных риффов, смешанных с динамичными барабанными битами. Все это уже говорит слушателям о наступающем вайбе — жанр здесь можно было бы охарактеризовать как прогрессив-метал. Он резкий, живой, заводной, очень хорошо сбалансирован как в аранжировках, так и в композиции в целом. Все это уже говорит слушателям о наступающем вайбе — жанр здесь можно было бы охарактеризовать как прогрессив-метал. Он резкий, живой, заводной, очень хорошо сбалансирован как в аранжировках, так и в композиции в целом. Все это уже говорит слушателям о наступающем вайбе",
        addedToPlaylist: true,
        icons: ["like", "sad"],
        isSkipped: false,
      },
      {
        id: 6,
        date: "12.12.2022",
        name: "Floyd Miles",
        avatar: require("@/assets/images/review-author2.png"),
        isSkipped: true,
      },
      {
        id: 7,
        date: "12.12.2022",
        name: "Jacob Jones",
        avatar: require("@/assets/images/review-author3.png"),
        isSkipped: false,
        addedToPlaylist: true,
      },
      {
        id: 8,
        date: "12.11.2022",
        name: "Electric Funeral Records",
        avatar: require("@/assets/images/review-author4.png"),
        isSkipped: false,
        addedToPlaylist: false,
        text: "Песня начинается с интенсивных, зажигательных, запоминающихся гитарных риффов, смешанных с динамичными барабанными битами. Все это уже говорит слушателям о наступающем вайбе — жанр здесь можно было бы охарактеризовать как прогрессив-метал. Он резкий, живой, заводной, очень хорошо сбалансирован как в аранжировках, так и в композиции в целом. Все это уже говорит слушателям о наступающем вайбе",
        icons: ["sad"],
      },
      {
        id: 9,
        date: "12.11.2022",
        name: "Дмитрий Васильев",
        avatar: require("@/assets/images/review-author1.png"),
        text: "Ответ куратора: Песня начинается с интенсивных, зажигательных, запоминающихся гитарных риффов, смешанных с динамичными барабанными битами. Все это уже говорит слушателям о наступающем вайбе — жанр здесь можно было бы охарактеризовать как прогрессив-метал. Он резкий, живой, заводной, очень хорошо сбалансирован как в аранжировках, так и в композиции в целом. Все это уже говорит слушателям о наступающем вайбе — жанр здесь можно было бы охарактеризовать как прогрессив-метал. Он резкий, живой, заводной, очень хорошо сбалансирован как в аранжировках, так и в композиции в целом. Все это уже говорит слушателям о наступающем вайбе",
        addedToPlaylist: true,
        icons: ["like"],
        isSkipped: false,
      },
      {
        id: 10,
        date: "12.11.2022",
        name: "Дмитрий Васильев",
        avatar: require("@/assets/images/review-author1.png"),
        text: "Ответ куратора: Песня начинается с интенсивных, зажигательных, запоминающихся гитарных риффов, смешанных с динамичными барабанными битами. Все это уже говорит слушателям о наступающем вайбе — жанр здесь можно было бы охарактеризовать как прогрессив-метал. Он резкий, живой, заводной, очень хорошо сбалансирован как в аранжировках, так и в композиции в целом. Все это уже говорит слушателям о наступающем вайбе — жанр здесь можно было бы охарактеризовать как прогрессив-метал. Он резкий, живой, заводной, очень хорошо сбалансирован как в аранжировках, так и в композиции в целом. Все это уже говорит слушателям о наступающем вайбе",
        addedToPlaylist: true,
        icons: ["like", "sad"],
        isSkipped: false,
      },
      {
        id: 11,
        date: "12.11.2022",
        name: "Floyd Miles",
        avatar: require("@/assets/images/review-author2.png"),
        isSkipped: true,
      },
      {
        id: 12,
        date: "12.11.2022",
        name: "Jacob Jones",
        avatar: require("@/assets/images/review-author3.png"),
        isSkipped: false,
        addedToPlaylist: true,
      },
      {
        id: 13,
        date: "12.11.2022",
        name: "Electric Funeral Records",
        avatar: require("@/assets/images/review-author4.png"),
        isSkipped: false,
        addedToPlaylist: false,
        text: "Песня начинается с интенсивных, зажигательных, запоминающихся гитарных риффов, смешанных с динамичными барабанными битами. Все это уже говорит слушателям о наступающем вайбе — жанр здесь можно было бы охарактеризовать как прогрессив-метал. Он резкий, живой, заводной, очень хорошо сбалансирован как в аранжировках, так и в композиции в целом. Все это уже говорит слушателям о наступающем вайбе",
        icons: ["sad"],
      },
      {
        id: 14,
        date: "12.11.2022",
        name: "Дмитрий Васильев",
        avatar: require("@/assets/images/review-author1.png"),
        text: "Ответ куратора: Песня начинается с интенсивных, зажигательных, запоминающихся гитарных риффов, смешанных с динамичными барабанными битами. Все это уже говорит слушателям о наступающем вайбе — жанр здесь можно было бы охарактеризовать как прогрессив-метал. Он резкий, живой, заводной, очень хорошо сбалансирован как в аранжировках, так и в композиции в целом. Все это уже говорит слушателям о наступающем вайбе — жанр здесь можно было бы охарактеризовать как прогрессив-метал. Он резкий, живой, заводной, очень хорошо сбалансирован как в аранжировках, так и в композиции в целом. Все это уже говорит слушателям о наступающем вайбе",
        addedToPlaylist: true,
        icons: ["like"],
        isSkipped: false,
      },
      {
        id: 15,
        date: "12.11.2022",
        name: "Дмитрий Васильев",
        avatar: require("@/assets/images/review-author1.png"),
        text: "Ответ куратора: Песня начинается с интенсивных, зажигательных, запоминающихся гитарных риффов, смешанных с динамичными барабанными битами. Все это уже говорит слушателям о наступающем вайбе — жанр здесь можно было бы охарактеризовать как прогрессив-метал. Он резкий, живой, заводной, очень хорошо сбалансирован как в аранжировках, так и в композиции в целом. Все это уже говорит слушателям о наступающем вайбе — жанр здесь можно было бы охарактеризовать как прогрессив-метал. Он резкий, живой, заводной, очень хорошо сбалансирован как в аранжировках, так и в композиции в целом. Все это уже говорит слушателям о наступающем вайбе",
        addedToPlaylist: true,
        icons: ["like", "sad"],
        isSkipped: false,
      },
      {
        id: 16,
        date: "12.11.2022",
        name: "Floyd Miles",
        avatar: require("@/assets/images/review-author2.png"),
        isSkipped: true,
      },
      {
        id: 17,
        date: "12.11.2022",
        name: "Jacob Jones",
        avatar: require("@/assets/images/review-author3.png"),
        isSkipped: false,
        addedToPlaylist: true,
      },
      {
        id: 18,
        date: "12.11.2022",
        name: "Electric Funeral Records",
        avatar: require("@/assets/images/review-author4.png"),
        isSkipped: false,
        addedToPlaylist: false,
        text: "Песня начинается с интенсивных, зажигательных, запоминающихся гитарных риффов, смешанных с динамичными барабанными битами. Все это уже говорит слушателям о наступающем вайбе — жанр здесь можно было бы охарактеризовать как прогрессив-метал. Он резкий, живой, заводной, очень хорошо сбалансирован как в аранжировках, так и в композиции в целом. Все это уже говорит слушателям о наступающем вайбе",
        icons: ["sad"],
      },
      {
        id: 19,
        date: "12.11.2022",
        name: "Дмитрий Васильев",
        avatar: require("@/assets/images/review-author1.png"),
        text: "Ответ куратора: Песня начинается с интенсивных, зажигательных, запоминающихся гитарных риффов, смешанных с динамичными барабанными битами. Все это уже говорит слушателям о наступающем вайбе — жанр здесь можно было бы охарактеризовать как прогрессив-метал. Он резкий, живой, заводной, очень хорошо сбалансирован как в аранжировках, так и в композиции в целом. Все это уже говорит слушателям о наступающем вайбе — жанр здесь можно было бы охарактеризовать как прогрессив-метал. Он резкий, живой, заводной, очень хорошо сбалансирован как в аранжировках, так и в композиции в целом. Все это уже говорит слушателям о наступающем вайбе",
        addedToPlaylist: true,
        icons: ["like"],
        isSkipped: false,
      },
      {
        id: 20,
        date: "12.11.2022",
        name: "Дмитрий Васильев",
        avatar: require("@/assets/images/review-author1.png"),
        text: "Ответ куратора: Песня начинается с интенсивных, зажигательных, запоминающихся гитарных риффов, смешанных с динамичными барабанными битами. Все это уже говорит слушателям о наступающем вайбе — жанр здесь можно было бы охарактеризовать как прогрессив-метал. Он резкий, живой, заводной, очень хорошо сбалансирован как в аранжировках, так и в композиции в целом. Все это уже говорит слушателям о наступающем вайбе — жанр здесь можно было бы охарактеризовать как прогрессив-метал. Он резкий, живой, заводной, очень хорошо сбалансирован как в аранжировках, так и в композиции в целом. Все это уже говорит слушателям о наступающем вайбе",
        addedToPlaylist: true,
        icons: ["like", "sad"],
        isSkipped: false,
      },
      {
        id: 21,
        date: "12.11.2022",
        name: "Floyd Miles",
        avatar: require("@/assets/images/review-author2.png"),
        isSkipped: true,
      },
      {
        id: 22,
        date: "12.11.2022",
        name: "Jacob Jones",
        avatar: require("@/assets/images/review-author3.png"),
        isSkipped: false,
        addedToPlaylist: true,
      },
      {
        id: 23,
        date: "12.11.2022",
        name: "Electric Funeral Records",
        avatar: require("@/assets/images/review-author4.png"),
        isSkipped: false,
        addedToPlaylist: false,
        text: "Песня начинается с интенсивных, зажигательных, запоминающихся гитарных риффов, смешанных с динамичными барабанными битами. Все это уже говорит слушателям о наступающем вайбе — жанр здесь можно было бы охарактеризовать как прогрессив-метал. Он резкий, живой, заводной, очень хорошо сбалансирован как в аранжировках, так и в композиции в целом. Все это уже говорит слушателям о наступающем вайбе",
        icons: ["sad"],
      },
      {
        id: 24,
        date: "12.11.2022",
        name: "Дмитрий Васильев",
        avatar: require("@/assets/images/review-author1.png"),
        text: "Ответ куратора: Песня начинается с интенсивных, зажигательных, запоминающихся гитарных риффов, смешанных с динамичными барабанными битами. Все это уже говорит слушателям о наступающем вайбе — жанр здесь можно было бы охарактеризовать как прогрессив-метал. Он резкий, живой, заводной, очень хорошо сбалансирован как в аранжировках, так и в композиции в целом. Все это уже говорит слушателям о наступающем вайбе — жанр здесь можно было бы охарактеризовать как прогрессив-метал. Он резкий, живой, заводной, очень хорошо сбалансирован как в аранжировках, так и в композиции в целом. Все это уже говорит слушателям о наступающем вайбе",
        addedToPlaylist: true,
        icons: ["like"],
        isSkipped: false,
      },
    ]);

    const commentsLimit = 5;
    const pagesCount = ref(5);
    const currentPage = ref(1);
    const startIndex = computed(() => commentsLimit * (currentPage.value - 1));
    const endIndex = computed(() => commentsLimit * currentPage.value);
    const paginatedComments = computed(() =>
      comments.value.slice(startIndex.value, endIndex.value)
    );

    const onChangePage = (page) => {
      currentPage.value = page;
    };

    return {
      currentPage,
      musicFile,
      comments,
      pagesCount,
      paginatedComments,
      onChangePage,
    };
  },
};
</script>

<style lang="sass" scoped>
.review
  &__head
    display: flex
    align-items: center


  &__back
    display: flex
    align-items: center
    cursor: pointer


  &:hover
    .review__back-btn
      opacity: 0.7



  &-btn
    width: 60px
    height: 60px
    display: flex
    align-items: center
    justify-content: center
    background: #fff
    border: 1px solid #d1d5ef
    border-radius: 7px
    transition: $transition


  &-icon
    width: 24px
    height: auto
    object-fit: contain


  &-text
    margin-left: 20px
    font-weight: 600
    font-size: 24px
    line-height: 29px
    letter-spacing: $letter-spacing

  &__labels
    margin-left: auto
    display: flex
    align-items: center


  &__label
    display: flex
    align-items: center
    margin-left: 40px
    &:first-child
      margin-left: 0


    &-icon
      width: 40px
      height: 40px
      background: #ffffff
      border-radius: 5px
      display: flex
      align-items: center
      justify-content: center
      img
        width: 22px
        height: 22px
        object-fit: contain



    &-text
      margin-left: 10px
      font-size: 16px
      line-height: 19px
      letter-spacing: $letter-spacing


    &-value
      margin-left: 10px
      font-weight: 700
      font-size: 24px
      line-height: 29px
      letter-spacing: $letter-spacing


  &__main
    margin-top: 60px


  &__comments
    margin-top: 57px


  &__comment
    background: #fff
    border: 1px solid #e7ebff
    border-radius: 20px
    width: 100%
    padding: 15px 30px
    display: flex
    align-items: flex-start
    position: relative
    margin-top: 30px

    &-date
      font-weight: 700
      position: absolute
      left: 30px
      top: -20px
      color: #777b9e
      font-size: 16px
      line-height: 19px
      letter-spacing: $letter-spacing


    &-avatar
      width: 100px
      height: 100px
      object-fit: cover
      border-radius: 10px


    &-col
      margin-left: 30px


    &-name
      font-weight: 500
      font-size: 20px
      line-height: 24px
      letter-spacing: $letter-spacing


    &-text
      margin-top: 15px
      background: #fff9f9
      border-radius: 10px
      padding: 30px
      font-size: 16px
      line-height: 25px
      letter-spacing: $letter-spacing

    &-bottom
      margin-top: 24px
      display: flex
      align-items: center


    &-caption
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



    &-icons
      margin-left: auto
      display: flex
      align-items: center


    &-icon
      width: 40px
      height: 40px
      display: flex
      align-items: center
      justify-content: center
      border-radius: 8px
      margin-left: 10px

      img
        width: 20px
        height: 20px
        object-fit: contain


      &.like
        background: #b6ee9c
        border: 1px solid #9bd87e


      &.sad
        background: #ffeeee
        border: 1px solid #ffd0d0



    &-skipped
      position: absolute
      right: 48px
      top: 0
      bottom: 0
      margin: auto 0
      width: 60px
      height: 60px
      display: flex
      align-items: center
      justify-content: center
      background: #f6f7ff
      border: 1px solid #e7ebff
      border-radius: 10px

      img
        width: 32px
        height: 32px
        object-fit: contain
</style>
