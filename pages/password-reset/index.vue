<template>
  <app-password-reset/>
</template>

<script>
  export default {
    components: {
      appPasswordReset: () => import('~/components/authentication/PasswordReset')
    }
  }
</script>

<style scoped>

</style>
