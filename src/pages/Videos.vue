<template>
    <main>
        <section class="container">
            <h1>Videos</h1>

            <section class="videos"  >
                <div class="video" v-for="(video, index) in videos" :key="index" >
                    <a :href="video.link" target="_blank">
                        <img :src="video.thumb" :alt="video.title" >
                        <div class="video-title">{{ video.title }} </div>
                    </a>
                </div>
            </section>

        </section>
    </main>
</template>

<script >
import api from '@/services/api.js';

export default {
    name: 'Videos',
    data(){
        return{
            videos: []
        }
    },
    mounted(){
        api.get('/videos.json').then(
            response => {
                this.videos = response.data;
        });
        var el=document.getElementsByClassName("mini-menu-item-cell")
        var i=0;
        for(i=0;i<el.length;i++){
            el[i].classList.remove("active");
        }
        el[0].classList.add("active");
        document.getElementById('btn-show-hide-main-menu').click();
    }
}
</script>

<style scoped>
main{
    align-items: center;
    min-height: calc(100vh-120px);
    display: flex;
    flex-direction: column;
}
.videos{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.video{
    width: 80% ;
    margin-bottom: 20px;
}
.video img{
    width: 100%;
}

.video a{
    color: var(--color-text-dark);
    text-align: center;
}

@media(min-width: 700px){
    .videos{
        flex-direction: row;
        align-items: flex-start;
        flex-wrap: wrap;
    }   
    .video{
        margin-right: 30px;
        width: 300px;
    }
}
</style>
