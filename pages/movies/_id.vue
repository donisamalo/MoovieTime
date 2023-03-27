<template>
  <div>
    <div class="bg-wonder-woman h-[468px] bg-no-repeat bg-cover relative">
      <div
        class="bg-black/[0.5] w-full h-20 absolute bottom-0 flex items-center"
      >
        <div class="container flex items-center pl-[250px] relative">
          <div class="text-white absolute left-[250px] bottom-[91px]">
            <p class="text-lg font-medium">2020</p>
            <p class="text-4xl font-semibold">Wonder Woman 1984</p>
            <p class="text-sm font-medium">Fantasy, Action, Adventure</p>
          </div>

          <div class="flex items-center mr-6">
            <i class="icon-star text-[#FFB802] text-4xl"></i>
            <span class="text-white text-2xl ml-1">6.5</span>
          </div>
          <div class="pr-8 mr-8 border-r border-slate-600">
            <p class="text-xs text-[#8E9289] font-medium">USER SCORE</p>
            <p class="text-xs text-white font-medium uppercase">3621 Votes</p>
          </div>
          <div class="pr-8 mr-8 border-r border-slate-600">
            <p class="text-xs text-[#8E9289] font-medium">STATUS</p>
            <p class="text-xs text-white font-medium uppercase">Released</p>
          </div>
          <div class="pr-8 mr-8 border-r border-slate-600">
            <p class="text-xs text-[#8E9289] font-medium">LANGUAGE</p>
            <p class="text-xs text-white font-medium uppercase">English</p>
          </div>
          <div class="pr-8 mr-8 border-r border-slate-600">
            <p class="text-xs text-[#8E9289] font-medium">BUDGET</p>
            <p class="text-xs text-white font-medium uppercase">
              $200,000,000.00
            </p>
          </div>
          <div class="pr-8">
            <p class="text-xs text-[#8E9289] font-medium">PRODUCTION</p>
            <p class="text-xs text-white font-medium uppercase">
              DC Entertainment
            </p>
          </div>

          <img
            src="~/assets/image/card/wonder-woman-1984.png"
            alt="Card Cover"
            class="w-[220px] absolute bottom-[-136px] left-0 shadow-lg shadow-slate-400"
          />
        </div>
      </div>
    </div>

    <div class="bg-white">
      <div class="container">
        <div class="pl-[250px] pt-8">
          <h3 class="text-sm text-red font-semibold">OVERVIEW</h3>
          <p class="text-sm w-[526px] mt-2 leading-[200%]">
            Wonder Woman comes into conflict with the Soviet Union during the
            Cold War in the 1980s and finds a formidable foe by the name of the
            Cheetah.
          </p>
        </div>

        <div class="mt-10">
          <h3 class="text-sm text-red font-semibold mb-4">REVIEWS</h3>
          <div class="flex gap-8 pb-12">
            <ReviewCard
              v-for="review in cardDetail.reviews"
              :key="review?.name"
              :detail="review"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="bg-[#1E232B]">
      <div class="container py-12">
        <h3 class="uppercase text-white text-sm font-semibold">
          Recommendation Movies
        </h3>
        <div class="flex flex-wrap gap-6 mt-9 items-center justify-center">
          <MovieCard v-for="card in cardList" :key="card?.id" :detail="card" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailMoviePage',
  data() {
    return {
      cardDetail: {},
      cardList: [],
    }
  },
  async mounted() {
    await this.getDetail()
    await this.getList()
  },
  methods: {
    async getList() {
      try {
        const { data } = await this.$api.moovie.getList()
        this.cardList = data.slice(0, 5)
      } catch (error) {
        console.error(error)
      }
    },
    async getDetail() {
      try {
        const { data } = await this.$api.moovie.getDetail(this.$route.params.id)
        this.cardDetail = data
      } catch (error) {
        console.error(error)
      }
    },
  },
}
</script>
