<template>
    <main>

        <!-- CHAT AREA -->
            <div id="chat-area">
                <div id="chat-area-msgs">
                        <li>msngsagens</li>
                        <li>msngsagens</li>
                        <li>msngsagens</li>
                        <li>msngsagens</li>
                        <li>msngsagens</li>
                        <li>msngsagens</li>
                        <li>msngsagens</li>
                        <li>msngsagens</li>
                        <li>msngsagens</li>
                        <li>msngsagens</li>
                        <li>msngsagens</li>
                        <li>msngsagens</li>
                        <li>msngsagens</li>
                        <li>msngsagens</li>
                        <li>msngsagens</li>
                        <li>msngsagens</li>
                        <li>msngsagens</li>
                        <li>msngsagens</li>
                        <li>msngsagens</li>
                        <li>msngsagens</li>
                        <li>msngsagens</li>
                        <li>msngsagens</li>
                        <li>msngsagens</li>

                </div>        
                <div id="chat-area-msgs-send">
                    <a href="#4" id=""><i class="bi bi-emoji-smile"></i></a>
                    <a href="#4" id=""><img src="../assets/imgs/iconefoguete.png" class="icone-foguete"></a>
                    <a href="#4" id=""><i class="bi bi-paperclip"></i></a>
                    
                    <textarea name="" id="" cols="30" class="form-control" rows="2"></textarea>
                    <a href="#4" id=""><i class="bi bi-mic-fill"></i></a>
                </div>
            </div>

        <div id="menu-chat">
            <div id="menu-chat-1-1">
                <a class="esys-aba active">
                    Caixa de Entrda
                    <span class="aviso-orange">2</span>
                </a>
                <a class="esys-aba">
                    Todos os Contatos
                </a>
            </div>
            <div class="main-chat-header">
                <div id="menu-chat-1-2">
                    <div id="client-profile">
                        <img src="../assets/imgs/users/116.jpg" class="client-profile-img" >
                        <div>
                            <b>Ana Margarida</b>
                            <p>+55 11 99999-9999</p> 
                        </div>
                    </div>

                </div>


<!-- 3 DROPDOWN LOJAS, SEGMENTACAO E FUNIL TELA MINIMA -->
                <div id="botoes-genericos-v" >
                    <a href="#1">
                        <div class="combo-like-grp" id="btn_lista_v" @click="SH_lista_lojas_v" >
                            <i style='font-size:20pt;cursor:pointer' class="bi bi-info-circle" ></i>
                        </div>
                     </a>
                     <div class="combo-like-bico-v" id="lista_lojas_bico_v">
                        &nbsp;
                     </div>
                      <div class="combo-like-lista-v" id="lista_lojas_lista_v">
                      </div>

                </div>


<!-- 3 DROPDOWN LOJAS, SEGMENTACAO E FUNIL -->
                <div id="botoes-genericos">


<!-- 3 DROPDOWN FUNIL -->
                    <div class="combo-like-grp" @click="SH_funil"  id="combo-like-grp-funil">
                        <div class="combo-like creme">
                            <label>Prospecção</label>
                            <i class="bi bi-chevron-down"></i>
                        </div>
                        <div class="combo-like-bico" id="funil_bico">
                            &nbsp;
                        </div>
                        <div class="combo-like-lista" id="funil_lista">
                            <div>Prospecção</div><hr>
                            <div>Prosposta enviada</div><hr>
                            <div>Negociação</div><hr>
                            <div>Prosposta aceita</div><hr>
                            <div>Venda concluída</div><hr>
                            <div>Perdido</div>
                        </div>
                    </div>
                    
