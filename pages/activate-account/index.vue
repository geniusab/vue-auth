<template>
  <app-activated/>
</template>

<script>
  import appActivated from '~/components/auth/activated'
  export default {
    middleware: ['auth'],
    components: {
      appActivated
    }
  }
</script>

<style scoped>

</style>
