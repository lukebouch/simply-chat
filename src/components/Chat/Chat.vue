<script>
import { useChatStore } from "../../stores/chat"
import ChooseChat from "./ChooseChat.vue"

export default {
    components: { ChooseChat },
    data() {
        return {
        }
    }
}
</script>

<template>
    <div class="container px-5">
        <div v-if="code">
            <ChooseChat></ChooseChat>
        </div>
        <div v-else>
            Test
        </div>
    </div>
</template>