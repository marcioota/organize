<template>
    <div class="popover-area" id="pop-over-dados-usuario">
        <div  class="popover-header">
            <h5 class="popover-title">Dados do Usuário</h5>
            <a href="#4" id=""  @click="POP_change_places_showHide_popover(0)"><i class="bi bi-x-circle"></i></a>
        </div>
        <div id="user-botoes-area">
            <button class="botao-dados-pessoais active" @click="select_this_menu_item(1)" id="btn-main-user">
                Dados pessoais
            </button>
            <button class="botao-localizacao" @click="select_this_menu_item(2)">
                Localização
            </button>
            <button class="botao-notas" @click="select_this_menu_item(3)">
                Notas
            </button>
        </div>
        <div id="user-dados-area">
            <section id="user-dados" v-for="(rows, idn) in dados_usuario" :key="idn"> 
                <div id="dados-pessoais">
                    <label>Nome</label>
                    <input id="user_dp_nome" type="text" class="form-control" v-bind:value="rows.nome" maxlength="120">
                    <label>E-Mail</label>
                    <input id="user_email" type="text" class="form-control" v-bind:value="rows.email" maxlength="130">
                    <label>Sexo</label>
                    <div class="usuario-sexo">
                        <input type="hidden" id="user_sexo" v-bind:value="rows.sexo" style="width: 20px">
                        <label id="sex-item-M" @click="set_user_sexo('M')" v-if="rows.sexo=='M'" class="sexo-item active" for="masc" >Masculino</label>
                        <label id="sex-item-M" @click="set_user_sexo('M')" v-else class="sexo-item" for="masc" >Masculino</label>
                        <label id="sex-item-F" @click="set_user_sexo('F')" v-if="rows.sexo=='F'" class="sexo-item active" for="fem" >Feminino</label>
                        <label id="sex-item-F" @click="set_user_sexo('F')" v-else class="sexo-item" for="fem" >Feminino</label>
                        <label id="sex-item-I" @click="set_user_sexo('I')" v-if="rows.sexo=='I'" class="sexo-item active" for="ind" >Não definido</label>
                        <label id="sex-item-I" @click="set_user_sexo('I')" v-else class="sexo-item" for="ind" >Não definido</label>

                    </div>
                    <label>Empresa</label>
                    <input id="user_empresa" type="text" class="form-control" v-bind:value="rows.empresa" maxlength="130">
                    <label>Cargo</label>
                    <input id="user_cargo" type="text" class="form-control" v-bind:value="rows.cargo" maxlength="130">
                </div>
                <div id="dados-localizacao">
                    <div class="row ender-block">
                        <div class="col-md-6">
                            <label>CEP</label>
                            <input id="user_cep" v-mask="'#####-###'" type="text" class="form-control" maxlength="10"  v-model="rows.cep" @change="load_ender_from_vcep" />
                        </div>
                    </div>
                    <div class="row ender-block">
                        <div class="col-md-12">
                            <label>Endereço</label>
                            <input id="user_ender" type="text" class="form-control" v-bind:value="rows.ender" maxlength="100">
                        </div>
                    </div>
                    <div class="row ender-block">
                        <div class="col-md-4">
                            <label>Número</label>
                            <input id="user_numero" type="text" class="form-control" v-bind:value="rows.numero" maxlength="45">
                        </div>
                        <div class="col-md-8">
                            <label>Complemento</label>
                            <input id="user_comple" type="text" class="form-control" v-bind:value="rows.comple" maxlength="100">
                        </div>
                    </div>
                    <div class="row ender-block">
                        <div class="col-md-7">
                            <label>Cidade</label>
                            <input id="user_cidade" type="text" class="form-control" v-bind:value="rows.cidade" maxlength="45">
                        </div>
                        <div class="col-md-5">
                            <label>Bairro</label>
                            <input id="user_bairro" type="text" class="form-control" v-bind:value="rows.bairro" maxlength="45">
                        </div>
                    </div>
                    <div class="row ender-block">
                        <div class="col-md-3">
                            <label>UF</label>
                            <input id="user_uf" type="text" class="form-control" v-bind:value="rows.uf" maxlength="2">
                        </div>
                        <div class="col-md-9">
                            <label>País</label>
                            <input id="user_pais" type="text" class="form-control" v-bind:value="rows.pais" maxlength="50">
                        </div>
                    </div>
                </div>
            </section>
                <div id="dados-notas">
                   <button id="nota-btn-2" @click="show_nova_nota()"> Criar Nota</button>
                    <div id="dados-notas-data">
                        <section id="user-dados" v-for="(rows, idn) in dados_notas" :key="idn"> 
                            <div class="user-notas">
                                <div class="user-notas-linha1">
                                    <div class="user-notas-img" >
                                        <img v-bind:src="rows.img" >
                                    </div>
                                    <div class="user-notas-linha2">
                                        <span class="user-notas-nome" v-html="rows.nome"></span>
                                        <span class="user-notas-date" v-html="rows.dtx"></span>
                                    </div>
                                    <a href="#1" id="btn-edit-nota" class="btn-handle-nota" v-on:click="nota_edit(rows.idn, rows.nota)">
                                        <img src="../assets/imgs/iconeescrever.png">
                                    </a>
                                    <a href="#1" id="btn-delete-nota" class="btn-handle-nota" v-on:click="nota_delete(rows.idn, rows.nota)">
                                        <img src="../assets/imgs/iconelixo.png">
                                    </a>
                                </div>
                                <span class="user-notas-nota" v-html="rows.nota.replace('\n','<br>')"></span>
                            </div>
                        </section>
                    </div>
                    <div id="dados-notas-nodata">
                        <img src="../assets/imgs/astronauta2.png">
                        <p>Parece que não temos nenhuma nota criada para esse contato.</p>
                        <button id="nota-btn-1" @click="show_nova_nota()"> Criar Nota</button>
                    </div>
                </div>
                <div id="dados-notas-novas">
                    <div class="user-notas-nova">
                        <p>Escreva sua anotação</p>
                        <textarea class="form-control" rows="5" id="user_nota"></textarea>
                        <div class="user-notas-linha3">
                            <button id="btn-nova-nota-cancelar" @click="hide_nova_nota()"> Cancelar</button>
                            <button id="btn-nova-nota" @click="save_nota()"> Conluir</button>
                        </div>
                    </div>
                        
                </div>
                <div id="area-save-btn">
                    <button id="save-btn" @click="save_user_dados_pessoais()"> Salvar </button>
                </div>
                
        </div>
    </div>

