<template>
        <div id="area-dropzone" >
            <div id="close-dropzone"  >
                <h4>Pré-visualizar</h4>
                <i class="bi bi-x-circle" v-on:click="wapp_hide_dropzone()"></i>
            </div>
            <div id="dropz_comment_addbox">
                <img src="" id="dropz_comment_addbox_img">
            </div>
            <div id="dropz_comment_area">
                <input type="text" class="form-control" id="dropz_comment" placeholder="Adicionar uma legenda..." @change="atualiza_coment">
                <button id="dropz_button" @click="wapp_dropz_send_files">
                    <img src="../assets/imgs/iconeenvio.png">
                </button>
            </div>
            <div id="dropz_comment_upload_area">
                <vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions" 
                @vdropzone-complete="afterComplete" 
                @vdropzone-file-added="dropz_check_added_file"
                @vdropzone-removed-file="dropz_show_hide_add_btn"
                @vdropzone-thumbnail="show_in_amostra_img"
                @vdropzone-max-files-reached="alcancou_max"
                @vdropzone-duplicate-file="dropz_arquivo_repetido"
                @vdropzone-sending="alterandoFormData">
                </vue-dropzone>
                <div id="dropz_add_more_btn" @click="dropz_dropzone_click"><h3>Adicionar arquivo</h3></div>
                <div id="dropz_max_files_atingido"><h3>Máximo de arquivos atingido.</h3></div>
            </div>
        </div>
</template>
<script>
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
import axios from "axios";

var cliente="wapp";
var tipo="mensagens";
var $idn='1';
var ismaxfiles=false;
var $arquivo='';
var maxfiles=6;
/// server-to-local
var base_upload="http://localhost";
if(window.location.href.toString().indexOf('localhost')==-1)
    base_upload="http://esystem.com.br";
var files_arr=[];
var send_txt=false;
var coments=[];
var curr_file="";

