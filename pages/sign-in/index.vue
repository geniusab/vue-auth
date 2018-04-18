<template>
  <app-sign-in/>
</template>

<script>
    export default {
        components: {
          appSignIn: () => import('~/components/authentication/SignIn')
        }
    }
</script>

<style scoped>

</style>
