<template>
  <div
    class="w-[220px] relative"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
  >
    <div class="relative">
      <div
        class="w-12 h-8 absolute top-0 right-0 bg-[#1E232B]/[0.8] text-lg text-gray font-bold text-center"
      >
        {{ detail?.rating }}
      </div>
      <img :src="getImage" alt="Card Cover" class="w-[220px]" />
    </div>
    <p class="text-gray font-bold mt-2 truncate">
      {{ detail?.title }}
    </p>
    <p class="text-sm text-[#929292] mt-1">{{ detail?.year }}</p>

    <div
      :class="[
        isHover ? 'opacity-100' : 'opacity-0',
        'w-[220px] h-[330px] bg-black/[0.8] flex flex-col items-center justify-center absolute top-0 left-0 transition-all duration-500',
      ]"
    >
      <div class="flex items-center">
        <i class="icon-star text-[#FFB802] text-4xl"></i>
        <span class="text-white text-2xl ml-1">{{ detail?.rating }}</span>
      </div>

      <p class="text-lg text-white font-semibold my-11">{{ detail?.genre }}</p>

      <button
        type="button"
        class="text-white text-sm bg-[#FF0000] rounded-[32px] px-8 py-2 font-bold hover:bg-red-700 focus:ring-4 focus:ring-red-900"
        @click="
          $router.push({
            name: 'movies-id',
            params: { id: detail?.id },
          })
        "
      >
        View
      </button>
    </div>
  </div>
</template>

<script>
import BelowZero from '~/assets/image/card/below-zero.png'
import BlackWaterAbyss from '~/assets/image/card/black-water-abyss.png'
import Breach from '~/assets/image/card/breach.png'
import FnF from '~/assets/image/card/fast-and-furious.png'
import OutsideTheWire from '~/assets/image/card/outside-the-wire.png'
import Soul from '~/assets/image/card/soul.png'
import Tenet from '~/assets/image/card/tenet.png'
import TheCroods from '~/assets/image/card/the-croods.png'
import TheLittleThing from '~/assets/image/card/the-little-thing.png'
import Vanguard from '~/assets/image/card/vanguard.png'
import WonderWoman from '~/assets/image/card/wonder-woman-1984.png'
import OneHundredPercentWolf from '~/assets/image/card/100-percent-wolf.png'

export default {
  name: 'MovieCard',
  props: {
    detail: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isHover: false,
    }
  },
  computed: {
    getImage() {
      switch (this.detail?.id) {
        case '1':
          return WonderWoman
        case '2':
          return BelowZero
        case '3':
          return TheLittleThing
        case '4':
          return OutsideTheWire
        case '5':
          return BlackWaterAbyss
        case '6':
          return Breach
        case '7':
          return Soul
        case '8':
          return FnF
        case '9':
          return TheCroods
        case '10':
          return Vanguard
        case '11':
          return Tenet
        default:
          return OneHundredPercentWolf
      }
    },
  },
}
</script>
