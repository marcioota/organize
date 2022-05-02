<template>
    <header>
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
        <nav class="container">
            <router-link to="/" >
            <img id="logo" alt="Devvv" src="../assets/imgs/logo.png">
            </router-link>
            <div id="menu-middle">
                
            </div>
            <div id="menu-right">
                <div id="menu-items">

                    <div class="mini-menu">
                            <input id="menu-show-hide" type="checkbox"> 
                            <label id='btn-show-hide-main-menu' class="bi bi-grid-3x3-gap-fill drop-mini" for="menu-show-hide"></label>

                        <div class="mini-menu-block" id="menu-1">
                            <div class="mini-menu-item">
                                <div class="mini-menu-item-grp">
                                        <div class="mini-menu-item-cell">
                                            <router-link to="/Painel" >
                                            <img src="../assets/imgs/foguete2.png" class="icone-foquete-2"> 
                                            <small> Painel</small>
                                            </router-link>
                                        </div>
                                        <div class="mini-menu-item-cell active">
                                            <router-link to="/">
                                            <i class="bi bi-chat-dots-fill"></i> 
                                            <small> Chat</small>
                                            </router-link>
                                        </div>
                                        <div class="mini-menu-item-cell">
                                            <router-link to="/crm">
                                            <i class="bi bi-people-fill"></i> 
                                            <small> CRM</small>
                                            </router-link>
                                        </div>
                                        <div class="mini-menu-item-cell">
                                            <router-link to="/Mkt">
                                            <i class="bi bi-megaphone-fill"></i> 
                                            <small> Marketing</small>
                                            </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="user-profile">
                    <i class="bi bi-chevron-down"></i>
                    <img src="../assets/imgs/users/114.jpg" class="user-profile-img" id="user-profile-img" >
                </div>
            </div>
        </nav>
    </header>
    
</template>

<script>
export default {
    name: 'Header',
    data(){
        return{
            menuActive: false
        }
    },
    metaInfo: {
      script: [
        { src: '../assets/js/header.js', async: false, defer: false }
      ],
    },
    methods:{
        openMenu: function(){
            this.menuActive =  true;
        },
        closeMenu: function(){
            this.menuActive = false;
        }
    },
    mounted(){
    }

    
}

</script>

<style scoped>


header{
    background-color: var(--color-cabecalho-azul);
    width: 100%;
    height: 60px;
    display:flex;
    justify-content: center;
    align-items: center;
}
.bi{
    font-size: 20pt;
    margin-top:10px;
    font-weight: 100;
}

header i {
    color: white;
}
nav{
    display: flex;
    justify-content: space-between;
    height: 60px;
    align-items: center;
}

#logo{
    width: 150px;
    position: fixed;
    top: 3px;
    left:5px;
}

#menu-btn{
    width: 30px;
}

#menu-1:target {
  display: block;
}

#menu-overlay{
    position: fixed;
    top:0;
    left:0;
    width:40%;
    height:100vh;
    background-color: #000;
    opacity: 0.8;
}
#menu-logo{
    width:110px;
    margin-top: 30px;
}

#menu-items{
    position: fixed;
    top:0;
    background-color: var(--color-cabecalho-azul);
    height: 100vh;
    flex-direction: column;
    justify-content: flex-end;
    align-items: right;
    border:0px solid red; 
}
#btn-show-hide-main-menu{
    padding-top: 5px;
    height: 30px;
    border:0px solid red; 
    width: 80px;
    text-align: right;
}

 
 #menu-middle{
   border:0px solid white;
    width: 40%;
    height: 100vh;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
 }

#menu-right{
    position: fixed;
    width: 50px;
    display: flex;
    border: 0px solid red;
    left: calc(100vw - 200px) !important;
    z-index: 425435344350;
}

#user-profile{
    position: relative;
    display: flex;
    flex-direction: row;
    top:0;
    width: 100px;
    left:70px;
    height: 8vh;
    align-items: center;
    border: 0px solid red;
    
}

#user-profile i{
    font-size: 10pt;
    margin-right: 10px;
}

#user-profile img{
    width:40px;
    height:40px;
}

#menu-show-hide{
    display:none;
}
input +.drop-mini +  div
{
  display:none;
}

.drop-mini:after {
  content:'';
  display:none;
}
    :checked  + .drop-mini:after {
        content:'';
        display:none;
    }
    input:checked + .drop-mini + div{
        display:block;
}

.mini-menu{
    width:40px;
    padding-top: -13px;
    z-index: 1;
}

.mini-menu label{
    color: white !important;
    height: 100px;
    cursor: pointer;
}

.mini-menu-item{
    position: relative;
    display: flex;
    background: url("../assets/imgs/baloon.png");
    background-repeat: no-repeat;
    background-size: auto;
    width:173px;
    height: 155px;
    border: 0px solid red;
    left:-25px;
    top:-5px;
    position:relative;
    border-radius: 5px;
    
}

.mini-menu-item-grp{
    margin-top:31px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 200px;
    margin-left: 17px;
}

.mini-menu-item-cell{
    margin: 0 4px 0px 3px;
    border-radius: 10px;
    width: 65px;
    height: 48px;
    padding: 1px 10px 5px 5px;
    cursor: pointer;
    text-align: center;
}
.mini-menu-item-cell i{
   color: var(--color-roxo) !important;
   font-size: 15pt;

}

.mini-menu-item-cell a{
    flex-wrap: wrap;
    flex-direction:row;
    margin-left: 5px;
    color: var(--color-cabecalho-azul) !important;
    text-decoration: none;

}

.mini-menu-item-cell:hover{
    background:  rgb(228, 220, 247);
}

.mini-menu-item-cell.active{
    background:  rgb(228, 220, 247);
}

.mini-menu-item-grp small{
    position: relative;
    top: -8px;
    font-size: 8pt;
}


#menu-items.active{
    display: flex;
}
ul{
    list-style: none;
    text-align: center;
    height: 60px;
    align-items: center;
}

ul li {
    margin: 20px 0px;
}

ul li a {
    color: var(--color-text-light)
}

@media (min-width:700px){
    #menu-btn,
    #menu-logo,
    #menu-overlay{
        display: none;
    }

    #menu-items{
        display: flex;
        position: static;
        height: 60px;
        width: auto;
    }
    ul{
        display: flex;
    }

    ul li{
        margin:0;
        margin-left: 10px;
    }
}

.user-profile-img{
    position: relative;
    height: 50px;
    border-radius: 50%;
    top: 5px;
}
</style>