<template>
  <div>
    <h1>{{this.title}}</h1>
    <UserForm />
    <UserTable />
  </div>
</template>

<script>
import UserForm from './UserForm'
import UserTable from './UserTable'

export default {
  data () {
    return {
      title: 'User Form'
    }
  },
  components: {
    UserForm,
    UserTable
  }
}
</script>

<style>

</style>