export default {
  name: 'app',
  components: {
    vueDropzone: vue2Dropzone
  },
  data: function () {
    return {
      dropzoneOptions: {
          url: this.wapp_set_dropzone_url($idn, $arquivo),
          thumbnailWidth: 150,
          maxFilesize: 2.0,
          clickable: true,
          maxFiles: maxfiles,
          addRemoveLinks:true,
          duplicateCheck:true,
          useCustomSlot:true,
          autoProcessQueue: false,
          acceptedFiles: "image/*,application/pdf,.psd,.xlsx,.pptx,.docx",
          headers: { 'Authorization': 'W3xx1Cabcdef12345' },
          dictDefaultMessage: "<i class='bi bi-cloud-upload' style='font-size:22pt;margin-right:10px'></i> Arraste arquivos a enviar",
          dictFallbackMessage:"Seu browser não suporta dropzone."
        ,dictFallbackText:"Tente novamente em alguns dias."
        ,dictFileTooBig:"Arquivo muito grande ({{filesize}}MiB). Max : {{maxFilesize}}MiB."
        ,dictInvalidFileType:"Tipo de arquivo não permitido."
        ,dictResponseError:"Servidor respondeu com código {{statusCode}}."
        ,dictCancelUpload:"Cancelar"
        ,dictCancelUploadConfirmation:"Tem certeza?"
        ,dictRemoveFile:"Remover"
        ,dictMaxFilesExceeded:"Número máximo de arquivos."
      },
      renderComponent: true,
      
    }
  },
    methods:{
        dropz_arquivo_repetido:function(){
            alert('repetido')
        },
        dropz_check_added_file: function(file){
            $arquivo="";
            var dropz=this.$refs.myVueDropzone.dropzone;
            if (dropz.files.length>0) {
                var _i, _len;
                for (_i = 0, _len = dropz.files.length; _i < _len - 1; _i++) // -1 to exclude current file
                {
                    if(dropz.files[_i].name === file.name && dropz.files[_i].size === file.size )
                    {
                        alert('Arquivo repetido!')
                        dropz.removeFile(file);
                        return;
                    }
                }
            }
            
            coments.push(file.name +'==');

            var prog = document.getElementsByClassName('dz-progress')
            //var det = document.getElementsByClassName('dz-details')
            var rem = document.getElementsByClassName('dz-remove')
//            var prev = document.getElementsByClassName('dz-preview')
            ////alert(file.dataURL );
            ///var files=this.$refs.myVueDropzone.dropzone.files
            var i;
            for(i=0;i<prog.length;i++){
                prog[i].style.display="none";
//                det[i].style.opacity="0.1";
                rem[i].style.height="30px";
                rem[i].style.backgroundColor="black";
                rem[i].style.color="white";

            }

            ///alert(file.xhr);
            files_arr.push([file.name+'|||'+file.dataURL])
            file.previewElement.addEventListener("click", function() {
                document.getElementById('dropz_comment_addbox_img').src=file.dataURL;
                var i;
                var comentario="";
                
                for(i=0;i<coments.length;i++){
                    if(coments[i].indexOf(file.name)>-1){
                        var comentx=coments[i].split('==');
                        if(comentx.length>0) comentario=comentx[1];
                    }

                }
                document.getElementById('dropz_comment').value=comentario;
                curr_file=file.name;
            })

            this.dropz_show_hide_add_btn();
        },
        atualiza_coment: function(){
                var i;
                var comentario=document.getElementById('dropz_comment').value;
                
                for(i=0;i<coments.length;i++){
                    if(coments[i].indexOf(curr_file)>-1){
                        var comentx=coments[i].split('==');
                        if(comentx.length>0) {
                            coments[i]=comentx[0]+'=='+comentario;
                        }
                    }

                }
                document.getElementById('dropz_comment').value=comentario;
        },
        alcancou_max:function(){
            
            var myfile=this.$refs.myVueDropzone.dropzone.files[2];
            var dataUrl=this.$refs.myVueDropzone.dropzone.files[1].dataURL;
            
            this.$refs.myVueDropzone.removeFile(myfile) ;
            document.getElementById('dropz_comment_addbox_img').src=dataUrl;
            ismaxfiles=true;
            alert('Numero máximo de arquivos atingido.')
            //document.getElementById('dropz_comment').value="Atingiu o limite e agora?";
            document.getElementById('dropz_add_more_btn').style.display="none";
            document.getElementById('dropz_max_files_atingido').style.display="block";
            
        },
        show_in_amostra_img:function(file, dataUrl){
            if(ismaxfiles){
                ismaxfiles=false;
                return;
            }
            document.getElementById('dropz_comment_addbox_img').src=dataUrl;
            
        },
        wapp_set_dropzone_url:function (idn){
            $idn=idn;
            return base_upload+':6002/upload_permiss?cliente=' + cliente + "&tipo=" + tipo;
        },        
        wapp_hide_dropzone:function(){
            var dropzone=document.getElementById('area-dropzone');
            var ico_emoticon= document.getElementById('msg_ico_emoticon')
            var ico_foguete= document.getElementById('msg_ico_foguete')
            document.getElementById('chat-area-msgs-send').style.display="flex";
            document.getElementById("dropz_add_more_btn").style.display="none";
            document.getElementById('dropz_max_files_atingido').style.display="none";
            document.getElementById('dropz_comment_addbox_img').src="";
            document.getElementById('dropz_comment').value="";
            dropzone.style.display='none';
            ico_emoticon.style.display='block';
            ico_foguete.style.display='block';
            this.$refs.myVueDropzone.removeAllFiles(true);

            var body=document.getElementById('msg_to_send').value;
            if(body!="") this.wapp_dropz_send_msg();


        },
        wap_post_files(){
            
///alert('3')
            this.$refs.myVueDropzone.processQueue();
            this.$refs.myVueDropzone.options.autoProcessQueue = false;
            
            if(this.$refs.myVueDropzone.dropzone.files.length==0) this.wapp_dropz_send_msg();
        },
        afterComplete() {
            this.wapp_hide_dropzone();
        },

        alterandoFormData: function(file, xhr, formData){
            
            formData.append("idn", $idn);
            var user_idn=document.getElementById("user_idn").value;
            var user_fone=document.getElementById("user_fone").value;
            var contato_idn=document.getElementById("contato_idn").value;
            var contato_fone=document.getElementById("contato_fone").value;
            
            formData.append("user_idn", user_idn);
            formData.append("user_fone", user_fone);
            formData.append("contato_idn", contato_idn);
            formData.append("contato_fone", contato_fone);

            var filex=this.$refs.myVueDropzone.dropzone.files;
            var i;
            var novoNomeArquivo;
            var extensao="";
            var arquivos="";
            
            for(i=0;i<filex.length;i++){
                novoNomeArquivo = require('crypto')
                .randomBytes(64)
                .toString('hex').substring(0,12);
                var extx=filex[i].name.split('.');
                extensao=extx[extx.length-1];
                ///alert(novoNomeArquivo+'.'+filex[i].name);
                if(arquivos=="")
                    arquivos=filex[i].name+'=='+novoNomeArquivo+'.'+extensao;
                else 
                    arquivos+='|||'+filex[i].name+'=='+novoNomeArquivo+'.'+extensao;
///                filex[i].name=novoNomeArquivo+'.'+extensao;
            }
            //if($arquivo=="") 
            $arquivo=arquivos;
            formData.append("arquivo", $arquivo);

            var comentarios=""
            for(i=0;i<coments.length;i++){
                if(comentarios=="")
                    comentarios=coments[i];
                else
                    comentarios+='|||'+coments[i];
            }

            formData.append("comentarios", comentarios);

            if(!send_txt){
///mko                this.wapp_dropz_send_msg();
                send_txt=true;
            }else
                send_txt=false;

            ///alert('2 => filex.length '+filex.length + '\n arquivos ' + $arquivo);
            
            //this.wapp_dropz_send_files();
            //alert('alteradno form data')
        },
        wapp_dropz_send_files:function(){
///            alert('1')
            var files=this.$refs.myVueDropzone.dropzone.files;
            if(files.length==0){
                alert('Nenhum arquivo selecionado!');
                return;
            }
            $arquivo="";

            document.getElementById('dropz_comment_addbox_img').src="";
            
            this.$refs.myVueDropzone.processQueue();
            this.$refs.myVueDropzone.options.autoProcessQueue = false;


            /*
            var i;
            var files_to_send=[];
            var url_to_send=[];
            // Insere arquivos num array
            for(i=0;i<files.length;i++){
                files_to_send[i]=files[i];
                url_to_send[i]=files[i].dataURL;
                ///alert('xhr => '+i+'\n'+files[i].fullPath+'\n'+url_to_send[i]);
            }
            var dropz = this.$refs.myVueDropzone; 
            dropz.removeAllFiles(true);
            for(i=0;i<files_to_send.length;i++){
                dropz.manuallyAddFile(files_to_send[i], url_to_send[i]);
                this.$refs.myVueDropzone.processQueue();
            }
            */

//            alert(this.$refs.myVueDropzone.dropzone.files.length)


        },
        remove_all_files(){
            this.$refs.myVueDropzone.removeAllFiles(true);
        },
        dropz_dropzone_click:function(){
            document.getElementById('dropzone').click();
        },
        dropz_show_hide_add_btn: function(){
            var filesin=this.$refs.myVueDropzone.dropzone.files.length
            
            if(filesin==0){
                document.getElementById("dropz_add_more_btn").style.display="none";
                document.getElementById('dropz_comment_addbox_img').src="";
                document.getElementById('dropz_comment').value="";
            } else{
                if(filesin==maxfiles-1){
                    ismaxfiles=true;
                    document.getElementById("dropz_add_more_btn").style.display="none";
                    document.getElementById('dropz_max_files_atingido').style.display="block";
                }else{
                    document.getElementById("dropz_add_more_btn").style.display="block";
                    document.getElementById('dropz_max_files_atingido').style.display="none";
                }
            }
            
            if(filesin>=0){
                var dataUrl=this.$refs.myVueDropzone.dropzone.files[filesin-1].dataURL;
                document.getElementById('dropz_comment_addbox_img').src=dataUrl;
                ismaxfiles=false;
            }
            
        },
        wapp_dropz_send_msg:function(){
            ///alert('');
            var comment= document.getElementById('dropz_comment').value;
            

            alert('6 '+ comment + " \n"+ $arquivo)

//            var host=this.$parent.host;
            var user_idn=document.getElementById("user_idn").value;
//            var user_nome=document.getElementById("user_nome").value;
            var user_fone=document.getElementById("user_fone").value;
            var contato_idn=document.getElementById("contato_idn").value;
            var contato_nome=document.getElementById("contato_nome").value;
            var contato_fone=document.getElementById("contato_fone").value;
            var tipo_midia="imagem_video";

///            alert(host + '\nuser_idn'+user_idn+ '\nuser_nome'+user_nome+ '\nuser_fone'+user_fone+ '\ncontato_idn'+contato_idn+ '\ncontato_nome'+contato_nome+ '\ncontato_fone'+contato_fone)

            axios({
                method: 'post',
                url: this.$parent.host+':6001/wapp/msgs?sender='+user_idn+'&sender_fone='+user_fone+'&idn_contato='+contato_idn
                +"&nome="+contato_nome+'&msgto='+contato_fone+'&tipo_msg=saida&body='+comment+"&crud=midia&tipo_midia="+tipo_midia+"&nome_midia="+$arquivo
            })
            .then(() => {
                setTimeout(() => {
                    var elem = document.getElementById('chat-area-msgs');
                    this.$parent.wapp_load_msgs();
                    setTimeout(() => {
                        elem.scrollTop = elem.clientHeight+20000;
                    }, 500);
                }, 300);
                
                //console.log((response));
            })
            .catch(function (error) {
                alert('ERRO '+error);
            });
            document.getElementById('chat-area-msgs-send').style.display="block";
            document.getElementById('chat-area-emoticons').style.display="none";
            document.getElementById('msg_ico_dropzone').style.display="block";
            document.getElementById('msg_ico_foguete').style.display="block";
            document.getElementById('msg_to_send').value="";
            document.getElementById("dropz_add_more_btn").style.display="none";

        },
        mounted() {
            document.getElementById('dropz_comment_addbox_img').src="";
            document.getElementById('dropz_comment').value="";
        },
        created() {
            alert('criado');
        }
    }
}
</script>
<style lang="css" scoped>
#area-dropzone{
    border: 1px solid var(--color-roxo-claro);
    background: var(--color-background);
    background-size: 40px 40px;
    position: absolute;
    height: calc(100vh - 115px);
    left:0;
    width: 100%;
    top: -8px;
    overflow:auto;
    display: none;

}

