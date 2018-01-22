<template>
  <div class="user-form">
    <form
      @submit.prevent="validatePrimaryForm('primaryForm')"
      v-show="!primaryFormSubmitted"
      data-vv-scope="primaryForm"
    >
      <div class="form-group">
        <p>Your First Name is {{this.userData.firstName || 'UserName'}}</p>
        <input
          v-validate="'required|alpha|min:4'"
          :class="{
            'input': true,
            'is-danger': errors.has('alpha')
            }"
          name="first-name"
          type="text"
          v-model="userData.firstName"
          placeholder="Enter Your First Name"
        />
        <span v-show="errors.has('primaryForm.first-name')" class="help is-danger">{{ errors.first('primaryForm.first-name') }}</span>
      </div>
      <div class="form-group">
        <p>Your First Name is {{this.userData.lastName || 'LastName'}}</p>
        <input
          v-validate="'required|alpha|min:4'"
          :class="{
            'input': true,
            'is-danger': errors.has('alpha')
            }"
          name="last-name"
          type="text"
          v-model="userData.lastName"
          placeholder="Enter Your Last Name"
        />
        <span v-show="errors.has('primaryForm.last-name')" class="help is-danger">{{ errors.first('primaryForm.last-name') }}</span>
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
        <span v-show="errors.has('primaryForm.email')" class="help is-danger">{{ errors.first('primaryForm.email') }}</span>
      </div>
      <div class="form-group">
        <p>Your age is {{this.userData.age || '18'}}</p>
        <input
          v-validate="'numeric'"
          :class="{
            'input': true,
            'is-danger': errors.has('age')
            }"
          name="age"
          type="text"
          v-model="userData.age"
          placeholder="Enter Your Age"
        />
        <span v-show="errors.has('primaryForm.age')" class="help is-danger">{{ errors.first('primaryForm.age') }}</span>
      </div>
      <div class="form-group">
        <p>Your skype is {{this.userData.skype || 'test_skype'}}</p>
        <input
          v-validate="'alpha_dash|min:4|max:10'"
          :class="{
            'input': true,
            'is-danger': errors.has('skype')
            }"
          name="skype"
          type="text"
          v-model="userData.skype"
          placeholder="Enter Your Skype"
        />
        <span v-show="errors.has('primaryForm.skype')" class="help is-danger">{{ errors.first('primaryForm.skype') }}</span>
      </div>
      <div class="form-group">
        <button class="btn btn-block" type="submit">Next</button>
      </div>
    </form>

    <form
      @submit.prevent="validateSecondaryForm('secondaryForm')"
      v-show="primaryFormSubmitted"
      data-vv-scope="secondaryForm"
    >
      <p>Your hobbies</p>
      <div class="form-group">
        <input
          name="hobbies"
          type="text"
          v-model="userData.hobbies"
          placeholder="Write about your hobbies"
        />
      </div>
      <div class="form-group">
        <p>Your telephones</p>
        <input
          name="telephones"
          type="text"
          v-model="userData.telephones"
          placeholder="Write your telephones"
        />
      </div>
      <div class="form-group">
        <p>Your nickname</p>
        <input
          v-validate="'nickname'"
          name="nickname"
          type="text"
          v-model="userData.nickname"
          placeholder="Enter Your Nickname"
        />
        <span v-show="errors.has('secondaryForm.nickname')" class="help is-danger">{{ errors.first('secondaryForm.nickname') }}</span>
      </div>
      <div class="form-group">
        <button class="btn btn-block" type="submit">Finish</button>
      </div>
    </form>
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
        skype: '',
        hobbies: '',
        telephones: '',
        nickname: ''
      },
      primaryFormSubmitted: false,
      secondaryFormSubmitted: false
    }
  },

  methods: {
    validatePrimaryForm: function (scope) {
      this.$validator.validateAll(scope)
      .then(res => {
        if (res) {
          this.primaryFormSubmitted = true
        }
      })
    },
    validateSecondaryForm: function (scope) {
      this.$validator.validateAll(scope)
      .then(res => {
        if (res) {
          bus.$emit('user-added', this.userData)
          for (var key in this.userData) {
            this.userData[key] = ''
          }
          setTimeout(() => {
            this.$validator.errors.clear('primaryForm')
            this.$validator.errors.clear('secondaryForm')
          }, 0)
          this.primaryFormSubmitted = false
          this.secondaryFormSubmitted = true
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "./user-form.scss";
</style>
