<script>
import RouterLink from "./RouterLink.vue";

export default {
    components: {RouterLink}
}
</script>

<template>
    <div class="py-24 text-center">
        <h1>Need a quick group chat?</h1>
        <p>No account required.</p>
        <RouterLink to="/chat">Start a Chat</RouterLink>
    </div>
</template>