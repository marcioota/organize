<template>
    <main>
        <section class="container">
            <h1>CRM</h1>
            <section class="classe-contatos" v-for="(rows, idn) in rows" :key="idn"> 
                <div class="contato-title">{{ rows.idn }}</div>
                <div class="contato-title">{{ rows.nome }}</div>
                <div class="contato-title">{{ rows.img }}</div>

            </section>
        </section>
    </main>
</template>

<script >
import axios from "axios";
//import api from '@/services/api.js';

var $user_idn=44;

export default {
    data(){
        return{
            rows: []
        }
    },
    async mounted(){
            axios({
                method: 'post',
                url: 'http://192.168.0.11:6001/wapp/contatos?idn='+$user_idn+'&fiativo=',
                headers: {'Content-Type': 'multipart/form-data' }
            })
            .then((response) => {
               this.rows = response.data.rows;
            });

/*
        api.get('/contacts.json').then(
            response => {
                this.contatos = response.data;
        });


*/
    }
}
</script>

<style scoped>
main{
    align-items: center;
    padding: 20px;
}

.classe-contatos{
    margin-bottom: 30px;
    color: var (--color-text-dark);
}

.contact-title{
    font-weight: 800;
    font-size:18px;
}

.contact a{
    margin-bottom: 20px;
}
</style>
