<template>

  <div>
    <h1>Marketing</h1>
    <ul 
      class="test-list" 
      v-for="todo in todosList" 
      :key="todo.id"
    >
    <h1>sasaas</h1>
      <li class="test-list--item">
        {{ todo.id }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      todosList: []
    };
  },
  mounted() {
  console.log()
  axios({
  method: 'post',
  url: 'http://192.168.0.11:6001/arcadia/clientesFree'
})
  .then(function(response) {
    alert(response.data.rows[1].nome)

});

  }
};


</script>

<style>
.test-list {
  font-family: Roboto;
  list-style: none;
  margin: 20px auto;
  width: 50%;
}

.test-list--item {
  border: 1px solid rgb(41, 41, 41);
  border-radius: 5px;
  text-align: center;
  display: block;
  box-shadow: 2px 2px rgba(138, 124, 124, 0.4);
}

.test-list--id {
  font-weight: 300;
  margin: 10px auto;
}

.test-list--title {
  font-weight: 500;
  margin: 20px auto;
  text-transform: capitalize;
}

.test-list--complete {
  font-weight: 600;
  margin: 10px auto;
  color: #56ca86;
}

.test-list--incomplete {
  font-weight: 600;
  margin: 10px auto;
  color: #ca5656;
}
</style>