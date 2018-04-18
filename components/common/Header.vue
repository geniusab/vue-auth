<template lang="pug">
  nav.navbar.navbar-expand-lg.navbar-light.bg-light
    nuxt-link.navbar-brand(to="/", tag="a") BRAND
    #navbarSupportedContent.collapse.navbar-collapse
      ul.navbar-nav.mr-auto
        li.nav-item.active
          nuxt-link(to="/dashboard", tag="a", v-if="isAuth").nav-link Dashboard
      .btn-group
        nuxt-link(to="/sign-in")
          button.btn.btn-outline-success.my-2.my-sm-0(type='submit') Sign in
        nuxt-link(to="/sign-up")
          button.btn.btn-outline-success.my-2.my-sm-0(type='submit') Sign up
</template>

<script>
  export default {
    computed: {
      isAuth() {
        return this.$store.getters.isAuthenticated ? false : this.$store.getters.isAuthenticated;
      }
    },
  }
</script>

<style scoped lang="sass">
  .btn-group
    .btn
      &:first-child
        margin-right: 20px
</style>
