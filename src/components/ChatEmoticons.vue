<template>

    <div id="chat-area-emoticons">
        <div id="close-emoticon" v-on:click="wapp_hide_emoticon()">X</div>
        <div id="area-emoticon">
            <section v-for="(emoticonrow) in lista_emoticones" :key="emoticonrow"> 
                <span v-on:click="write_emoticon(emoticonrow.img)" >{{emoticonrow.img}}</span>
            </section>
        </div>
    </div>

    
</template>

<script>
import axios from "axios";
var $host="http://localhost"; ///<< config p desktop
if(window.location.href.toString().indexOf('localhost')==-1)
    $host="http://191.252.64.112"; ///<< config p NOVO SERVER
///var $host="http://191.252.64.112"; ///<< config p NOVO SERVER

export default {
    data(){
        return{
            lista_emoticones: []
        }
    },

    methods:{
        wapp_load_emoticons:function(){
            axios({
                method: 'post',
                url: $host+':6001/wapp/varios?crud=emoticons&idn=emoticons',
                headers: {'Content-Type': 'multipart/form-data' }
            })
            .then((response) => {
               this.lista_emoticones = response.data.rows[0];
            })
            .catch(function (error) {
                alert("Erro no emoticon: "+error);
            });

        },

        write_emoticon:function(isso){
            var msg= document.getElementById('msg_to_send');
            var positionStart = msg.selectionStart;
            var positionEnd = msg.selectionEnd;
            var texto = msg.value;
            var newmsg=texto.substr(0, positionStart)+isso+texto.substr(positionEnd, texto.length);
            msg.value=newmsg;
            msg.selectionStart=positionStart+2;
            msg.selectionEnd=positionStart+2;
            msg.focus();

        },
        
        wapp_hide_emoticon:function(){

            var area_emoticon=document.getElementById('chat-area-emoticons');
            var ico_dropzone= document.getElementById('msg_ico_dropzone')
            var ico_foguete= document.getElementById('msg_ico_foguete')

            ico_dropzone.style.display='block';
            ico_foguete.style.display='block';
            if(area_emoticon.style.display=="none" || area_emoticon.style.display==""){
                area_emoticon.style.opacity=0;
                area_emoticon.style.top="calc(100vh - 0px);";
                area_emoticon.style.height="0";
                area_emoticon.style.display="flex";
                setTimeout(() => {
                    area_emoticon.style.opacity=1;
                    area_emoticon.style.height="150px";
                    area_emoticon.style.top="calc(100vh - 330px);";
                }, 300);
            }else{
                area_emoticon.style.top="calc(100vh - 330px);";
                setTimeout(() => {
                    ///area_emoticon.style.top="calc(100vh - 0px)";
                    area_emoticon.style.height="0";
                    area_emoticon.style.opacity=0;
                }, 200);
                setTimeout(() => {
                    area_emoticon.style.display="none";
                }, 1400);

            }
        }
    },
    async mounted() {
        setTimeout(() => {
            this.wapp_load_emoticons();
        }, 300);
    }
}

</script>

<style lang="css" scoped>
#chat-area-emoticons{
    display: none;
    background: var(--color-roxo-claro);
    padding: 15px 15px 15px 15px;
    border: 1px solid var(--color-roxo);
    height: 150px;
    position: absolute;
    left:0px;
    width: calc(100vw - 335px);
    top: calc(100vh - 330px);
    flex-direction: column;
    overflow: hidden;
    transition: top .4s ease 0s, height .3s linear , opacity .3s linear ;
    z-index: 0;

}
.emoticon{
    font-size:20pt;
}
#area-emoticon{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    height: 100px;
    overflow: auto;
}
#close-emoticon{
    width: 100%;
    position: relative;
    top:-10px;
    text-align: end;
    color: #888;
    padding-right: 20px;
    cursor: pointer;
}

#chat-area-emoticons span{
    cursor: pointer;
    margin:3px;
    font-size: 16pt;
}

</style>