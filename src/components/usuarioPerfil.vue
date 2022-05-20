<template>
    <div class="popover-area" id="pop-over-perfil-usuario">
        <div  class="popover-header">
            <h5 class="popover-title">Perfil</h5>
            <a href="#4" id=""  @click="POP_change_places_showHide_popover(0)"><i class="bi bi-x-circle"></i></a>
        </div>
        <div id="user-perfil-area">
                <section id="user-perfil" 
                 class="classe-dropdown" v-for="(rows, idn) in perfil_usuario" :key="idn"> 

                    <img v-bind:src="rows.img" id="user-profile-img">

                    <a id="btn-edit-perfil-user" href="#1" @click="load_dados_usuario"><img src="../assets/imgs/iconeeditarcontato.png"></a>

                    <div id="user-perfil-nome" v-on:click="select_this_value(rows.idn)"> {{ rows.nome }} </div>

                    <a id="btn-block-perfil-user" href="#1"><img src="../assets/imgs/iconebloquear.png"> Bloquear usuário</a>
                    
                </section>
        </div>
        <div id="midias-links-docs-area">
            <a href="#1" id="link-to-midias-links-docs" @click="open_midias_links_docs">Mídia, Links e Docs</a>
            <div id="midias-links-docs-area-scroll"></div>
        </div>
        <div id="segmentacoes-area">
            <a href="#1" id="link-to-segmentacoes">Segmentações</a>
            <div id="segmentacoes-area-scroll"></div>
        </div>
    </div>

</template>


<script>
import axios from "axios";
//import PerfilMidias from '../components/usuarioPerfilMidias';

var self;
export default {
    name: 'usuarioPerfil',
  data: function () {
    return {
      perfil_usuario:[],
      perfil_midias: []
    }
  },
    components: {
//        PerfilMidias
    },
    methods:{
        open_midias_links_docs(){
            self.$parent.POP_usuario_perfil_midias();
        },
        load_dados_usuario(){
            self.$parent.POP_usuario_dados();
        },
        load_contato_perfil(){
            var contato_idn=document.getElementById("contato_idn").value;
            var host=document.getElementById("host").value;
            document.getElementById('user-anexos-midias').innerHTML="";
            document.getElementById('user-anexos-docs').innerHTML="";
            
            axios({
                method: 'post',
                url: host+':6001/wapp/contatos?contato_idn='+contato_idn,
                headers: {'Content-Type': 'multipart/form-data' }
            })
            .then((response) => {
               this.perfil_usuario = response.data.rows;
               document.getElementById('midias-links-docs-area-scroll').innerHTML="";
               var segs="";
               var segx=response.data.rows[0].segmentacoes.split('|');
               if(segx.length>0){
                   var sega;
                   for(sega in segx){
                        segs+="<span class='user-segmentos' id='seg_"+segx[sega]+"'>"+segx[sega]+"</span>";
                   }
                   document.getElementById('segmentacoes-area-scroll').innerHTML=segs;
               }
               setTimeout(() => {
                    axios({
                        method: 'post',
                        url: host+':6001/wapp_dir_files?diretorio=users/'+contato_idn+'/midias/',
                        headers: {'Content-Type': 'multipart/form-data' }
                    })
                    .then((response) => {
                        
                        if(response.data.success!=false) {
                            if(response.data.files!=""){
                                var url_link= host+'/organize_arquivos/users/'+contato_idn+'/midias/';
                                var url_img="<img class='user-img' style='margin:5px' src='"+url_link;
                                var arqs=response.data.files;
                                var arquivos="";
                                var arq;

                                for(arq in arqs){
                                    arquivos+=url_img+arqs[arq]+"'>";
                                }
                                document.getElementById('midias-links-docs-area-scroll').innerHTML=arquivos;
                            }
                        }
                    })
                    .catch(function (error) {
                        alert('Erro ao carregar midias : '+host+':6001/wapp_dir_files?diretorio=users/'+contato_idn+'/midias/');
                        console.log(error)
                    });
               }, 100);
               
            })
            .catch(function (error) {
                alert('Erro ao carregar perfil do usuario : '+error);
            });
        },
        POP_change_places_showHide_popover(show){
            self.$parent.POP_change_places_showHide_popover(show);

        }
    },
    mounted() {
        setTimeout(() => {
            this.dropdown_load_funis();    
        }, 1000);
        self=this;
    }

}
</script>
<style lang="css" scoped>
#pop-over-perfil-usuario{
    background: var(--color-background);
}
#user-profile-img{
    border-radius: 50%;
    width:120px;
}
#user-perfil-area{
    padding: 10px;
    padding-bottom: 40px;
    display: flex;
    flex-direction: column;
    text-align: center;
    background: white;
    margin-left: 3px;
    margin-bottom:10px;
}
#btn-edit-perfil-user img{
    position: relative;
    border-radius: 50%;
    top:40px;
    left:-25px;
    padding: 6px;
    background: var(--color-roxo);
}

#btn-edit-perfil-user img{
    border-radius: 50%;
    width:35px;

}

#btn-block-perfil-user{
    position:relative;
    top: -20px;
    left: -20px;
    color:red;
    white-space: nowrap;
    font-size: 8pt;
    background: white;
    border: 1px solid #eee;
    border-radius: 20px;
    padding: 9px 15px 10px 8px;
    box-shadow: 5px 5px 10px rgba(3, 3, 3, 0.5);
}

a:hover{
    text-decoration: none;
}

#btn-block-perfil-user img{
    border-radius: 50%;
    width:30px;

}
#user-perfil-nome{
    position: relative;
    top: 45px;
    text-align: left;
    font-weight: 600;
    color: var(--color-roxo);
}

#midias-links-docs-area, #segmentacoes-area{
    background: white;
    padding: 5px;
    text-align: left;
    margin-left: 3px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 20px;
     
}
#segmentacoes-area-scroll{
    margin-top:10px
}
#midias-links-docs-area-scroll {
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    height: 120px;

}

.user-img{
    height: 10px;
    margin-left: 5px;
}

#link-to-midias-links-docs, #link-to-segmentacoes{
    font-weight: 600;
    color: var(--color-roxo);
    text-align: left;
    font-size: 11pt;
    margin-top:30px;
}

.drop-btn{
    cursor: pointer;
}

</style>