<!-- 3 DROPDOWN SEGMENTACAO  -->
                    <div class="combo-like-grp" id="combo-like-grp-segmentos">
                        <div class="combo-like roxo-claro" @click="SH_segmentos">
                            <label>Segmentações</label>
                            <i class="bi bi-chevron-down"></i>
                        </div>
                        <div class="combo-like-bico" id="segmentos_bico">
                            &nbsp;
                        </div>
                        <div class="combo-like-lista" id="segmentos_lista">
                            <p class="search-box-mini">
                                <i class="bi bi-search"></i>
                                <input type="text" class="form-control" placeholder="Pesquisar grupo">
                            </p>
                            <p><input type="checkbox" name="" id=""> Interessando em Batmóvel</p>
                            <p><input type="checkbox" name="" id=""> Interessando em Netflix</p>
                            <p><input type="checkbox" name="" id=""> Querendo Havaianas</p>
                            <p><input type="checkbox" name="" id=""> Buscando Passagens</p>
                        </div>
                    </div>


<!-- 3 DROPDOWN LOJAS-->
                    <div class="combo-like-grp" @click="SH_lista_lojas" id="combo-like-grp-lojas">
                        <div class="combo-like verde-claro" >
                            <label>Loja A</label>
                            <i class="bi bi-chevron-down"></i>
                        </div>
                        <div class="combo-like-bico" id="lista_lojas_bico">
                            &nbsp;
                        </div>
                        <div class="combo-like-lista" id="lista_lojas_lista">
                            <div>Loja B</div>
                            <div>Loja C</div>
                            <div>Loja D</div>
                            <div>Loja E</div>
                        </div>
                    </div>

                    
                </div>





<!--CANTO DIREITO DO 2º CABEÇALHO  -->                
                <div id="botoes-extras">

    <!--BOTAO FINANCE  -->  
                    <a href="#1" class="btn-small" id="btn-finance" @click="POP_financeiro">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cash-coin" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"/>
  <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z"/>
  <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z"/>
  <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z"/>
</svg>                            
                    </a>
    <!--BOTAO SEARCH -->  
                    <div class="search-box" id="search-lado-direito">
                        <i class="bi bi-search" @click="hideSearchLadoDireito"></i>
                        <input type="text" class="form-control" placeholder="Digite o que deseja">
                    </div>
                    <a href="#1" class="btn-small" id="btn-show-seach-lado-direito" @click="showSearchLadoDireito"><i class="bi bi-search"></i></a>
    <!--BOTAO TELEFONE  -->  
                    <a href="#1" class="btn-small" id=""><img class='icone-telefone' src="../assets/imgs/iconetelefone.png"></a>


<!--MENU DIREITO  -->
                    <div class="combo-like-grp "  @click="SH_filtro_dir">
                        <a href="#1" class="btn-small" id="btn_menu_dir"><i class="bi bi-three-dots-vertical"></i></a>
                        <div class="combo-like-bico-dir" id="filtro_dir_bico">
                            &nbsp;
                        </div>
                        <div class="combo-like-lista-dir"  id="filtro_dir_lista">
                            <b class="badge">Protocolo 123189898</b>
                            <div><i class="bi bi-clock"></i> Histórico<hr></div>
                            <div @click="POP_transferencia"><i class="bi bi-arrow-left-right"></i>Transferência<hr></div>
                            <div @click="POP_usuario"><i class="bi bi-person-lines-fill"></i>Editar Usuário<hr></div>
                            <div><i class="bi bi-images"></i>Editar Papel de Parede<hr></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">


