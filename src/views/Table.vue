<template>
  <div class="container-table">
    <table class="table">
      <thead>
        <tr class="table-head">
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id" class="table-row">
          <td>
            <div class="table-data">
              <img :src="user.avatar" alt="" class="profile-image">
              <p>{{ user.first_name }} {{ user.last_name }}</p>
            </div>
          </td>
          <td>{{ user.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'table',
  data() {
      return {
        users: []
      }
  },
  mounted() {
    this.created()
  },
  methods: {
    created() {
        axios.get('https://reqres.in/api/users?page=2')
        .then(result => {this.users = result.data.data})
        .catch((err) => {
          console.log(err);
        });
    }
  },
}
</script>
<style>
.container-table{
  margin: 100px;
}
  .table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: none;
}

.profile-image {
  width: 40px;
  margin-right: 8px;
}

.table-data {
  display: flex;
  align-items: center;
}

.table-head th, .table-row td{
  border-bottom: 1px solid #B0BAC9;
  padding: 8px 0;
}

.table-head th {
  text-align: left;
}

.status {
  border: 1px solid #dadada;
  padding: 4px 12px;
  border-radius: 4px;
  display: inline-block;
}

.status-active {
  border: 1px solid #7FC008;
  color: #7FC008;
}

.status-danger {
   border: 1px solid #DB303F;
   color: #DB303F;
}

.status-pending {
   border: 1px solid #DB8C28;
  color: #DB8C28;
}
</style>