<template>
    <base-layout pageTitle="Uitgevoerd">
        <retrieveForms :completed="true" />
    </base-layout>
</template>

<script>
import retrieveForms from '../components/retrieveForms.vue'

export default {
    name: retrieveForms,
    components: {
        retrieveForms
    }
}
</script>