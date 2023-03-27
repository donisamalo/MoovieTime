<template>
  <div>
    <div class="bg-[#1E232A] pt-24 pb-16">
      <VueSlickCarousel
        v-if="bannerList.length"
        :dots="true"
        :center-mode="true"
        :variable-width="true"
      >
        <div
          v-for="banner in bannerList"
          :key="banner?.id"
          class="!flex items-center p-4"
        >
          <img :src="getImage(banner.id)" alt="Card Cover" class="w-[243px]" />
          <div class="bg-black text-white p-6 w-[298px] h-[324px]">
            <i class="icon-star text-[#FFB802]"></i>
            <span class="text-lg font-bold">{{ banner.rating }}</span>
            <h3 class="text-2xl font-medium">{{ banner.title }}</h3>
            <div class="my-2">
              <p>
                {{ banner.year }}
                <span
                  class="relative ml-1 pl-4 before:content-[''] before:absolute before:w-2 before:h-2 before:bg-[#808080] before:left-0 before:inset-y-1.5 before:rounded-full"
                  >{{ banner.genre }}</span
                >
              </p>
            </div>
            <p class="text-xs">
              {{ banner.desc }}
            </p>
          </div>
        </div>
      </VueSlickCarousel>
    </div>

    <div class="container py-[100px]">
      <div class="flex justify-between mb-8">
        <h2
          class="text-2xl text-gray font-semibold relative before:absolute before:content-[''] before:w-[112px] before:h-[6px] before:bg-primary before:top-[-16px]"
        >
          Discover Movies
        </h2>
        <div>
          <span
            :class="[
              'text-gray text-sm rounded-[32px] py-[7px] px-4 mr-4 cursor-pointer transition-all',
              isPopular ? 'bg-red' : 'bg-[#21252A]',
            ]"
            @click="isPopular = !isPopular"
          >
            Popularity
          </span>
          <span
            :class="[
              'text-gray text-sm rounded-[32px] py-[7px] px-4 cursor-pointer transition-all',
              isRelease ? 'bg-red' : 'bg-[#21252A]',
            ]"
            @click="isRelease = !isRelease"
          >
            Release Date
          </span>
        </div>
      </div>

      <div class="flex flex-wrap gap-x-6 gap-y-9">
        <MovieCard v-for="card in cardList" :key="card?.id" :detail="card" />
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

import BelowZero from '~/assets/image/card/below-zero.png'
import BlackWaterAbyss from '~/assets/image/card/black-water-abyss.png'
import OutsideTheWire from '~/assets/image/card/outside-the-wire.png'
import TheLittleThing from '~/assets/image/card/the-little-thing.png'
import WonderWoman from '~/assets/image/card/wonder-woman-1984.png'

export default {
  name: 'IndexPage',
  components: { VueSlickCarousel },
  data() {
    return {
      cardList: [],
      bannerList: [],
      isPopular: true,
      isRelease: false,
    }
  },
  async mounted() {
    await this.getList()
  },
  methods: {
    async getList() {
      try {
        const { data } = await this.$api.moovie.getList()
        this.cardList = data.slice(0, 10)
        this.bannerList = data.slice(0, 5)
      } catch (error) {
        console.error(error)
      }
    },
    getImage(id) {
      switch (id) {
        case '1':
          return WonderWoman
        case '2':
          return BelowZero
        case '3':
          return TheLittleThing
        case '4':
          return OutsideTheWire
        default:
          return BlackWaterAbyss
      }
    },
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