</template>


<script>
/*
    npm i -S vue-the-mask X
    npm install v-mask    OK
*/
import Vue from 'vue'
import VueMask from 'v-mask'
Vue.use(VueMask);
///Vue.directive('mask', VueMask.VueMaskDirective);

import axios from "axios";
//import dadosMidias from '../components/usuariodadosMidias';

var self;
var nota_idn="";
export default {
    name: 'usuariodados',
  data: function () {
    return {
      dados_usuario:[],
      dados_midias: [],
      dados_notas: []
    }
  },
    components: {
    },
    methods:{
        set_user_sexo(sex){
            document.getElementById('user_sexo').value=sex;
            var sexos=document.getElementsByClassName('sexo-item');
            sexos[0].classList.remove('active');
            sexos[1].classList.remove('active');
            sexos[2].classList.remove('active');
            document.getElementById('sex-item-'+sex).classList.add('active');
        },
        nota_edit(idn, nota){
            nota_idn=idn;
            document.getElementById('user_nota').value=nota;
            this.show_nova_nota()
        },
        save_user_dados_pessoais(){
            var host=document.getElementById("host").value;
            var contato_idn=document.getElementById("contato_idn").value;
            var nome=document.getElementById("user_dp_nome").value;
            var empresa=document.getElementById("user_empresa").value;
            var cargo=document.getElementById("user_cargo").value;
            var sexo=document.getElementById("user_sexo").value;
            var email=document.getElementById("user_email").value;
            var cep=document.getElementById("user_cep").value;
            var ender=document.getElementById("user_ender").value;
            var numero=document.getElementById("user_numero").value;
            var comple=document.getElementById("user_comple").value;
            var cidade=document.getElementById("user_cidade").value;
            var bairro=document.getElementById("user_bairro").value;
            var uf=document.getElementById("user_uf").value;
            var pais=document.getElementById("user_pais").value;

            var data="idn="+contato_idn
            +"&nome="+nome
            +"&empresa="+empresa
            +"&cargo="+cargo
            +"&sexo="+sexo
            +"&email="+email
            +"&cep="+cep
            +"&ender="+ender
            +"&numero="+numero
            +"&comple="+comple
            +"&cidade="+cidade
            +"&bairro="+bairro
            +"&uf="+uf
            +"&pais="+pais
            axios({
                        method: 'post',
                        url: host+':6001/wapp/contatos?crud=upd&'+data,
                        headers: {'Content-Type': 'application/json' }
            })
            .then(() => {
                this.load_contato_dados();
            })
            .catch(function (error) {
                alert('Erro ao salvar dados do usuario : '+error);
            });

        },
        nota_delete(idn, b){
            var host=document.getElementById("host").value;
            if(!window.confirm('Excluir a nota '+b+'?')) return;
            
            axios({
                        method: 'post',
                        url: host+':6001/wapp/contatos_notas?idn='+idn+"&crud=del"
            })
            .then(() => {
                this.load_notas();
            })
            .catch(function (error) {
                alert('Erro ao excluir Nota : '+error);
            });
        },
        show_nova_nota(){
            document.getElementById('dados-notas-novas').style.display="flex";
            document.getElementById('dados-notas').style.display="none";
        },
        hide_nova_nota(){
            document.getElementById('dados-notas-novas').style.display="none";
            document.getElementById('dados-notas').style.display="block";
        },
        save_nota(){
            var user_idn=document.getElementById("user_idn").value;
            var contato_idn=document.getElementById("contato_idn").value;
            var host=document.getElementById("host").value;
            var nota=document.getElementById('user_nota').value;
            if(nota==""){
                alert("Nada para salvar!")
                return;
            }
            var crud="upd";


            this.hide_nova_nota();
            axios({
                        method: 'post',
                        url: host+':6001/wapp/contatos_notas?contato_idn='+contato_idn+'&usr='+user_idn+"&crud="+crud+"&nota="+nota+"&idn="+nota_idn,
                        headers: {'Content-Type': 'multipart/form-data' }
            })
            .then(() => {
                nota_idn="";
                document.getElementById('user_nota').value="";
                this.load_notas();
            })
            .catch(function (error) {
                alert('Erro ao salvar Nota : '+error);
            });
            

        },
        load_notas(){
            var user_idn=document.getElementById("user_idn").value;
            var contato_idn=document.getElementById("contato_idn").value;
            var host=document.getElementById("host").value;
            document.getElementById('user-anexos-midias').innerHTML="";
            document.getElementById('user-anexos-docs').innerHTML="";

            axios({
                        method: 'post',
                        url: host+':6001/wapp/contatos_notas?contato_idn='+contato_idn+'&usr='+user_idn,
                        headers: {'Content-Type': 'multipart/form-data' }
            })
            .then((response) => {
                this.dados_notas = response.data.rows;

                setTimeout(() => {
                    //alert(document.getElementById('dados-notas-data').innerHTML)
                    if(document.getElementById('dados-notas-data').innerHTML==""){
                        document.getElementById('dados-notas-nodata').style.display="block";
                        document.getElementById('nota-btn-2').style.display="none";
                    }else{
                        document.getElementById('dados-notas-nodata').style.display="none";
                        document.getElementById('nota-btn-2').style.display="block";
                    }
                        
                }, 100);
            })
            .catch(function (error) {
                alert('Erro ao carregar Notas : '+error);
            });
        },
        load_ender_from_vcep(){
            var cep=document.getElementById('user_cep').value;
            var host="https://viacep.com.br/ws/"+cep+"/json/";
//            window.open(host, '_blank');
            var ender=document.getElementById('user_ender');
            var cidade=document.getElementById('user_cidade');
            var uf=document.getElementById('user_uf');
            var bairro=document.getElementById('user_bairro');
            var pais=document.getElementById('user_pais');
            axios({
                method: 'get',
                url: host,
                headers: {'Content-Type': 'multipart/form-data' }
            })
            .then((response) => {
               ender.value=response.data.logradouro;
               cidade.value=response.data.localidade;
               bairro.value=response.data.bairro;
               uf.value=response.data.uf;
               pais.value="Brasil";
            })
            .catch(function (error) {
                console.log(error)
               ender.value="";
               cidade.value="";
               bairro.value="";
               uf.value="";
               pais.value="Brasil";
            });


        },
        select_this_menu_item (n){
            var btn_dados=document.getElementsByClassName('botao-dados-pessoais')[0];
            var btn_locais=document.getElementsByClassName('botao-localizacao')[0];
            var btn_notas=document.getElementsByClassName('botao-notas')[0];
            btn_dados.classList.remove('active');
            btn_locais.classList.remove('active');
            btn_notas.classList.remove('active');

            var dados=document.getElementById('dados-pessoais');
            var locais=document.getElementById('dados-localizacao');
            var notas=document.getElementById('dados-notas');
            var notas_novas=document.getElementById('dados-notas-novas');
            var save_btn=document.getElementById('save-btn');

            dados.style.display="none";
            locais.style.display="none";
            notas.style.display="none";
            notas_novas.style.display="none";

            save_btn.style.display="block";
            switch(n){
                case 1:
                    btn_dados.classList.add('active');
                    dados.style.display="block";
                    break;
                case 2:
                    btn_locais.classList.add('active');
                    locais.style.display="block";
                    break;
                case 3:
                    btn_notas.classList.add('active');
                    notas.style.display="block";
                    save_btn.style.display="none";
                    this.load_notas();
                    break;
            }

        },
        open_midias_links_docs(){
            self.$parent.POP_usuario_dados_midias();
        },
        load_contato_dados(){
            var contato_idn=document.getElementById("contato_idn").value;
            var host=document.getElementById("host").value;
            document.getElementById('user-anexos-midias').innerHTML="";
            document.getElementById('user-anexos-docs').innerHTML="";

            document.getElementById('btn-main-user').click();
            document.getElementById('user_nota').value="";
            
            axios({
                method: 'post',
                url: host+':6001/wapp/contatos?contato_idn='+contato_idn,
                headers: {'Content-Type': 'multipart/form-data' }
            })
            .then((response) => {
               this.dados_usuario = response.data.rows;
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
                        alert('Erro ao ler mídias do usuário : '+error);
                    });
               }, 100);
               
            })
            .catch(function (error) {
                alert('Erro ao carregar dados do usuário : '+error);
            });
            this.load_notas();
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

