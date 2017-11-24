<template>
  <div v-if="users.length">
    <table class="table">
      <thead>
        <th>User First Name</th>
        <th>User Last Name</th>
        <th>User Email</th>
        <th>User Age</th>
        <th>User Skype</th>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users">
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.age }}</td>
          <td>{{ user.skype }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import bus from '../bus'
export default {
  data () {
    return {
      users: []
    }
  },

  created () {
    bus.$on('user-added', users => {
      this.users = users
    })
  }
}
</script>

<style lang="scss" scoped>
  @import "./user-table.scss";
</style>
