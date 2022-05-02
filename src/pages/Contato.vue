<template>
    <main>
        <section class="container">
            <h1>Contato</h1>
            <section class="contacts" v-for="(contato, idn) in contatos" :key="idn"> 
                <div class="contato-title">{{ contato.title }}</div>
                <div class="contato-title">{{ contato.label }}</div>
                <div class="contato-title">{{ contato.link }}</div>
                <a :href="contato.link"  target="_blank">{{ contato.label }}</a>

            </section>
        </section>
    </main>
</template>

<script >
import api from '@/services/api.js';

export default {
    name: 'Contraaaaato',
    data(){
        return{
            contatos: []
        }
    },
    mounted(){
        api.get('/contacts.json').then(
            response => {
                this.contatos = response.data;
        });
        }
}
</script>

<style scoped>
main{
    align-items: center;
    padding: 20px;
}

.contacts{
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
