<script>
import Nav from "./components/Nav.vue";

export default {
    components: { Nav }
}

</script>

<template>
    <header>
        <Nav />
    </header>
    <main class="max-w-5xl mx-auto">
        <router-view></router-view>
    </main>
</template>

<style>
</style>
