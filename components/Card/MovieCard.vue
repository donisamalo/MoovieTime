<template>
  <div
    class="w-[220px] relative"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
  >
    <div class="relative">
      <div
        class="w-12 h-8 absolute top-0 right-0 bg-[#1E232B]/[0.8] text-lg text-[#E5E5E5] font-bold text-center"
      >
        7.0
      </div>
      <img
        src="~/assets/image/card/wonder-woman-1984.png"
        alt="Card Cover"
        class="w-[220px]"
      />
    </div>
    <p class="text-[#E5E5E5] mt-2 truncate">
      Wonder Woman 1984198419841984 19841984 19841984
    </p>
    <p class="text-sm text-[#929292] mt-1">2020</p>

    <div
      :class="[
        isHover ? 'opacity-100' : 'opacity-0',
        'w-[220px] h-[330px] bg-black/[0.8] flex flex-col items-center justify-center absolute top-0 left-0 transition-all duration-500',
      ]"
    >
      <div class="flex items-center">
        <i class="icon-star text-[#FFB802] text-4xl"></i>
        <span class="text-white text-2xl ml-1">6.5</span>
      </div>

      <p class="text-lg text-white font-semibold my-11">Action</p>

      <button
        type="button"
        class="text-white text-sm bg-[#FF0000] rounded-[32px] px-8 py-2 font-bold hover:bg-red-700 focus:ring-4 focus:ring-red-900"
        @click="
          $router.push({
            name: 'movies-id',
            params: { id: 1 },
          })
        "
      >
        View
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieCard',
  data() {
    return {
      isHover: false,
    }
  },
}
</script>