.btn-handle-nota{
    position:relative;
    border:0px solid red;
    top: -15px;
    height: 30px;
    left:40px;
    text-align: right;
    opacity:.3;
}
#btn-edit-nota{
    left:45px;
}
.btn-handle-nota:hover{
    opacity:1;
}

.btn-handle-nota img{
    position:relative !important;
    top:-100px;

}
#btn-nova-nota, #btn-nova-nota-cancelar{
    width: 120px;
    height: 30px;
    background: var(--color-roxo);
    border-radius: 10px;
    font-size:10pt;
    font-weight: 200;
    color: white;
    margin: 5px;
}
#btn-nova-nota-cancelar{
    background: var(--color-background);
    color: var(--color-text-dark);


}
.user-notas-nova{
    height: 220px;
}

.user-notas-linha3{
    text-align: right;
}

.user-notas-nova textarea{
    min-height: 100px !important;
    border:0px;
}

#dados-notas-novas{
    display: none;
    padding: 10px 10px 10px 10px;

}
#dados-notas-nodata{
    position: absolute;
    top:120px;
    background: white;
    border:0px solid red;
}
#dados-notas-data, #dados-notas-novas{
    padding-right:10px;
    overflow-y: auto;
    overflow-x: hidden;
    height: calc(100vh - 270px);
    background: var(--color-background);
}
.user-notas, .user-notas-nova{
    border:0px solid red;
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 20px 15px 5px 10px;
    margin-top: 10px;
    border-radius: 20px;
    background: white;
    box-shadow: 5px 5px 10px rgba(3, 3, 3, 0.5);
    width:310px;
}
.user-notas-linha1{
    display: flex;
    flex-direction: row;

}
.user-notas-linha2{
    margin-left:-10px;
    margin-top:5px;
    display: flex;
    flex-direction: column;
}
.user-notas-nome{
    color: var(--color-roxo);
    font-weight:600;
    font-size:11pt;
}
.user-notas-date{
    font-size:10pt;
    color: var(--color-text)
}
.user-notas-nota{
    font-size:10pt;
    color: var(--color-text-dark);
    margin-top:10px;
}