<!--COLUNA CONTATOS DO CHAT -->
            <div id="msg-area">
                <div id="msg-area-header">
                    <div id="msg-area-opcoes">
                        <div class="msg-area-opcoes-item active" >
                            <a href="#3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sun-fill" viewBox="0 0 16 16">
                                    <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
                                </svg><br>
                                Em atendimento
                            </a>
                        </div>
                        <div class="msg-area-opcoes-item">
                                <a href="#3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon" viewBox="0 0 16 16">
                                <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/>
                                </svg><br>
                                Aguardando
                            </a>
                        </div>
                        <div class="msg-area-opcoes-item">
                            <a href="#3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-stars" viewBox="0 0 16 16">
                                <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/>
                                <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
                                </svg><br>
                                Follow-up
                            </a>
                        </div>
                    </div>
                    <div class="combo-like-grp opcoes-grp-chat">
                        <div class="search-box ">
                            <i class="bi bi-search"></i>
                            <input type="text" class="form-control" placeholder="Procura conversa">
                        </div>
                        <a href="#1" class="btn-small" id=""><img src="../assets/imgs/add-contato.png"></a>
                        <i class="bi bi-sun-fill" style="color:black;font-size:20pt"></i>

                        <div class="combo-like-grp" @click="SH_filtro">
                            <a href="#1" class="btn-small" id="filtro-chats"><img src="../assets/imgs/segmentacao.png"></a>
                            <div class="combo-like-bico-menu-chat" id="filtro_bico">
                                &nbsp;
                            </div>
                            <div class="combo-like-lista-menu-chat"  id="filtro_lista">
                                <h6><b>Etapa:</b></h6>
                                <div>Prospecção<hr></div>
                                <div>Prosposta enviada<hr></div>
                                <div>Negociação<hr></div>
                                <div>Prosposta aceita<hr></div>
                                <div>Venda concluída<hr></div>
                                <div>Perdido</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="popover-area" id="pop-over-transfer">
                <div  class="popover-header">
                    <h5 class="popover-title">Transferência</h5>
                    <a href="#4" id="" @click="POP_change_places_showHide_popover(0)"><i class="bi bi-x-circle"></i></a>
                </div>
            </div>

            <div class="popover-area" id="pop-over-dados-usuario">
                <div  class="popover-header">
                    <h5 class="popover-title">Dados do Usuário</h5>
                    <a href="#4" id=""  @click="POP_change_places_showHide_popover(0)"><i class="bi bi-x-circle"></i></a>
                </div>
            </div>

            <div class="popover-area" id="pop-over-financeiro">
                <div  class="popover-header">
                    <h5 class="popover-title">Financeiro</h5>
                    <a href="#4" id=""  @click="POP_change_places_showHide_popover(0)"><i class="bi bi-x-circle"></i></a>
                </div>
            </div>


        </div>


    </main>
    
</template>

<script>

/*
const YourCustomModule = require("../assets/js/header.js");
alert(YourCustomModule.message);
*/

