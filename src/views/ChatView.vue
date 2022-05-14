<script>
export default {
    data() {
        return {
            enteredCode: null,
            code: null
        }
    }
}
</script>

<template>
    <div v-if="code">
        <div class="flex flex-col justify-between h-48 gap-10 px-5 my-10 text-center container-sm">
            <span class="text-xl">Chat code: <span class="font-bold">{{ code }}</span></span>
        </div>
    </div>
    <div v-else>
        <div class="flex flex-col justify-between h-48 gap-10 px-5 my-10 text-center container-sm">
            <div>
                <h1>Join a Chat</h1>
                <div class="mb-5">
                    <input class="w-full px-2 py-3 text-5xl font-bold tracking-widest text-center border-2 rounded-xl"
                        v-model="enteredCode" type="number" placeholder="00000">
                </div>
                <Button @click="code = enteredCode">Join Chat</Button>
            </div>
            <span class="text-xl">or</span>
            <div>
                <h1>Start a new one</h1>
                <Button>New Chat</Button>
            </div>
        </div>
    </div>
</template>