<template>
  <div class="container">
      <b-container fluid>
        <!-- User Interface controls -->
        <b-row>
          <b-col lg="6" class="my-1">
            <b-form-group
              label="Filter"
              label-cols-sm="2"
              label-size="sm"
              label-for="filterInput"
              class="mb-0"
              style="margin-left: 10px;"
            >
              <b-input-group size="sm">
                <b-form-input
                  v-model="filter"
                  type="search"
                  id="filterInput"
                  placeholder="Type to Search"
                ></b-form-input>
                <b-input-group-append>
                  <b-button :disabled="!filter" @click="filter = ''" style="background-color: #3CA59D; border-color: #3CA59D;">Clear</b-button>
                </b-input-group-append>
              </b-input-group>
            </b-form-group>
          </b-col>
          
          <b-col lg="3" md="0" class="my-1"></b-col>

          <b-col lg="3" class="my-1">
              <b-form-group
                label="Per page"
                label-cols-sm="6"
                label-cols-md="2"
                label-cols-lg="3"
                label-align-sm="left"
                label-size="sm"
                label-for="perPageSelect"
                class="mb-0"
              >
              <b-form-select
                v-model="perPage"
                id="perPageSelect"
                size="sm"
                :options="pageOptions"
              ></b-form-select>
            </b-form-group>
          </b-col>

        <!-- Main table element -->
        <div style="width:97%">
            <b-table
                show-empty
                small
                stacked="md"
                :items="users"
                :fields="fields"
                :current-page="currentPage"
                :per-page="perPage"
                :filter="filter"
                :filterIncludedFields="filterOn"
                :sort-by.sync="sortBy"
                :sort-desc.sync="sortDesc"
                :sort-direction="sortDirection"
                @filtered="onFiltered"
              >

                <template v-slot:cell(name)="row">
                  {{ row.value.first }} {{ row.value.last }}
                </template>

                <template v-slot:cell(actions)="row">
                  <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1">
                    Info modal
                  </b-button>
                  <b-button size="sm" @click="row.toggleDetails">
                    {{ row.detailsShowing ? 'Hide' : 'Show' }} Details
                  </b-button>
                </template>

                <template v-slot:row-details="row">
                  <b-card>
                    <ul>
                      <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
                    </ul>
                  </b-card>
                </template>
              </b-table>
        </div>
        </b-row>

        <b-row>
            <b-col>
                <div style="margin: 30px 0 0 0; display: flex; justify-content: space-between; align-items: center;">
                        <b-tfoot class="total-row">
                          <b-tr>
                            <b-td colspan="7" class="text-right">
                              Total Rows: <b>{{users.length}}</b>
                            </b-td>
                          </b-tr>
                        </b-tfoot>

                        <b-pagination
                          v-model="currentPage"
                          :total-rows="totalRows"
                          :per-page="perPage"
                          align="fill"
                          size="sm"
                          class="my-0"
                        ></b-pagination>
                </div>
            </b-col>
        </b-row>
        <!-- Info modal -->
        <b-modal :id="infoModal.id" :title="infoModal.title" ok-only @hide="resetInfoModal">
          <pre>{{ infoModal.content }}</pre>
        </b-modal>
      </b-container>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'table',
    data() {
      return {
        users: [],
        fields: [
          { key: 'first_name', label: 'First name', sortable: true, sortDirection: 'desc' },
          { key: 'last_name', label: 'Last name', sortable: true, sortDirection: 'desc' },
          { key: 'email', label: 'Email', sortable: true, sortDirection: 'desc'},
        ],
        totalRows: 1,
        currentPage: 1,
        perPage: 3,
        pageOptions: [3, 5, 10, 20],
        sortBy: '',
        sortDesc: false,
        sortDirection: 'asc',
        filter: null,
        filterOn: [],
        infoModal: {
          id: 'info-modal',
          title: '',
          content: ''
        }
      }
    },
    computed: {
      sortOptions() {
        // Create an options list from our fields
        return this.fields
          .filter(f => f.sortable)
          .map(f => {
            return { text: f.label, value: f.key }
          })
      }
    },
    mounted() {
      this.created()
    },
    methods: {
    created() {
        axios.get('https://reqres.in/api/users?page=2')
        .then(result => {this.users = result.data.data, 
          // Set the initial number of items
          this.totalRows = this.users.length;})
        .catch((err) => {
          console.log(err);
        });
      },
      info(item, index, button) {
        this.infoModal.title = `Row index: ${index}`
        this.infoModal.content = JSON.stringify(item, null, 2)
        this.$root.$emit('bv::show::modal', this.infoModal.id, button)
      },
      resetInfoModal() {
        this.infoModal.title = ''
        this.infoModal.content = ''
      },
      onFiltered(filteredItems) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRows = filteredItems.length
        this.currentPage = 1
      }
    }
  }
</script>
<style>
.container-fluid{
  margin-top: 50px;
}
.table{
  width: 97%;
  margin-left: 20px;
  margin-top: 1.5rem;
}
.mb-1, .my-1 {
margin-bottom: 1.25rem !important;
}
.pagination .page-item.active .page-link{
  background-color: #3CA59D;
  border-color: #3CA59D;
}
.table > thead > tr > th {
  padding: 10px;
}
.table-sm th, .table-sm td {
  padding: 0.7rem !important;
}
.total-row{
  margin-left: 10px;
}
</style>