<script setup>
    import {RouterLink} from 'vue-router'
    
    defineProps({
        to:{
            type: String
        }
    })
</script>

<template>
    <div>
        <RouterLink 
                class="block md:inline-block rounded bg-blue-500 py-2 px-3
                 text-white font-bold uppercase text-sm shadow hover:bg-blue-600"
                :to="{name: to}">
                    <slot></slot>
            </RouterLink>
    </div>
</template>



