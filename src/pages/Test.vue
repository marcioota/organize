<template>
  <div v-html="legacySystemHTML">
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Just like JSX! Oh wait...
      legacySystemHTML: `
        
          <MARQUEE>Please enter your name to continue.</MARQUEE>
        
      `
    }
  }
}
</script>