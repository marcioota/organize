<template>
    <div class="dropdown-like-grp" >
        <div class="drop-btn verde-claro" >
            <label id="drop_canal_label">Loja A</label>
            <i class="bi bi-chevron-down"></i>
        </div>
        <div class="dropdown-body" id="drop_canais">
            <div class="dropdown-bico" id="bico-menu-1">
            </div>
            <div class="dropdown-conteudo" id="bico-content-1">
                <section id="chat-area-msgs-section" 
                 class="classe-dropdown" v-for="(rows, idn) in lista_canais" :key="idn"> 
                    <div v-on:click="select_this_value(rows.canal)"> {{ rows.canal }} </div>
                </section>
            </div>
        </div>
    </div>
</template>


<script>
import axios from "axios";


export default {
  name: 'dropdownCanais',
  components: {
    
  },
  data: function () {
    return {
      lista_canais:[]
    }
  },
    methods:{
        SH_show_hide_me: function(){
            var x=document.getElementsByClassName("dropdown-body")
            var i=0;
            ///Fecha demais dropdowns
            var dropdow=document.getElementById('drop_canais');
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
            document.getElementById('drop_canal_label').innerHTML=isso;
            this.SH_show_hide_me();
        },
        dropdown_load_canais: function(){
            var host=document.getElementById("host").value;
            var client_idn=document.getElementById("cliente_idn").value;
            
            axios({
                method: 'post',
                url: host+':6001/wapp/clientes_canais?ficliente='+client_idn,
                headers: {'Content-Type': 'multipart/form-data' }
            })
            .then((response) => {
                this.lista_canais = response.data.rows;
                document.getElementById('drop_canal_label').innerHTML=response.data.rows[0].canal;
            })
            .catch(function (error) {
                alert('erro com mensagens : '+error);
            });
        },
    },
    mounted() {
        setTimeout(() => {
            this.dropdown_load_canais();    
        }, 1000);
        
        
    }

}
</script>
<style lang="css" scoped>
#drop_canais{
    display: none;
}
.drop-btn{
    cursor: pointer;
}
</style>
