<template>
  <app-activate/>
</template>

<script>
  export default {
    middleware: ['auth'],
    components: {
      appActivate: () => import('~/components/registration/Activate')
    }
  }
</script>

<style scoped>

</style>
