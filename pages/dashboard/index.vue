<template lang="pug">
  section.container#dashboard
    h1 That's the dashboard!
    p You should only get here if you're authenticated!
    p Your email address: {{email}}

</template>

<script>

    export default {
      middleware: ['activated'],
      computed: {
        email() {
          return !this.$store.getters.email ? false : this.$store.getters.email;
        }
      },
    }
</script>

<style scoped>
  .container {
    min-height: calc(100vh - 56px);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
  }
</style>