export default {
    name: 'Home',
    methods:{
        SH_lista_lojas_v: function(){
            var bico=document.getElementById('lista_lojas_bico_v')
            var lista=document.getElementById('lista_lojas_lista_v')
            var comboLike_grpLojas = document.getElementById("combo-like-grp-lojas");
            var comboLike_grpSegmentos = document.getElementById("combo-like-grp-segmentos");
            var comboLike_grpFunil = document.getElementById("combo-like-grp-funil");

            var showhide="block";
            var height_bico="10px";
            var height_linha="";

            lista.style.opacity="0";
            if(lista.style.display=="block"){
                showhide="none";
                height_bico="0";
                height_linha="0";
            }

            lista.style.opacity=.1;
            bico.style.display=showhide;
            lista.style.display=showhide;
            bico.style.height=height_bico;
            setTimeout(() => {
                lista.style.opacity=1;
                lista.style.height=height_linha;
                comboLike_grpLojas.style.display=showhide;
                comboLike_grpSegmentos.style.display=showhide;
                comboLike_grpFunil.style.display=showhide;
            }, 100);
        },
        SH_lista_lojas: function(){
            var bico=document.getElementById('lista_lojas_bico')
            var lista=document.getElementById('lista_lojas_lista')
            var showhide="block";
            var height_bico="10px";
            var height_linha="";

            lista.style.opacity="0";
            if(lista.style.display=="block"){
                showhide="none";
                height_bico="0";
                height_linha="0";
            }
            lista.style.opacity=.1;
            bico.style.display=showhide;
            lista.style.display=showhide;
            bico.style.height=height_bico;
            setTimeout(() => {
                lista.style.opacity=1;
                lista.style.height=height_linha;
            }, 100);
        },
        SH_segmentos: function(){
            var bico=document.getElementById('segmentos_bico')
            var lista=document.getElementById('segmentos_lista')
            var showhide="block";
            var height_bico="10px";
            var height_linha="";

            lista.style.opacity="0";
            if(lista.style.display=="block"){
                showhide="none";
                height_bico="0";
                height_linha="0";
            }
            lista.style.opacity=.1;
            bico.style.display=showhide;
            lista.style.display=showhide;
            bico.style.height=height_bico;
            setTimeout(() => {
                lista.style.opacity=1;
                lista.style.height=height_linha;
            }, 100);
        },
        SH_funil: function(){
            var bico=document.getElementById('funil_bico')
            var lista=document.getElementById('funil_lista')
            var showhide="block";
            var height_bico="10px";
            var height_linha="";

            lista.style.opacity="0";
            if(lista.style.display=="block"){
                showhide="none";
                height_bico="0";
                height_linha="0";
            }
            lista.style.opacity=.1;
            bico.style.display=showhide;
            lista.style.display=showhide;
            bico.style.height=height_bico;
            setTimeout(() => {
                lista.style.opacity=1;
                lista.style.height=height_linha;
            }, 100);
        },

        SH_filtro: function(){
            var bico=document.getElementById('filtro_bico')
            var lista=document.getElementById('filtro_lista')
            var showhide="block";
            var height_bico="10px";
            var height_linha="";

            lista.style.opacity="0";
            if(lista.style.display=="block"){
                showhide="none";
                height_bico="0";
                height_linha="0";
            }
            lista.style.opacity=.1;
            bico.style.display=showhide;
            lista.style.display=showhide;
            bico.style.height=height_bico;
            setTimeout(() => {
                lista.style.opacity=1;
                lista.style.height=height_linha;
            }, 100);
        },
        SH_filtro_dir:function(){
            var bico=document.getElementById('filtro_dir_bico')
            var lista=document.getElementById('filtro_dir_lista')
            var showhide="block";
            var height_bico="10px";
            var height_linha="";

            lista.style.opacity="0";
            if(lista.style.display=="block"){
                showhide="none";
                height_bico="0";
                height_linha="0";
            }
            lista.style.opacity=.1;
            bico.style.display=showhide;
            lista.style.display=showhide;
            bico.style.height=height_bico;
            setTimeout(() => {
                lista.style.opacity=1;
                lista.style.height=height_linha;
            }, 100);
        },
        POP_change_places_showHide_popover:function (show){

                var popovers = document.getElementsByClassName("popover-area");
                var i;
                for(i=0;i<popovers.length;i++){
                    popovers[i].style.display="none";
                }

            var menu_chat = document.getElementById("menu-chat");
            var chat_area = document.getElementById("chat-area");
            var comboLike_bicoDir = document.getElementById("filtro_dir_bico");
            var comboLike_listaDir = document.getElementById("filtro_dir_lista");
            var btn_genericos = document.getElementById("botoes-genericos");
            var btn_genericos_v = document.getElementById("botoes-genericos-v");
            var comboLike_grpLojas = document.getElementById("combo-like-grp-lojas");
            var comboLike_grpSegmentos = document.getElementById("combo-like-grp-segmentos");
            var comboLike_grpFunil = document.getElementById("combo-like-grp-funil");
            var listaLojas_bico = document.getElementById("lista_lojas_bico");
            var listaLojas_lista = document.getElementById("lista_lojas_lista");
            var segmento_bico = document.getElementById("segmentos_bico");
            var segmento_lista = document.getElementById("segmentos_lista");
            var funil_bico = document.getElementById("funil_bico");
            var funil_lista = document.getElementById("funil_lista");
            var listaLojas_bico_v = document.getElementById("lista_lojas_bico_v");
            var listaLojas_lista_v = document.getElementById("lista_lojas_lista_v");

            if(show==1){
                btn_genericos.style.minWidth="0";
                menu_chat.style.width="calc(100% - 360px)";
                chat_area.style.width="calc(100vw - 700px)";
                comboLike_bicoDir.style.left="calc(100vw - 407px)";
                comboLike_listaDir.style.left="calc(100vw - 620px)";

                btn_genericos_v.style.display="flex";

                listaLojas_bico_v.style.display="none";
                listaLojas_lista_v.style.display="none";

                comboLike_grpLojas.style.display="none";
                comboLike_grpSegmentos.style.display="none";
                comboLike_grpFunil.style.display="none";

                comboLike_grpLojas.style.position="absolute";
                comboLike_grpSegmentos.style.position="absolute";
                comboLike_grpFunil.style.position="absolute";

                listaLojas_bico.style.top="150px";
                listaLojas_lista.style.top="159px";

                segmento_bico.style.top="190px";
                segmento_lista.style.top="199px";

                funil_bico.style.top="230px";
                funil_lista.style.top="239px";


            }else{
                menu_chat.style.width="100%";
                chat_area.style.width="calc(100vw - 350px)";
                comboLike_bicoDir.style.left="calc(100vw - 52px)";
                comboLike_listaDir.style.left="calc(100vw - 270px)";
                btn_genericos.style.minWidth="250px";
                btn_genericos_v.style.display="none";

                comboLike_grpLojas.style.display="block";
                comboLike_grpSegmentos.style.display="block";
                comboLike_grpFunil.style.display="block";
                comboLike_grpLojas.style.position="inherit";
                comboLike_grpSegmentos.style.position="inherit";
                comboLike_grpFunil.style.position="inherit";

                listaLojas_bico.style.top="100px";
                listaLojas_lista.style.top="109px";

                segmento_bico.style.top="100px";
                segmento_lista.style.top="109px";

                funil_bico.style.top="100px";
                funil_lista.style.top="109px";



            }
        },
        POP_transferencia: function(){
            this.POP_change_places_showHide_popover(1);
            document.getElementById("pop-over-transfer").style.display="block";
            
        },
        POP_usuario: function(){
            this.POP_change_places_showHide_popover(1);
            document.getElementById("pop-over-dados-usuario").style.display="block";
            
        },
        POP_financeiro: function(){
            this.POP_change_places_showHide_popover(1);
            document.getElementById("pop-over-financeiro").style.display="block";
        },
        showSearchLadoDireito: function(){
            var sch=document.getElementById('search-lado-direito');
            var botao_search=document.getElementById('btn-show-seach-lado-direito');

            sch.style.display="flex";
            botao_search.style.display="none";
            sch.style.width="40px";

            setTimeout(() => {
                sch.style.width="250px";
            }, 100);

        },
        hideSearchLadoDireito: function(){
            var sch=document.getElementById('search-lado-direito');
            var botao_search=document.getElementById('btn-show-seach-lado-direito');
            sch.style.width="0px";
            botao_search.style.opacity=".1";
            setTimeout(() => {
                sch.style.display="none";
                botao_search.style.display="block";
                botao_search.style.opacity="1";
            }, 300);

        },
        closeMenu: function(){
            this.menuActive = false;
        }
        
    },
     mounted() {
        this.dataSrc = "../assets/js/header.js";
        var el=document.getElementsByClassName("mini-menu-item-cell")
        var i=0;
        for(i=0;i<el.length;i++){
            el[i].classList.remove("active");
        }
        el[1].classList.add("active");
        document.getElementById('btn-show-hide-main-menu').click();

        

    },
    created() {
        
    }

}
</script>

<style scoped>


</style>