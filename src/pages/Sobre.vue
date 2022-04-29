<template>
    <main>
        <section class="container">
            <h1>Sobre</h1>

            <section class="about" v-html="about"  > 
            </section>

        </section>
    </main>
</template>

<script >
import api from '@/services/api.js';

export default {
    name: 'Sobre',
    data(){
        return{
            about: ''
        }
    },
    mounted(){
        api.get('/about.json').then(
            response => {
                this.about = response.data.about;
        });
        var el=document.getElementsByClassName("mini-menu-item-cell")
        var i=0;
        for(i=0;i<el.length;i++){
            el[i].classList.remove("active");
        }
        el[2].classList.add("active");    
        document.getElementById('btn-show-hide-main-menu').click();
        }
}
</script>

<style scoped>
main{
    align-items: center;
    padding: 20px;
}

.about{
    margin-bottom: 30px;
    color: var (--color-text-dark);
}

</style>
