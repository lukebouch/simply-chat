<script>
export default {
    props: ['to', 'class']
}
</script>

<template>
    <router-link class="inline-block py-3 px-4 rounded bg-gray-800 font-medium text-white" :class="class" v-bind:to="to">
        <slot></slot>
    </router-link>
</template>