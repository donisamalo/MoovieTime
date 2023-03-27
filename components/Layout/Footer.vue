<template>
  <footer
    class="h-40 bg-[#15191F] text-[#929292] text-[13px] flex items-center"
  >
    <div class="container flex justify-between">
      <span>
        &#169; {{ new Date().getFullYear() }} MoovieTime. All rights reserved.
      </span>

      <img
        src="~/assets/image/footer-logo.png"
        alt="MoovieTime Footer Logo"
        class="w-[88px]"
      />

      <span>Made with Nuxt.js &amp; TailwindCSS</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterLayout',
}
</script>
