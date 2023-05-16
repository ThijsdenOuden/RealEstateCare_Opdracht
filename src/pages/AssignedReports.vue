<template>
    <base-layout pageTitle="Toegewezen">
        <retrieve-forms :completed="false" />
    </base-layout>
</template>

<script>
import retrieveForms from '../components/retrieveForms.vue'

export default {
    name: 'AssignedReports',
    components: {
        retrieveForms
    }
}
</script>