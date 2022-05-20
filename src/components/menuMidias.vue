<template>

    <div id="menu-midias">
        <div class="show-title" @click="parent_wapp_show_hide_dropzone">
            <i class="bi bi-image-fill"  data-title="Fotos e vídeos" id="menu-midias-1" @mouseover="show_my_data" @mouseout="destroy_my_data"></i>
        </div>
        <div class="show-title">
            <i class="bi bi-file-earmark-fill" data-title="Documentos" id="menu-midias-2" @mouseover="show_my_data" @mouseout="destroy_my_data"></i>
        </div>
        <div class="show-title">
            <img src="../assets/imgs/add-contato.png"  data-title="Contatos" id="menu-midias-3" @mouseover="show_my_data" @mouseout="destroy_my_data">
        </div>
        
        
        

    </div>
</template>


<script>
var cur_title_target;
///import axios from "axios";


export default {
  name: 'miniMenuMidias',
  components: {
    
  },
  data: function () {
    return {
      
    }
  },
    methods:{
        parent_wapp_show_hide_dropzone:function(){
            this.$parent.wapp_show_hide_dropzone();
        },
        show_my_data:function(event){
            var item=event.target;
            if(cur_title_target==item) return;
            cur_title_target=item;
            var titulo=item.dataset.title;
            if(document.getElementById('badge')) document.getElementById('badge').remove();
            var top=parseInt(item.getBoundingClientRect().top);
            if(!titulo) return
        //    alert(top)
//top=200;
            item.insertAdjacentHTML('afterend','<p id="badge" style="top:'+top+'px;left:520px">'+titulo+'</p>');

        },
        memu_midia_show_hide(what){
            
            var elem=document.getElementById('menu-midias');
            if(what!=undefined){
               elem.style.display=what;
               return;
            }
            this.$parent.wapp_dropz_removeall_files();
            if(elem.style.display=="none"){
                elem.style.height="2px";
                elem.style.display="flex";
                setTimeout(() => {
                    elem.style.height="250px";
                    elem.style.top="calc(100vh - 300px)";
                }, 30);
            }else{
                elem.style.height="0px";
                elem.style.top="calc(100vh - 70px)";
                setTimeout(() => {
                    elem.style.display="none";
                }, 100);
            }
        },
        destroy_my_data:function(){
            if(!document.getElementById('badge')) return;
            var elem=document.getElementById('badge');
            setTimeout(() => {
                elem.remove();
            }, 100);
            cur_title_target=null;
            

        }
    },
    mounted() {
        document.getElementById('menu-midias').style.display="none";
    }

}
</script>
<style lang="css" scoped>
#menu-midias{
    position:fixed;
    top: calc(100vh - 70px);
/*    top: calc(100vh - 270px);*/
    border:0px solid red;
    padding: 10px 10px 10px 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    left: 430px;
    height: 0px;
/*    height: 220px;*/
    overflow: hidden;
    transition: visibility 0s, top .1s linear , height .1s linear ;
}

#menu-midias i{
    position: relative;
    font-size:20pt;
}

#menu-midias img{
    width:40px;

}

#menu-midias div{
    background: blue;
    margin: 5px;
    color:white;
    width:55px;
    height:55px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

#menu-midias .div:nth-child(1){
    background: var(--color-pink);
}

#menu-midias div:nth-child(2){
    background: red;
}
#menu-midias div:nth-child(3){
    background: var(--color-roxo);
}
.midia-cj{
    display: flex;
    flex-direction: row;
}


</style>