.user-notas-img{
    height:40px;
    width:70px;

}
.user-notas-img img{
    position:relative;
    top:-95px;
    left: 5px;
    border-radius: 50%;
}
#area-save-btn{
    position:absolute;
    display: flex;
    top: calc(100vh - 110px);
}
#save-btn, #nota-btn-1, #nota-btn-2{
    width:330px;
    height: 40px;
    background: var(--color-roxo);
    border-radius: 10px;
    color: white;
}

#nota-btn-2{
    margin-top:10px;
    margin-bottom:15px;
}
.ender-block{
    height:55px !important;
    display: flex;
    padding: 0px 0px 0px 0px !important;
}
.ender-block div{
    padding: 0px 5px 0px 0px !important;
}
.ender-block div .form-control{
    margin-bottom:1px !important;
}
.form-control{
    padding:3px !important;
    font-size:9pt;
    height: 27px;
    padding: 5px 10px 5px 10px !important;
}
.usuario-sexo{
    display: flex;
    justify-content: space-between;
    margin-top: -10px;
}
.usuario-sexo input{
    display: block;
}
.sexo-item{
    width:90px;
    height:40px;
    font-size:10pt !important;
    background: var(--color-text-dark);
    color: white !important;
    border-radius:10px;
    margin: 5px;
    font-weight: 400 !important;
    padding-top:10px;
    text-align: center;
    cursor:pointer;
}

