<script>
import { useChatStore } from "../../stores/chat"

import Button from "../Button.vue"
import ChatVue from "./Chat.vue"
export default {
    setup() {
        const store = useChatStore();
        return store;
    },
    components: { Button },
    data() {
        return {
            code: undefined,
        }
    },
    methods: {
        joinChat() {
            console.log(`Joining chat with code ${this.code}`)
            store.code = this.code
        },
        newChat() {
            console.log('Creating a new chat just for you... and your friends!')
        },
    },
}
</script>

<template>
    <div class="container flex flex-col justify-between h-48 gap-10 px-5 my-10 text-center">
        <div>
            <h1>Join a Chat</h1>
            <div class="mb-5">
                <input class="w-full px-2 py-3 text-5xl font-bold tracking-widest text-center border-2 rounded-xl"
                    v-model="code" type="number" placeholder="00000">
            </div>
            <Button @click="joinChat">Join Chat</Button>
        </div>
        <span class="text-xl">or</span>
        <div>
            <h1>Start a new one</h1>
            <Button @click="newChat">New Chat</Button>
        </div>
    </div>
</template>

<style>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Firefox */
input[type=number] {
    -moz-appearance: textfield;
}
</style>