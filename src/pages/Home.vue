<template>
    <main>

        <div class="text-top">Topo do texto <b>aaaaa</b> as <b>asdasdsa</b></div>
        <a href="http://www.esystem.com.br" target="_blank">
            <img alt="qualquerr coisa" id="subscribe" src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/subscribe.svg">
        </a>
        <div class="text-bottom">Rodape do texto <b>aaaaa</b> as <b>asdasdsa</b></div>
    </main>
</template>

<script>
export default {
    name: 'Home'
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

    @media (min-width:700px){
        #subscribe {
            width: 600px;
        }

    }
</style>