.sexo-item.active{
    background: var(--color-roxo);
}

#dados-pessoais{
    position:relative;
    display:block;
    padding-top: 0px !important;
}
#dados-localizacao{
    display:none;
    padding-left: 10px;
    padding-top: 0px !important;
}
#dados-notas{
    display:none;
    text-align: center;
    color: var(--color-text-dark);
    background: var(--color-background);
}
#dados-notas img{
    width:60%;
    margin-top:100px;
    margin-bottom:30px;
}
#user-botoes-area{
    display: flex;
}
.botao-dados-pessoais{
    border: var(--color-roxo);
    background: white;
    background-image: url('../assets/imgs/dados-pessoais-branco.png');
    background-repeat: no-repeat;
    background-position: 37px 5px;
    background-size: 27px;
    border: 1px solid var(--color-roxo);
    color:var(--color-roxo);
    width: 105px;
    height:55px;
    border-radius: 30px;
    margin: 10px;
    margin-bottom: 0px;
    font-size:8pt;
    display: flex;
    padding:15px;
    padding-top:32px;
    white-space: nowrap;
}

.botao-dados-pessoais.active{
    background: var(--color-roxo);
    border: 1px solid var(--color-roxo);
    background-image: url('../assets/imgs/dados-pessoais-roxo.png');
    background-repeat: no-repeat;
    background-position: 37px 5px;
    background-size: 27px;
    color:white;
}

.botao-localizacao{
    border: var(--color-roxo);
    background: white;
    background-image: url('../assets/imgs/pin-local-branco.png');
    background-repeat: no-repeat;
    background-position: 38px 5px;
    background-size: 20px;
    border: 1px solid var(--color-roxo);
    color:var(--color-roxo);
    width: 105px;
    height:55px;
    border-radius: 30px;
    margin: 10px;
    margin-bottom: 0px;
    font-size:8pt;
    display: flex;
    padding:15px;
    padding-left:20px;
    padding-top:32px;
    white-space: nowrap;
    text-align: right;
}

.botao-localizacao.active{
    background: var(--color-roxo);
    background-image: url('../assets/imgs/pin-local-roxo.png');
    background-repeat: no-repeat;
    background-position: 38px 5px;
    background-size: 20px;
    color:white;
}
.botao-notas{
    width: 105px;
    height:55px;
    border-radius: 30px;
    background: white;
    background-image: url('../assets/imgs/nota-branco.png');
    background-repeat: no-repeat;
    background-position: 38px 8px;
    background-size: 21px;
    color:var(--color-roxo);
    border: 1px solid var(--color-roxo);
    margin: 10px;
    margin-bottom: 0px;
    font-size:8pt;
    display: flex;
    padding:15px;
    padding-left:35px;
    padding-top:32px;
    white-space: nowrap;
    text-align: right;
}
.botao-notas.active{
    border: var(--color-roxo);
    background: var(--color-roxo);
    background-image: url('../assets/imgs/nota-roxo.png');
    background-repeat: no-repeat;
    background-position: 38px 8px;
    background-size: 21px;
    color:white;
}
#pop-over-dados-usuario{
    background: var(--color-background);
}
#user-profile-img{
    border-radius: 50%;
    width:120px;
}
#user-dados-area{
    padding: 10px;
    padding-bottom: 40px;
    display: flex;
    flex-direction: column;
    text-align: left;
    background: white;
    margin-left: 3px;
    margin-bottom:10px;
    color: var(--color-roxo);
    background-color: var(--color-background);
}
#user-dados-area label{
    color: var(--color-text-dark);
    font-weight:600;
    margin-top:10px;
    margin-bottom: 2px;
    font-size:10pt;
}
#btn-edit-dados-user img{
    position: relative;
    border-radius: 50%;
    top:40px;
    left:-25px;
    padding: 6px;
    background: var(--color-roxo);
}

#btn-edit-dados-user img{
    border-radius: 50%;
    width:35px;

}

#btn-block-dados-user{
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

#btn-block-dados-user img{
    border-radius: 50%;
    width:30px;

}
#user-dados-nome{
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
