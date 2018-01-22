// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VeeValidate from 'vee-validate'

Vue.config.productionTip = false

VeeValidate.Validator.extend('nickname', {
  getMessage (field, params, data) {
    return (data && data.message) || 'Something went wrong'
  },
  validate: value => {
    return new Promise(resolve => {
      if (value === 'god' || value === 'devil' || value === 'president') {
        resolve({
          valid: false,
          data: {message: 'Sorry, nickname cannot be named "god", "devil", "president"'}
        })
      }
      resolve({
        valid: true,
        data: null
      })
    })
  }
})

Vue.use(VeeValidate)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
