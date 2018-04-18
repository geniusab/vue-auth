<template lang="pug">
  section.auth
    h1 Activate Account
    form.col-6.form-auth(@keydown.enter='beforeSubmit', @submit.prevent="beforeSubmit")
      p Your email address: {{email}}
      .form-group
        label(for='exampleInputPassword1') Activated Number
        input#exampleInputPassword1.form-control(
        autocomplete="off",
        name='activate',
        type='text',
        placeholder='Activate Number',
        v-model.trim="activationCode",
        v-validate="{ required: true, regex: /^[0-9]*$/, length: 8 }",
        :class="{'input': true, 'is-invalid': errors.has('activate') }")
        span.help.invalid-feedback(v-show="errors.has('activate')") The field field format is invalid. The field field must be at least 8 characters.

      button.btn.btn-primary(type='submit') Activated


</template>

<script>
  import Vue from 'vue'
  import VeeValidate from 'vee-validate';
  Vue.use(VeeValidate);
  export default {
    computed: {
      email() {
        return !this.$store.getters.email ? false : this.$store.getters.email;
      }
    },
    data() {
      return {
        activationCode: ''
      }
    },
    methods: {
      beforeSubmit() {
        this.$validator.resume();
        this.$validator.validateAll().then((result) => {
          if (result) {
            this.onSubmit();
          }
        });
      },

      async onSubmit() {
        await this.$store.dispatch('activateAccount', this.activationCode)
          .then(() => {
            this.$router.push('/sign-in')
          });
      }
    }
  }
</script>

<style scoped lang="scss">
  .auth {
    margin: 200px auto;
    h1 {
      text-align: center;
    }
  }

  label {
    display: block;
  }

  .create-account {
    margin: 10px auto;
    border: 1px solid #eee;
    padding: 20px;
    -webkit-box-shadow: 0 2px 3px #ccc;
    box-shadow: 0 2px 3px #ccc;
  }

  .help {
    display: block;
  }

  .form-auth {
    margin: 30px auto;
    border: 1px solid #eee;
    padding: 20px;
    box-shadow: 0 2px 3px #ccc;
  }

  .submit button[disabled],
  .submit button[disabled]:hover,
  .submit button[disabled]:active {
    border: 1px solid #ccc;
    background-color: transparent;
    color: #ccc;
    cursor: not-allowed;
  }
</style>
