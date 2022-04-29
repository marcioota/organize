<template>
  <div>
      <h1>CRM</h1>
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
        const axios = require("axios");
        const Promise = require("bluebird");
        const getJson = require("axios-get-json-response");

export default {
  data() {
    return {
      todosList: []
    };
  },
  mounted() {

        Promise.try(() => {
            return axios.post("http://192.168.0.11:6001/arcadia/clientesFree", getJson.axiosConfiguration); // {"hello": "world"}
        }).then((response) => {
            alert('parsedJson')
            let parsedJson = getJson.parse(response);
            console.log(parsedJson); // { hello: 'world' }
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