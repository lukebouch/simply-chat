<script>
export default {
    data() {
        return {
            code: null
        }
    }
}
</script>

<template>
    <div class="flex flex-col justify-between h-48 gap-10 px-5 my-10 text-center container-sm">
        <div>
            <h1>Join a Chat</h1>
            <div class="mb-5">
                <input class="w-full px-2 py-3 text-5xl font-bold tracking-widest text-center border-2 rounded-xl"
                    v-model="code" type="number" placeholder="00000">
            </div>
            <Button>Join Chat</Button>
        </div>
        <span class="text-xl">or</span>
        <div>
            <h1>Start a new one</h1>
            <Button>New Chat</Button>
        </div>
    </div>
</template>