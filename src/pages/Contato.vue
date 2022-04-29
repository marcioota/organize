<template>
    <main>
        <section class="container">
            <h1>Contato</h1>
            <section class="contacts" v-for="(contato, index) in contacts" :key="index"> 
                <div class="contato-title">{{ contato.title }}</div>
                <a :href="contato.link"  target="_blank">{{ contato.label }}</a>

            </section>
                <div class="row">
                    <div class="col-md-4">col1</div>
                    <div class="col-md-4">col2</div>
                    <div class="col-md-4">col3</div>
                </div>            
        </section>
    </main>
</template>

<script >
import api from '@/services/api.js';

export default {
    name: 'Contato',
    data(){
        return{
            contacts: []
        }
    },
    mounted(){
        api.get('/contacts.json').then(
            response => {
                this.contacts = response.data;
        });
        var el=document.getElementsByClassName("mini-menu-item-cell")
        var i=0;
        for(i=0;i<el.length;i++){
            el[i].classList.remove("active");
        }
        el[3].classList.add("active");    
        document.getElementById('btn-show-hide-main-menu').click();
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
