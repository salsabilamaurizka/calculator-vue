<template>
  <div class="container-table">
    <table class="table">
      <thead>
        <tr class="table-head">
          <th @click="name">Name</th>
          <th @click="email">Email</th>
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
    },
    name() {
      this.users.sort(function(a, b) {
        var nameA = a.first_name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.first_name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        // names must be equal
        return 0;
      });
    },
    email() {
      this.users.sort(function(a, b) {
        var emailA = a.email.toUpperCase(); // ignore upper and lowercase
        var emailB = b.email.toUpperCase(); // ignore upper and lowercase
        if (emailA < emailB) {
          return -1;
        }
        if (emailA > emailB) {
          return 1;
        
      }

  // emails must be equal
  return 0;
});
    },
  },
}
</script>
<style>
.container-table{
  margin-left: 100px;
  margin-right: 100px;
  margin-top: 30px;
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