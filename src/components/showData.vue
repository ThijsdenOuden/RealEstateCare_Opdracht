<template>
    <base-layout pageTitle="Reports">
        <ion-card class="reportCard" v-for="report in sortedReports" :key="report.id">
            <ion-card-header class="reportCardHeader">
                <ion-card-title>{{ report.property_location }}</ion-card-title>
            </ion-card-header>
            <ion-card-content class="reportCardContent">
                {{ report.date }}
            </ion-card-content>
        </ion-card>
    </base-layout>
</template>

<script>
import {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent
} from '@ionic/vue';
import { getJsonData } from '@/services/json.service.js';

export default {
    name: 'showData',
    data() {
        return {
            jsonData: null,
            reports: []
        }
    },
    mounted() {
        getJsonData()
            .then(data => {
                this.reports = data.map(item => ({
                    id: item.id,
                    property_location: item.property_location,
                    date: item.date,
                    report: item.report
                }));
                this.sortReports();
            })
            .catch(error => console.error(error));
    },

    methods: {
        sortReports() {
            return this.reports.sort((a, b) => new Date(b.date) - new Date(a.date));
        }
    },

    computed: {
        sortedReports() {
            return this.reports;
        }
    },

    components: {
        IonCard,
        IonCardHeader,
        IonCardTitle,
        IonCardContent
    }
}
</script>