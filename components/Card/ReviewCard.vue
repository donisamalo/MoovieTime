<template>
  <div class="bg-[#F9F9F9] rounded-xl shadow-md shadow-slate-400 p-6 w-full">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-4">
        <div class="bg-[#CACBCD] w-12 h-12 rounded-full"></div>
        <div>
          <p class="font-bold text-sm">{{ detail?.name }}</p>
          <p class="text-xs text-[#666666]">
            {{ $dayjs(detail?.date).format('MMMM DD, YYYY') }}
          </p>
        </div>
      </div>
      <div class="bg-[#EBEBEB] rounded-lg p-1.5 flex justify-start mb-6">
        <i class="icon-star text-xl text-[#FFB802]"></i>
        <span class="text-4xl font-semibold mr-2">{{ detail?.rating }}</span>
      </div>
    </div>
    <p
      :class="[
        'text-[13px] italic',
        isExpand ? 'line-clamp-none' : 'line-clamp-3',
      ]"
    >
      {{ detail?.review }}
    </p>
    <span
      v-if="!isExpand"
      class="text-[13px] italic text-primary underline cursor-pointer"
      @click="isExpand = true"
    >
      read the rest.
    </span>
  </div>
</template>

<script>
export default {
  name: 'ReviewCard',
  props: {
    detail: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isExpand: false,
    }
  },
}
</script>
