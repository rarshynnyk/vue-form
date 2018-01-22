<template>
  <div id="app">
    <UserForm />
    <UserTable :users="users" />
  </div>
</template>

<script>
import UserForm from './components/UserForm'
import UserTable from './components/UserTable'
import bus from './bus'

export default {
  data () {
    return {
      users: JSON.parse(localStorage.getItem('users') || '[]')
    }
  },

  created () {
    bus.$on('user-added', data => {
      this.users.push(Object.assign({}, data))
      localStorage.setItem('users', JSON.stringify(this.users))
    })
  },

  components: {
    UserForm,
    UserTable
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
