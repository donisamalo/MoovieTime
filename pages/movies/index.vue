<template>
  <div class="pt-16">
    <div class="container py-20">
      <h1
        class="text-4xl text-gray font-semibold relative before:absolute before:content-[''] before:w-[112px] before:h-[6px] before:bg-primary before:top-[-16px] mb-16"
      >
        Movies
      </h1>

      <div class="flex gap-[20px]">
        <div class="w-60 min-w-[240px] py-5 bg-[#111925] rounded-lg h-fit">
          <h4
            class="text-gray font-semibold px-4 border-b border-slate-600 mb-4 pb-4"
          >
            Sort Result By
          </h4>
          <div class="px-4">
            <select
              id="countries"
              class="text-gray text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-none outline-none focus:ring focus:ring-primary hover:ring hover:ring-primary transition-all"
            >
              <option selected value="P">Popularity</option>
              <option value="PA">Popularity Ascending</option>
              <option value="PD">Popularity Descending</option>
              <option value="RDA">Release Date Ascending</option>
              <option value="RDD">Release Date Descending</option>
              <option value="RA">Rating Ascending</option>
              <option value="RD">Rating Descending</option>
            </select>
          </div>

          <h4
            class="text-gray font-semibold px-4 border-y border-slate-600 my-4 py-4"
          >
            Sort Result By
          </h4>
          <div class="px-4">
            <div
              v-for="genre in genres"
              :key="genre"
              class="flex items-center justify-between mb-3"
            >
              <label for="default-checkbox" class="ml-2 text-sm text-gray-300">
                {{ genre }}
              </label>
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-primary bg-gray-700 border-gray-600 rounded focus:primary focus:ring-2"
              />
            </div>
          </div>
        </div>

        <div class="flex flex-wrap gap-x-5 gap-y-7">
          <MovieCard v-for="card in cardList" :key="card.id" :detail="card" />

          <button
            type="button"
            class="m-auto mt-6 text-center text-white text-sm bg-red rounded-[32px] px-8 py-2 font-bold hover:bg-red-700 focus:ring-4 focus:ring-red-900"
          >
            Load More
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MoviesPage',
  data() {
    return {
      genres: [
        'Action',
        'Adventure',
        'Animation',
        'Comedy',
        'Crime',
        'Documentary',
        'Drama',
        'Family',
        'Fantasy',
        'History',
        'Horror',
      ],
      cardList: [],
    }
  },
  async mounted() {
    await this.getList()
  },
  methods: {
    async getList() {
      try {
        const { data } = await this.$api.moovie.getList()
        this.cardList = data
      } catch (error) {
        console.error(error)
      }
    },
  },
}
</script>
