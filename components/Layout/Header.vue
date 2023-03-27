<template>
  <nav
    class="flex items-center bg-white/[.05] h-[66px] absolute top-0 w-full min-w-[1200px] z-50"
  >
    <div class="container flex flex-wrap items-center justify-between mx-auto">
      <!-- LOGO -->
      <a
        href="javascript:void(0)"
        class="flex items-center"
        @click="$router.push('/')"
      >
        <img
          src="~/assets/image/moovie-time-logo.png"
          alt="MoovieTime Logo"
          class="h-[31px]"
        />
      </a>

      <div class="flex">
        <!-- Search Bar -->
        <div class="relative w-[571px]">
          <i
            class="icon-movie text-2xl text-[#494C51] absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
          ></i>
          <input
            id="search-bar"
            class="w-full p-2 pl-12 pr-7 text-sm text-gray rounded bg-[#24282E] outline-none focus:ring focus:ring-primary hover:ring hover:ring-primary transition-all duration-500"
            placeholder="Find movie..."
          />
          <button
            type="button"
            class="text-white absolute top-2 right-2.5 bottom-2.5 font-medium rounded text-sm"
          >
            <i class="icon-search"></i>
          </button>
        </div>
      </div>

      <!-- Nav Menu -->
      <div id="navbar-dropdown" class="w-auto">
        <ul class="flex p-4 mt-0 text-sm font-medium rounded-lg space-x-8">
          <li>
            <button
              id="dropdownNavbarLink"
              data-dropdown-toggle="dropdownNavbar"
              class="text-gray hover:text-primary"
            >
              <i class="icon-view-grid"></i>
              CATEGORIES
            </button>
            <!-- Dropdown menu -->
            <div
              id="dropdownNavbar"
              class="z-10 hidden font-normal bg-[#111925] rounded-lg shadow w-44"
            >
              <ul
                class="py-2 text-sm text-gray-400"
                aria-labelledby="dropdownLargeButton"
              >
                <li v-for="category in categories" :key="category">
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-600 hover:text-white uppercase"
                  >
                    {{ category }}
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              class="text-gray hover:text-primary"
              @click="$router.push('/movies')"
              >MOVIES</a
            >
          </li>
          <li>
            <a href="#" class="text-gray hover:text-primary">TV SHOWS</a>
          </li>
          <li>
            <a href="#" class="text-gray hover:text-primary">LOGIN</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'HeaderLayout',
  data() {
    return {
      categories: [
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
