<template>
  <div class="genres">
    <h1>Genres in your Playlist</h1>
    
    <div class="list-wrapper" v-if="!isError">
      <table>
        <thead>
          <tr>
            <th v-on:click="sortTable(columns[1])">Name</th>
            <th class="id-column" v-on:click="sortTable(columns[0])">ID</th>
            <th class="action-column">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(genre, genreTableIndex) in genresList" :key="genre._id">
            <td>{{ genre.genre_name }}</td>
            <td>{{ genre.genre_id }}</td>
            <td>
              <button class="action-buttons">Edit</button>
              <button v-on:click="deleteGenre(genre.genre_id, genreTableIndex)" class="action-buttons">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <div class="error-block" v-else>
      <h2 class="error-view">Data Base Error</h2>
    </div>
    
  </div>
</template>

<script>
  import axios from 'axios';
  
  export default {
    name: 'genres',
    data() {
      return {
        genresList: [],
        ascendingOrder: true,
        isError: false
      };
    },
    mounted() {
      axios.get('http://localhost:4000/genres')
      .then((response) => {
        console.log(response.data);
        this.genresList = response.data;
      })
      .catch((err) => {
        console.log(err);
        this.isError = true;
      });
    },
    methods: {
      "sortTable": function sortTable(col) {
        let ascending = this.ascendingOrder;
        
        this.genresList.sort((a, b) => {

          if (a[col] < b[col]) 
            return ascending ? -1 : 1;
          if (a[col] > b[col]) 
            return ascending ? 1 : -1;
          return 0;
          
        })
        
        this.ascendingOrder = !ascending;
      },
      "deleteGenre": async function deleteGenre(genreId, row) {
          try {
            const response = await axios.delete('http://localhost:4000/genres/' + genreId);
            console.log(response);
            this.genresList.splice(row, 1);
          } catch (error) {
            console.log(error);
          }
      }
    },
    computed: {
      "columns": function columns() {
        return Object.keys(this.genresList[0]);
      }
    }
  }
</script>

<style>

  .list-wrapper {
    width: 70%;
    margin: 10px auto;
    overflow-x: auto;
  }
  
  table {
    width: 400px;
    border: 3px solid #44475C;
    border-collapse: collapse;
    margin: 10px auto;
  }
  
  .id-column {
    width: 20%;
  }
  
  .action-column {
    width: 25%;
  }
  
  table th {
    padding: 8px;
    background-color: #44475C;
    color: white;
    cursor: pointer;
  }
  
  table th:hover {
    background-color: #4c7d8b;
  }
  
  td {
    padding: 8px 0px;
    background-color: #42b983;
    border-right: 2px solid #44475C;
  }
  
  tr:nth-child(2n) td {
    background-color: white;
  }
  
  tr:hover td {
    color: white;
    background-color: #4c7d8b;
  }
  
  .action-buttons {
    cursor: pointer;
  }
  
</style>