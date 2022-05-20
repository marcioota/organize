<template>
  <div>
    <ChatEmoticons></ChatEmoticons>
                <b>Opaco</b>
            <b>Opaco</b>
<vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions">

</vue-dropzone>

  </div>
</template>
<script>
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'

import ChatEmoticons from '../components/ChatEmoticons'
export default {
  components: { 
    ChatEmoticons ,
    vueDropzone: vue2Dropzone
  },
  data: function () {
    return {
      dropzoneOptions: {
          url: 'https://httpbin.org/post',
          thumbnailWidth: 150,
          maxFilesize: 0.5,
          headers: { "My-Awesome-Header": "header value" }
      }
    }
  },
    async mounted() {
    }
}

</script>