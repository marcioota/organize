<template>
    <main>

        <div class="text-top">Use a sua <b>Criatividade</b> e tome as <b>Decisões Corretas</b></div>
        <a href="http://www.esystem.com.br" target="_blank">
            <img alt="qualquerr coisa" id="subscribe" src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/subscribe.svg">
        </a>

        <h1 @click="digaMe" id="cordoba">A corda</h1>


        <button id="bt1" @click="telMe" class=' btn-esys-1'>Toggle</button>
        <button class=' btn-esys-2' v-on:click="sayit2">Toggle 2 </button>

<h1 v-if="awesome">Vue is awesome!</h1>
<h1 v-else>Oh no 😢</h1>
        <div id="h1"></div>

        
    </main>
    
</template>

<script>

const YourCustomModule = require("../assets/js/header.js");
alert(YourCustomModule.message);

export default {
    name: 'Home',
    methods:{
        digaMe: function(){
//            alert(document.getElementsByClassName('mini-menu-block').length);
//            document.getElementsByClassName('menu-show-hide').checked=!document.getElementsByClassName('menu-show-hide').checked;
            document.getElementById('btn-show-hide-main-menu').click();
            //alert(document.getElementsByClassName('menu-show-hide').checked)
        },
        closeMenu: function(){
            this.menuActive = false;
        },
        sayit2: function(){
            document.getElementById('btn-show-hide-main-menu').click();    
        },
        telMe: function(){
            alert('Sou bom no que faço!')
        }
        
    },
     mounted() {
        this.dataSrc = "../assets/js/header.js";
        var el=document.getElementsByClassName("mini-menu-item-cell")
        var i=0;
        for(i=0;i<el.length;i++){
            el[i].classList.remove("active");
        }
        document.getElementById('btn-show-hide-main-menu').click();
        alert('mounted')

  },
  created() {
      setTimeout(() => {
        let doc = document.createElement('script');  
        doc.setAttribute('src',"../assets/js/header.js");
        document.main.appendChild(doc);
      }, 100);
        document.getElementsByClassName('btn-esys-1').addEventListener("onclick", 'alert("opa")');
        alert('created')
    }

}
</script>



<style scoped>
main{
    background-color: var(--color-background-home);
    justify-content: center;
    align-items: center;
}
    .text-top{
        color: var(--color-text-light);
        font-size: 22pt;
        margin-bottom: 20px;
    }
    #subscribe {
        width: 340px;
    }
    .text-bottom{
        color: var(--color-text-light);
        font-size: 18pt;
        margin-top: 20px;
    }

.mini-menu-item-grp{
    display: none;
}
    @media (min-width:700px){
        #subscribe {
            width: 600px;
        }

    }
</style>