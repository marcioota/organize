<template>
  <div id="app">
    <img alt="Vue logo" src="../assets/imgs/logo.png">
    <Test v-slot="{team}">
      <h2>Hello world! my team is {{team}}</h2>
    </Test>
    <div v-html="legacySystemHTML">
    </div>
    <h1>Clientes</h1>
            <section class="class-clientes" v-for="(nome, idn) in clientesx" :key="idn"> 
                <div class="contato-title" v-html="nomex"></div>
                <a :href="contato.idn"  target="_blank">{{ clientes.nome }}</a>

            </section>
            <div class="contato-title" v-html="cliente">aaaa</div>
    <h1>Clientes</h1>
        <div id="testex">Me mude
        </div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      // Just like JSX! Oh wait...
      legacySystemHTML: `
        
          <MARQUEE>Please enter your name to continue.</MARQUEE>
        
      `,
      cliente: 'merda',
      clientesx: []
    }
  },
  mounted() {
    axios({
        method: 'post',
        url: 'http://192.168.0.11:6001/arcadia/clientesFree'
    })
    .then(function(response) {
        var i=response.data.rows.length;
        var f;
        for(f=0;f<i;f++){
            document.getElementById('testex').insertAdjacentHTML('beforeend','<li>'+response.data.rows[f].nome);
        }
    })
  }
}
</script>


<style scoped>
main{
    align-items: center;
    padding: 20px;
}

.clientes{
    margin-bottom: 30px;
    color: #000;
}

.contact-title{
    font-weight: 800;
    font-size:18px;
}

.contact a{
    margin-bottom: 20px;
}
</style>
