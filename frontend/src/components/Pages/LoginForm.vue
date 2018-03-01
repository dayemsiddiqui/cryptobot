<template>
  <div class="card">
    <form>
      <div class="card-header">
        <h4 class="card-title">
          Login Form
        </h4>
      </div>
      <div class="card-content">
        <small class="text-danger" v-show="isInvalidCredential">
            Invalid Credentials
        </small>
        <div class="form-group">
          <label>Username</label>
          <input type="text"
                 name="username"
                 v-validate="modelValidations.username"
                 v-model="model.username"
                 class="form-control">
          <small class="text-danger" v-show="username.invalid">
            {{ getError('username') }}
          </small>
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password"
                 name="password"
                 v-validate="modelValidations.password"
                 v-model="model.password"
                 class="form-control">
          <small class="text-danger" v-show="password.invalid">
            {{ getError('password') }}
          </small>
        </div>

      </div>
      <div class="card-footer text-center">
        <button type="submit" :disabled="errors.any()" @click.prevent="validate" class="btn btn-fill btn-info btn-wd">Login</button>
      </div>
    </form>

  </div>
</template>

<script>
  import { mapFields } from 'vee-validate'
  import api from 'src/services/api'

  export default {
    created () {
      // this.$store.commit('resetUserInstance') // samk fix this
    },
    computed: {
      ...mapFields(['username', 'password'])
    },
    data () {
      return {
        isInvalidCredential: false,
        model: {
          username: '',
          password: ''
        },
        modelValidations: {
          username: {
            required: true,
            min: 5
          },
          password: {
            required: true
          }
        }
      }
    },
    methods: {
      getError (fieldName) {
        return this.errors.first(fieldName)
      },
      validate () {
        this.$validator.validateAll()
        .then(isValid => {
          if (isValid) this.submit()
          // this.$emit('on-submit', this.registerForm, isValid)
        })
      },
      submit () {
        var self = this
        api.post('/auth/login', {
          username: this.model.username,
          password: this.model.password
        })
        .then(function (response) {
          if (response.data.token) { // recieved user and token
            self.$store.commit('setIsUserLoggedIn', true)
            self.$store.commit('setUser', response.data.user)
            self.$store.commit('setToken', response.data.token)
            self.$router.push('/overview')
          } else {
            self.isInvalidCredential = true
          }
        })
        .catch(function (error) {
          console.log(error)
        })
      }
    }
  }
</script>

<style>
</style>
