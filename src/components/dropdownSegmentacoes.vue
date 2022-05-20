<template>
    <div class="dropdown-like-grp">
        <div class="drop-btn roxo-claro"  @click="SH_show_hide_me('drop_segmentacao')" >
            <label id="drop_segmentacao_label">Segmentações</label>
            <i class="bi bi-chevron-down"></i>
        </div>
        <div class="dropdown-body" id="drop_segmentacao">
            <div class="dropdown-bico" id="bico-menu-1">
            </div>
            <div class="dropdown-conteudo" id="bico-content-1">
                <p class="search-box-mini">
                    <i class="bi bi-search"></i>
                    <input type="text" id="lookup_segmentacao" class="" placeholder="Pesquisar grupo" @keyup="dropdown_load_segmentacoes_lookup">
                </p>
                <section id="chat-area-msgs-section" 
                 class="classe-dropdown" v-for="(rows, idn) in lista_segmentacoes" :key="idn"> 
                    <p><input class="segm-checkbox" type="checkbox" v-bind:id="'segm_'+rows.cod_seg" v-on:click="set_this_segment(rows.cod_seg)"> 
                        <span v-html="rows.descrip_seg" ></span>
                    </p>
                    <hr>
                </section>
            </div>
        </div>
    </div>

</template>


<script>
import axios from "axios";
var self;

export default {
  name: 'dropdownFunis',
  components: {
    
  },
  data: function () {
    return {
      lista_segmentacoes:[]
    }
  },
    methods:{
        SH_show_hide_me: function(){
            var x=document.getElementsByClassName("dropdown-body")
            var i=0;
            ///Fecha demais dropdowns
            var dropdow=document.getElementById('drop_segmentacao');
            var mydisplay=dropdow.style.display;
            for (i=0; i< x.length; i++){
                x[i].style.display='none';
            }
            if(mydisplay=="none"){
                dropdow.style.display="flex";
            }else{
                dropdow.style.display="none";
            }
            
        },
        set_this_segment: () =>{
            var segm=document.getElementsByClassName('segm-checkbox');
            var host=document.getElementById("host").value;
            var contato_idn=document.getElementById("contato_idn").value;

            var i;
            var acum="";
            for (i=0;i<segm.length;i++){
                if(segm[i].checked==true){
                    var segnome=segm[i].getAttribute('id');
                    segnome=segnome.replace('segm_','')
                    if(acum.indexOf(segnome)==-1 && segnome.indexOf('v_')==-1 ) acum+="|"+ segnome;
                }

            }
            acum=acum.substr(1,acum.length);
            axios({
                method: 'post',
                url: host+':6001/wapp/contatos?crud=upd&idn='+contato_idn+"&camponome=segmentacoes&campovalor="+acum,
                headers: {'Content-Type': 'multipart/form-data' }
            })
            .then (function () {
                var contatos=self.$parent.contatos_lista;
                var i;
                for(i=0;i<contatos.length;i++){
                    if(contatos[i].idn==contato_idn) contatos[i].segmentacoes=acum;
                }
            })
            .catch(function (error) {
                alert('erro com mensagens : '+error);
            });
            
        },
        dropdown_load_segmentacoes: function(){
            var host=document.getElementById("host").value;
            var client_idn=document.getElementById("cliente_idn").value;
            
            axios({
                method: 'post',
                url: host+':6001/wapp/clientes_segmentacoes?ficliente='+client_idn,
                headers: {'Content-Type': 'multipart/form-data' }
            })
            .then((response) => {
                this.lista_segmentacoes = response.data.rows;
            })
            .catch(function (error) {
                alert('erro com mensagens : '+error);
            });
        },
        dropdown_load_segmentacoes_lookup: function(){
            var host=document.getElementById("host").value;
            var client_idn=document.getElementById("cliente_idn").value;
            var lookup=document.getElementById("lookup_segmentacao").value;

            axios({
                method: 'post',
                url: host+':6001/wapp/clientes_segmentacoes?ficliente='+client_idn+"&lookup="+lookup,
                headers: {'Content-Type': 'multipart/form-data' }
            })
            .then((response) => {
                this.lista_segmentacoes = response.data.rows;
            })
            .catch(function (error) {
                alert('erro com mensagens : '+error);
            });
        },
    },
    mounted() {
        setTimeout(() => {
            this.dropdown_load_segmentacoes();    
        }, 1000);
        self=this;
        
        
    }

}
</script>
<style lang="css" scoped>
#drop_segmentacao{
    display: none;
}
.segm-checkbox span b{
    color:red;
}
.drop-btn{
    cursor: pointer;
}
</style>
