<template>
  <div class="bg-[#F9F9F9] rounded-xl shadow-md shadow-slate-400 p-6 w-full">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-4">
        <div class="bg-[#CACBCD] w-12 h-12 rounded-full"></div>
        <div>
          <p class="font-bold text-sm">SWITCH.</p>
          <p class="text-xs text-[#666666]">December 18, 2020</p>
        </div>
      </div>
      <div class="bg-[#EBEBEB] rounded-lg py-3 px-1.5 flex justify-start">
        <i class="icon-star text-xl text-[#FFB802]"></i>
        <span class="text-4xl font-semibold mr-2">7.0</span>
      </div>
    </div>
    <p
      :class="[
        'text-[13px] italic',
        isExpand ? 'line-clamp-none' : 'line-clamp-3',
      ]"
    >
      It isn't as easy as saying 'Wonder Woman 1984' is a good or bad movie. The
      pieces are there, and there are moments I adore, but it does come across
      as a bit of a mess, even though the action sequences are breathtaking. If
      you're a fan of the original film, you'll be more willing to take the
      ride, but for those more indifferent, it may be a bit of a blander sit. If
      you can and are planning to watch it, the theatrical experience is the way
      to go - there is nothing like seeing these stunning sets, fun action
      scenes and hearing Zimmer's jaw-dropping score like on the big screen. -
      Chris dos Santos
    </p>
    <span
      v-if="!isExpand"
      class="text-[13px] italic text-[#E74C3C] underline cursor-pointer"
      @click="isExpand = true"
    >
      read the rest.
    </span>
  </div>
</template>

<script>
export default {
  name: 'ReviewCard',
  data() {
    return {
      isExpand: false,
    }
  },
}
</script>
