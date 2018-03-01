<template>
  <div class="card">
    <form>
      <div class="card-header">
        <h4 class="card-title">
          Sign up and get started!
        </h4>
      </div>
      <div class="card-content">
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
        <div class="form-group">
          <label>Confirm Password</label>
          <input type="password"
                 name="confirm"
                 v-validate="modelValidations.confirmPassword"
                 v-model="model.confirmPassword"
                 class="form-control">
          <small class="text-danger" v-show="confirm.invalid">
            {{ getError('confirm') }}
          </small>
        </div>
      </div>
      <div class="card-footer text-right">
        <button type="submit" :disabled="errors.any()" @click.prevent="validate" class="btn btn-fill btn-info btn-wd">Register</button>
      </div>
    </form>

  </div>
</template>

<script>
  import { Validator, mapFields } from 'vee-validate'
  import api from 'src/services/api'

  const dict = {
    custom: {
      password: {
        regex: 'Requires atleast 6 characters, one uppercase letter, one lowercase letter and one number' // messages can be strings as well.
      }
    }
  }

  Validator.localize('en', dict)

  export default {
    created () {
      const isUserUnique = (username) => {
        return api.post('/auth/validateuser', {
          username
        }).then((response) => {
          return {
            valid: response.data.valid,
            data: {
              message: response.data.message
            }
          }
        })
      }

      Validator.extend('unique', {
        validate: isUserUnique,
        getMessage: (field, params, data) => data.message
      })
    },
    computed: {
      ...mapFields(['username', 'password', 'confirm'])
    },
    data () {
      return {
        model: {
          username: '',
          password: '',
          confirmPassword: ''
        },
        modelValidations: {
          username: {
            required: true,
            min: 5,
            unique: true
          },
          password: {
            required: true,
            regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/ // atleast 6 characters, one uppercase letter, one lowercase letter and one number
          },
          confirmPassword: {
            required: true,
            confirmed: 'password'
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
        api.post('/auth/register', {
          username: this.model.username,
          password: this.model.password
        })
        .then(function (response) {
          if (response) self.$router.push('/login')
          // console.log(response)
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
