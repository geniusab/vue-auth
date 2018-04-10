<template lang="pug">
  section.auth
    h1 Sign Up
    form.col-6.form-auth(@keydown.enter='beforeSubmit', @submit.prevent="beforeSubmit")
      .form-group(:class="{ 'error': errors.has('email'), 'success': !errors.has('email') && !emailFlag.invalid && emailFlag.dirty}")
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
      .form-group
        label(for='exampleInputPassword1') Password
        input#exampleInputPassword1.form-control(
        autocomplete,
        name='password',
        type='password',
        placeholder='Password',
        v-model="password",
        v-model.trim="password",
        v-validate="{ required: true, min: 4, max: 64 }",
        :class="{'input': true, 'is-invalid': errors.has('password') }")
        span.help.invalid-feedback(v-show="errors.has('password')") password very short

      button.btn.btn-primary(type='submit') Create account



</template>

<script>
  import Vue from 'vue'
  import VeeValidate from 'vee-validate';
  import  { mapFields } from 'vee-validate';
  Vue.use(VeeValidate);
  export default {
    data () {
      return {
        email: '',
        password: ''
      }
    },
    computed: {
      ...mapFields({
        emailFlag: 'email',
        passwordFlags: 'password',
      })
    },
    methods: {
      beforeSubmit(){
        this.$validator.resume();
        this.$validator.validateAll().then((result) => {
          if (result) {
            this.onSubmit();
          }
        });
      },


      async onSubmit () {
        const formData = {
          email: this.email,
          password: this.password,
        };
        // console.log(formData);
        await this.$store.dispatch('signUp', {email: formData.email, password: formData.password})
          .then(() => {
            this.$router.push('/activate-account')
          });
      }
    },
    // created(){
    //   this.$validator.pause();
    // }
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
