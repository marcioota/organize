<template>
    <footer>
        <a class="socialLink" v-for="(sLink,index) in socialLinks" 
        :key="index" :href="sLink.link" target="_blank">
            <img :alt="sLink.label" :title="sLink.label" :src="sLink.icon">
        </a>
    </footer>
</template>

<script>
import api from "@/services/api.js";

export default {
    name: 'Footer',
    data(){
        return {
            socialLinks: []
        }
    },
    mounted(){
        api.get('/social-links.json').then(
            response => {
                console.log(response.data);
                this.socialLinks  = response.data;
        });
    }
}
</script>

<style scoped>
footer{
    height: 10px;
    width: 100%;
    background-color: var(--color-background);
    display: flex;
    justify-content: center;
    align-items: center;
}

.socialLink {
    border: 2px solid var(--color-background-nav);
    color: var(--color-background-nav);
    display:flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin: 10px;
}


.socialLink img{
    width:20px;
}
</style>