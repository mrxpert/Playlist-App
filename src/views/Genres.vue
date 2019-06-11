<template>
  <div class="genres">
    <h1>Genres in your Playlist</h1>
    
    <div class="list-wrapper" v-if="!isError">
      <md-table>
        <md-table-header>
          <md-table-row>
            <md-table-head md-numeric>#</md-table-head>
            <md-table-head md-numeric>Name</md-table-head>
            <md-table-head md-numeric>id</md-table-head>
            <md-table-head md-numeric>Actions</md-table-head>
          </md-table-row>
        </md-table-header>
        <md-table-body>
          <md-table-row v-for="(genre, count) in genresList" :key="genre._id">
            <md-table-cell md-numeric>{{ count+1 }}</md-table-cell>
            <md-table-cell md-numeric>{{ genre.genre_name }}</md-table-cell>
            <md-table-cell md-numeric>{{ genre.genre_id}}</md-table-cell>
            <md-table-cell class="action-buttons">
              <md-button class="md-raised md-primary">Edit</md-button>
              <md-button class="md-raised md-accent">Delete</md-button>
            </md-table-cell>
          </md-table-row>
        </md-table-body>
      </md-table>
    </div>
    
    <div class="error-block" v-else>
      <md-card class="md-varn">
        <md-card-content>
          <h2 class="error-view">Data Base Error</h2>
        </md-card-content>
      </md-card>
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
    }
  }
</script>

<style>

  .list-wrapper {
    width: 70%;
    max-height: 70vh;
    background-color: #42b983;
    margin: 10px auto;
  }
  
  .md-table-head-container {
    text-align: center;
  }
  
  .md-table-cell.action-buttons {
    display: flex;
    justify-content: center;
  }
  
  /* Table buttons styles */
  .md-button.md-raised.md-primary {
    width: inherit;
  }
  
  .md-button.md-raised.md-accent {
    width: inherit;
  }
  
</style>