<template>
    <div class="dropdown-like-grp" @click="SH_show_hide_me('drop_funil')" >
        <div class="drop-btn creme" >
            <label id="drop_funil_label">Prospecção</label>
            <i class="bi bi-chevron-down"></i>
        </div>
        <div class="dropdown-body" id="drop_funil">
            <div class="dropdown-bico" id="bico-menu-1">
            </div>
            <div class="dropdown-conteudo" id="bico-content-1">
                <section id="chat-area-msgs-section" 
                 class="classe-dropdown" v-for="(rows, idn) in lista_funis" :key="idn"> 
                    <div v-on:click="select_this_value(rows.funil)"> {{ rows.funil }} </div>
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
      lista_funis:[]
    }
  },
    methods:{
        SH_show_hide_me: function(){
            var x=document.getElementsByClassName("dropdown-body")
            var i=0;
            ///Fecha demais dropdowns
            var dropdow=document.getElementById('drop_funil');
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
        select_this_value: (isso) =>{
            document.getElementById('drop_funil_label').innerHTML=isso;
            document.getElementById('drop_funil_mini_label').innerHTML=isso;
            var host=document.getElementById("host").value;
            var contato_idn=document.getElementById("contato_idn").value;
            axios({
                method: 'post',
                url: host+':6001/wapp/contatos?crud=upd&idn='+contato_idn+"&camponome=funil&campovalor="+isso,
                headers: {'Content-Type': 'multipart/form-data' }
            })
            .then (function () {
                var contatos=self.$parent.contatos_lista;
                var i;
                for(i=0;i<contatos.length;i++){
                    if(contatos[i].idn==contato_idn) contatos[i].funil=isso;
                }
            })
            .catch(function (error) {
                alert('erro com mensagens : '+error);
            });


        },
        dropdown_load_funis: function(){
            var host=document.getElementById("host").value;
            var client_idn=document.getElementById("cliente_idn").value;
           
            axios({
                method: 'post',
                url: host+':6001/wapp/clientes_funis?ficliente='+client_idn,
                headers: {'Content-Type': 'multipart/form-data' }
            })
            .then((response) => {
                this.lista_funis = response.data.rows;
                ///document.getElementById('drop_funil_label').innerHTML=response.data.rows[0].funil;
            })
            .catch(function (error) {
                alert('erro com mensagens : '+error);
            });
        },
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
#drop_funil{
    display: none;
}
.drop-btn{
    cursor: pointer;
}
</style>
