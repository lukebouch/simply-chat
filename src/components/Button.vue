<script>
export default {
    props: ['click', 'style'],
}
</script>

<template>
    <button class="inline-block py-3 px-4 rounded-lg font-medium" :class="{'bg-gray-800 text-white': !style, 'border-2 border-gray-800': style == 'outlined' }" v-bind:click="click">
        <slot></slot>
    </button>
</template>