<template>
    <div class="popover-area" id="pop-over-perfil-usuario-midias">
        <div  class="popover-header-tall">
            <a href="#4" id=""  @click="POP_Hide_usuario_midias()"><i class="bi bi-chevron-left"></i></a>
            <br>
            <div id="menu-usuario-midia">
                <a href="#2" id="select-item-midias" @click="select_this_item(1)" class="active">Mídias</a>
                <a href="#2" id="select-item-docs" @click="select_this_item(2)" >Documentos</a>
                <a href="#2" id="select-item-links" @click="select_this_item(3)" >Links</a>
            </div>
        </div>
        <div id="user-perfil-area">
            <div id="user-anexos-midias"></div>
            <div id="user-anexos-docs"></div>
            <div id="user-anexos-links"></div>
        </div>
    </div>
</template>


<script>
import axios from "axios";
var self;

export default {
  name: 'usuarioPerfilMidias',
  components: {
    
  },
  data: function () {
    return {
      perfil_midias:[]
    }
  },
    methods:{
        select_this_item(ev){
            var midias = document.getElementById('select-item-midias')
            var docs = document.getElementById('select-item-docs')
            var links = document.getElementById('select-item-links')
            var area_midias=document.getElementById('user-anexos-midias')
            var area_docs=document.getElementById('user-anexos-docs')
            var area_links=document.getElementById('user-anexos-links')

            midias.classList.remove('active');
            docs.classList.remove('active');
            links.classList.remove('active');

            area_midias.style.display='none';
            area_docs.style.display='none';
            area_links.style.display='none';
            switch(ev){
            case 1:
                midias.className='active';
                area_midias.style.display='block';
                this.load_contato_perfil_midias();
                break;
            case 2:
                docs.className='active';
                area_docs.style.display='flex';
                this.load_contato_perfil_docs();
                break;
            case 3:
                links.className='active';
                area_links.style.display='block';
                this.load_contato_perfil_links();
                break;
            }

        },
        POP_Hide_usuario_midias(){
            document.getElementById("pop-over-perfil-usuario-midias").style.display="none";
            self.$parent.POP_usuario_perfil();
        },
        load_contato_perfil_midias(){
            var contato_idn=document.getElementById("contato_idn").value;
            var host=document.getElementById("host").value;
            document.getElementById('user-anexos-midias').innerHTML="";

            axios({
                method: 'post',
                url: host+':6001/wapp_dir_files?diretorio=users/'+contato_idn+'/midias/',
                headers: {'Content-Type': 'multipart/form-data' }
            })
            .then((response) => {
                
                if(response.data.success!=false) {
                    if(response.data.files!=""){
                        var url_link= host+'/organize_arquivos/users/'+contato_idn+'/midias/';
                        var url_img="<img class='user-img-midias' style='margin:5px' src='"+url_link;
                        var arqs=response.data.files;
                        var arquivos="";
                        var arq;

                        for(arq in arqs){
                            arquivos+=url_img+arqs[arq]+"'>";
                        }
                        document.getElementById('user-anexos-midias').innerHTML=arquivos;
                    }
                }
            })
            .catch(function (error) {
                alert('erro com mensagens : '+error);
            });
        },
        load_contato_perfil_docs(){
            var contato_idn=document.getElementById("contato_idn").value;
            var host=document.getElementById("host").value;
            document.getElementById('user-anexos-docs').innerHTML="";
            
            axios({
                method: 'post',
                url: host+':6001/wapp_dir_files_stat?diretorio=users/'+contato_idn+'/docs/',
                headers: {'Content-Type': 'multipart/form-data' }
            })
            .then((response) => {
                if(response.data.success!=false) {
                    if(response.data.files!=""){
                        var url_link= host+'/organize_arquivos/users/'+contato_idn+'/docs/';
                        var url_img="<div class='file-grupo'><a class='user-img-docs' target='_blank' style='margin:5px' href='"+url_link;
                        var arqs=response.data.files;
                        var arquivos="";
                        var arq;

                        for(arq in arqs){
                            var fname=arqs[arq][0];
                            var fsize=arqs[arq][1];
                            var fdate=arqs[arq][2];
                            var fext = fname.toString().split('.').pop();
                            

                            arquivos+=url_img+fname+"'><i class='bi bi-file-earmark-fill'></i> <div class='file-part-name'>'"+fname;
                            arquivos+="</div></a><div class='file-stat-info'><span>"+fext.toUpperCase()+" "+fsize+"K</span> "+fdate+" </div></div>";
                        }
                        document.getElementById('user-anexos-docs').innerHTML=arquivos;
                    }
                }
            })
            .catch(function (error) {
                alert('erro com mensagens : '+error);
            });
        },
        load_contato_perfil_links(){
            var contato_idn=document.getElementById("contato_idn").value;
            var host=document.getElementById("host").value;
            document.getElementById('user-anexos-links').innerHTML="";
            
            axios({
                method: 'post',
                url: host+':6001/wapp/contatos?contato_idn='+contato_idn,
                headers: {'Content-Type': 'multipart/form-data' }
            })
            .then((response) => {
               this.contatos_lista = response.data.rows;
                setTimeout(() => {
                    var res=response.data.rows[0];
                    if(res.length!=""){
                        var xlinks=res.links.split('^^^');
                        var link_base="<div class='user-link-grupo'><a target='_blank' href='";
                        var linka="";
                        var lin;
                        for(lin in xlinks){
                            linka+=link_base+xlinks[lin]+"'>"+xlinks[lin]+"</a></div>";
                        }
                        document.getElementById('user-anexos-links').innerHTML=linka;
                        document.getElementById('user-anexos-links').style.display='block';
                    }
                }, 500);
                

            })
            .catch(function (error) {
                alert(error);
            });
        },
    },
    mounted() {
        self=this;
    }

}
</script>
<style lang="css" scoped>
#pop-over-perfil-usuario-midias{
    position:fixed;
    top:60px;
    border:1px solid #333;
    width:361px;
    height: calc(100vh - 60px);
    left:calc(100vw - 362px);
    background-color: white;
    box-shadow: 3px 7px 10px rgba(3, 3, 3, 0.3);
    display: none;
    flex-direction: column !important;
}
#menu-usuario-midia{
    padding: 10px;
    width:100%;
    display: flex;
    color:white;
    justify-content: space-between;    
}
#menu-usuario-midia a{
    color:white;
}
#user-anexos-docs  {
    display:none;
    flex-direction: column;
    color: black;
}
a:hover{
    text-decoration:none;
}

#user-anexos-links  {
    display:block;
    margin-left: 10px;
    color: black;
    top:10px;
}
.active{
    border-bottom: 3px solid white;
}
</style>
