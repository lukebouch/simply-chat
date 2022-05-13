<script>
import { useChatStore } from "../../stores/chat"
import Button from "../Button.vue"
import ChooseChat from "./ChooseChat.vue"

export default {
    components: { Button, ChooseChat },
    setup() {
        const chat = useChatStore();
    },
    data() {
        return {
            code: chat.code,
        }
    }
}
</script>

<template>
    <div class="container px-5">
        <div v-if="false">
            <ChooseChat></ChooseChat>
        </div>
        <div v-else>
            Test
        </div>
    </div>
</template>