<script>
export default {
    props: ['click', 'style'],
}
</script>

<template>
    <button class="inline-block px-4 py-3 font-medium rounded-lg"
        :class="{ 'bg-gray-800 text-white': !style, 'border-2 border-gray-800': style == 'outlined' }"
        v-bind:click="click">
        <slot></slot>
    </button>
</template>