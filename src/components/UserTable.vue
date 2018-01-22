<template>
  <div v-if="users.length">
    <h1>{{ title }}</h1>
    <table class="table">
      <thead>
        <th>User First Name</th>
        <th>User Last Name</th>
        <th>User Email</th>
        <th>User Age</th>
        <th>User Skype</th>
        <th>User Hobbies</th>
        <th>User Telephones</th>
        <th>User Nickname</th>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users">
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.age }}</td>
          <td>{{ user.skype }}</td>
          <td>{{ user.hobbies }}</td>
          <td>{{ user.telephones }}</td>
          <td>{{ user.nickname }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    props: ['users'],
    data () {
      return {
        title: 'Users Table'
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "./user-table.scss";
</style>
