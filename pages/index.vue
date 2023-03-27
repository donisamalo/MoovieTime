<template>
  <div>
    <div class="bg-[#1E232A] pt-24 pb-16">
      <VueSlickCarousel :dots="true" :center-mode="true" :variable-width="true">
        <div v-for="n in 5" :key="n" class="!flex items-center p-4">
          <img
            src="~/assets/image/card/wonder-woman-1984.png"
            alt="Card Cover"
            class="w-[243px]"
          />
          <div class="bg-black text-white p-6 w-[298px] h-[324px]">
            <i class="icon-star text-[#FFB802]"></i>
            <span class="text-lg font-bold">7.3</span>
            <h3 class="text-2xl font-medium">Space Sweepers</h3>
            <div class="my-2">
              <p>
                2021
                <span
                  class="relative ml-1 pl-4 before:content-[''] before:absolute before:w-2 before:h-2 before:bg-[#808080] before:left-0 before:inset-y-1.5 before:rounded-full"
                  >Sci-Fi</span
                >
              </p>
            </div>
            <p class="text-xs">
              When the crew of a space junk collector ship called The Victory
              discovers a humanoid robot named Dorothy that's known to be a
              weapon of mass destruction, they get involved in a risky business
              deal which puts their lives at stake.
            </p>
          </div>
        </div>
      </VueSlickCarousel>
    </div>

    <div class="container py-[100px]">
      <div class="flex justify-between mb-8">
        <h2
          class="text-2xl text-[#E5E5E5] font-semibold relative before:absolute before:content-[''] before:w-[112px] before:h-[6px] before:bg-[#E74C3C] before:top-[-16px]"
        >
          Discover Movies
        </h2>
        <div>
          <span
            class="bg-[#FF0000] text-[#E5E5E5] text-sm rounded-[32px] py-[7px] px-4 mr-4"
          >
            Popularity
          </span>
          <span
            class="bg-[#21252A] text-[#E5E5E5] text-sm rounded-[32px] py-[7px] px-4"
          >
            Release Date
          </span>
        </div>
      </div>

      <div class="flex flex-wrap gap-x-6 gap-y-9">
        <MovieCard v-for="n in 10" :key="n" />
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'IndexPage',
  components: { VueSlickCarousel },
  data() {
    return {
      slickOptions: {
        slidesToShow: 3,
      },
    }
  },
}
</script>

<style lang="postcss">
.slick-dots {
  bottom: -40px;
  li {
    button {
      &::before {
        content: '';
        width: 12px;
        height: 12px;
        background: #8f9195;
        border-radius: 6px;
      }
    }
    &.slick-active {
      width: 70px;
      button {
        &::before {
          background: #e74c3c;
          width: 60px;
        }
      }
    }
  }
}
</style>
