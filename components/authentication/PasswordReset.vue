<template lang="pug">
  section.auth
    h1 Pass Reset
    form.col-6.form-auth(@keydown.enter='beforeSubmit', @submit.prevent="beforeSubmit", autocomplete="on")
      .form-group
        label(for='exampleInputEmail1') Email address
        input#exampleInputEmail1.form-control(
        name='email',
        type='email',
        placeholder='Enter email',
        v-model="email",
        v-validate="'required|email'",
        :class="{'input': true, 'is-invalid': errors.has('email') }"
        )
        span.help.invalid-feedback(v-show="errors.has('email')") email not valid


      button.btn.btn-primary(type='submit') Submit


</template>

<script>
  import Vue from 'vue';
  import VeeValidate from 'vee-validate';
  Vue.use(VeeValidate);
  export default {
    data() {
      return {
        email: '',
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
        console.log(this.email);
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
