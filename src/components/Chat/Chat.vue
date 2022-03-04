<script>
import Button from "../Button.vue"
import ChooseChat from "./ChooseChat.vue"

export default {
    components: { Button, ChooseChat },
    data() {
        
    }
}
</script>

<template>
    <div class="container px-5">
        <div v-if="true">
            <ChooseChat></ChooseChat>
        </div>
        <div v-else>
        
        </div>
    </div>
</template>