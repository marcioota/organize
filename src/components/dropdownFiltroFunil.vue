<template>
    <div class="dropdown-like-grp" @click="SH_show_hide_me('drop_filtro_lista')" >
        <a href="#1" class="btn-small" id="filtro-chats"><img src="../assets/imgs/segmentacao.png"></a>
        <div class="dropdown-body"  id="drop_filtro_lista">
            <div class="dropdown-bico" id="bico-menu-2">
            </div>
            <div class="dropdown-conteudo" id="bico-content-2">
                <div id="area-filtro-funil">
                    <input type="text" id="filtro_funil" readonly>
                    <p class='clear-this' @click="clear_text('filtro_funil');select_this_value">X</p>
                </div>
                <h6><b>Etapa:</b></h6>
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
            var dropdow=document.getElementById('drop_filtro_lista');
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
        clear_text(isso){
            document.getElementById(isso).value="";
            self.$parent.wapp_load_contatos_lookup()
            document.getElementById('area-filtro-funil').style.display="none";
        },
        select_this_value: (isso) =>{
            
            document.getElementById('area-filtro-funil').style.display="flex";
            document.getElementById('filtro_funil').value=isso;
            var isativo=document.getElementsByClassName('esys-aba');
            var ativo="";
            if(isativo[0].className.toString().indexOf('active')>-1) ativo='ativo';
            
            self.$parent.wapp_load_contatos(ativo);
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
#bico-menu-2{
    left:25px;
}
#area-filtro-funil{
    display: none;
    align-content: space-around;
}
#filtro_funil{
    border: 1px solid white;
    color: #888;
    text-align: right;
    width:100px;
    margin-right: 10px;
}
.drop-btn{
    cursor: pointer;
}

</style>