#dropzone{
    background: var(--color-cinza);
    position: relative;
    top:-1px;
    display: block;
    border:0;
    height: 270px;
    width: 100%;
}
#close-dropzone{
    background: var(--color-roxo);
    display: flex;
    justify-content: space-between;
    color:white;
    height: 60px;
    left:0;
    width: 100%;
    text-align: right;
    padding-top: 6px;
    padding-right: 20px;
    cursor:grabbing;

}
#close-dropzone i{
    cursor: pointer;
    font-size: 24pt;
}

#close-dropzone h4{
    margin-top:7px;
    margin-left: calc((100vw - 500px) / 2) ;
}
#dropz_comment_area{
    background: var(--color-background);
    height:100px;
    display: flex;
    justify-content: center;
    -ms-flex-item-align: center;
}
#dropz_comment{
    margin-top:30px;
    background: var(--color-background);
    width: calc(100vw - 600px) !important;
    border: 0;
    border-bottom: 2px solid var(--color-roxo);
    
}
#dropz_button{
    position: relative;
    border: 1px solid #ccc;
    background-color: white;
    background-repeat: no-repeat;
    margin-left: 30px;
    border-radius: 50%;
    margin-top:20px;
    width:70px;
    height: 70px !important;
    overflow: hidden;
    box-shadow: 3px 7px 10px rgba(3, 3, 3, 0.3);
    z-index: 20;
}
#dropz_button img{
    width:50px
}
#dropz_comment_addbox{
    background-color: var(--color-background);
    height: calc(100vh - 555px);
    color: var(--color-roxo);
    text-align: center;
}
#dropz_comment_addbox_img{
    position: relative;
    top:10px;
    height:  calc(100vh - 540px);
}
#dropz_comment_upload_area{
    height: 100px;
}
#dropz_add_more_btn{
    background: white;
    color: var(--color-roxo);
    border-radius: 20px;
    height: 200px;
    left: calc((100vw - 560px)/1);
    width:170px;
    margin:20px;
    padding:20px;
    cursor: pointer;
    position:relative;
    top:-250px;
    display: none;
    text-align: center;
    z-index: 20;
}
#dropz_add_more_btn h3{
    padding-top: 40px;
}
#dropz_max_files_atingido{
    background: red;
    color: white;
    border-radius: 20px;
    height: 200px;
    left: calc((100vw - 560px)/1);
    width:170px;
    margin:20px;
    padding:20px;
    cursor: pointer;
    position:relative;
    top:-250px;
    text-align: center;
    display: none;
    z-index: 20;
}
</style>
