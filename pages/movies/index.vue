<template>
  <div class="pt-16">
    <div class="container py-20">
      <h1
        class="text-4xl text-[#E5E5E5] font-semibold relative before:absolute before:content-[''] before:w-[112px] before:h-[6px] before:bg-[#E74C3C] before:top-[-16px] mb-16"
      >
        Movies
      </h1>

      <div class="flex gap-[20px]">
        <div class="w-60 min-w-[240px] py-5 bg-[#111925] rounded-lg h-fit">
          <h4
            class="text-[#E5E5E5] font-semibold px-4 border-b border-slate-600 mb-4 pb-4"
          >
            Sort Result By
          </h4>
          <div class="px-4">
            <select
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
            class="text-[#E5E5E5] font-semibold px-4 border-y border-slate-600 my-4 py-4"
          >
            Sort Result By
          </h4>
          <div class="px-4">
            <div
              v-for="genre in genres"
              :key="genre"
              class="flex items-center justify-between mb-3"
            >
              <label
                for="default-checkbox"
                class="ml-2 text-sm text-gray-900 dark:text-gray-300"
              >
                {{ genre }}
              </label>
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-[#E74C3C] bg-gray-700 border-gray-600 rounded focus:[#E74C3C] focus:ring-2"
              />
            </div>
          </div>
        </div>

        <div class="flex flex-wrap gap-x-5 gap-y-7">
          <MovieCard v-for="n in 12" :key="n" />

          <button
            type="button"
            class="m-auto mt-6 text-center text-white text-sm bg-[#FF0000] rounded-[32px] px-8 py-2 font-bold hover:bg-red-700 focus:ring-4 focus:ring-red-900"
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
    }
  },
}
</script>
