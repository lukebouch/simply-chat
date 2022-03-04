<script>
import Button from "../Button.vue"
export default {
    components: { Button },
    data() {
        return {
            code: undefined,
        }
    },
    methods: {
        joinChat() {
            console.log(`Joining chat with code ${this.code}`)
        },
        newChat() {
            console.log('Creating a new chat just for you... and your friends!')
        },
    },
}
</script>

<template>
<div class="h-48 my-10 flex flex-col justify-between gap-10 text-center">
    <div>
        <h1>Join a Chat</h1>
        <div class="mb-5">
            <input class="w-full px-2 py-3 border-2 text-5xl font-bold text-center rounded-xl tracking-widest" v-model="code" type="number" placeholder="00000">
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