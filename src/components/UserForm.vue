<template>
  <div class="user-form">
    <div class="form-group">
      <p>Your First Name is {{this.userData.firstName || 'UserName'}}</p>
      <input
        v-validate="'required|alpha'"
        :class="{
          'input': true,
          'is-danger': errors.has('alpha')
          }"
        name="first-name"
        type="text"
        v-model="userData.firstName"
        placeholder="Enter Your First Name"
        clearable
      />

      <span v-show="errors.has('first-name')" class="help is-danger">{{ errors.first('first-name') }}</span>
    </div>
    <div class="form-group">
      <p>Your First Name is {{this.userData.lastName || 'LastName'}}</p>
      <input
        v-validate="'required|alpha'"
        :class="{
          'input': true,
          'is-danger': errors.has('alpha')
          }"
        name="last-name"
        type="text"
        v-model="userData.lastName"
        placeholder="Enter Your Last Name"
      />
      <span v-show="errors.has('last-name')" class="help is-danger">{{ errors.first('last-name') }}</span>
    </div>
    <div class="form-group">
      <p>Your email is {{this.userData.email || 'test@test.com'}}</p>
      <input
        v-validate="'required|email'"
        :class="{
          'input': true,
          'is-danger': errors.has('email')
          }"
        name="email"
        type="email"
        v-model="userData.email"
        placeholder="Enter Your Email"
      />
      <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
    </div>
    <div class="form-group">
      <p>Your age is {{this.userData.age || '18'}}</p>
      <input
        v-validate="'required|numeric'"
        :class="{
          'input': true,
          'is-danger': errors.has('age')
          }"
        name="age"
        type="number"
        v-model="userData.age"
        placeholder="Enter Your Age"
      />
      <span v-show="errors.has('age')" class="help is-danger">{{ errors.first('age') }}</span>
    </div>
    <div class="form-group">
      <p>Your skype is {{this.userData.skype || 'test_skype'}}</p>
      <input
        v-validate="'required|alpha_dash'"
        :class="{
          'input': true,
          'is-danger': errors.has('skype')
          }"
        name="skype"
        type="text"
        v-model="userData.skype"
        placeholder="Enter Your Skype"
      />
      <span v-show="errors.has('skype')" class="help is-danger">{{ errors.first('skype') }}</span>
    </div>
    <div class="form-group">
      <button class="btn btn-block" type="button" @click="addUser">Add User</button>
    </div>
  </div>
</template>

<script>
import bus from '../bus'

export default {
  data () {
    return {
      userData: {
        firstName: '',
        lastName: '',
        email: '',
        age: '',
        skype: ''
      },
      formSubmitted: false,
      users: []
    }
  },

  methods: {
    addUser: function () {
      this.$validator.validateAll()
      .then(res => {
        if (res) {
          this.users.push(Object.assign({}, this.userData))

          bus.$emit('user-added', this.users)
          this.formSubmitted = true

          this.userData.firstName = ''
          this.userData.lastName = ''
          this.userData.email = ''
          this.userData.age = ''
          this.userData.skype = ''

          this.errors.clear()
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "./user-form.scss";
</style>
