<template>
    <base-layout pageTitle="Reports">
        <ion-card class="reportCard" v-for="report in sortedReports" :key="report.id"
            @click="report.showContent = !report.showContent">
            <ion-card-header class="reportCardHeader">
                <ion-card-title><strong>{{ report.property_location }}</strong></ion-card-title>
                <ion-card-subtitle>{{ report.date }}</ion-card-subtitle>
            </ion-card-header>
            <ion-card-content class="reportCardContent" v-if="report.showContent">
                <div>
                    <ul class="reportList">
                        <li> <strong>Schade</strong>
                            <ul>
                                <li>Locatie: {{ report.report[0].damage_reports.dam_location }}</li>
                                <li>Nieuwe schade: {{ report.report[0].damage_reports.dam_new_damage }}</li>
                                <li>Soort schade: {{ report.report[0].damage_reports.dam_kind_of_damage }}</li>
                                <li>Datum: {{ report.report[0].damage_reports.dam_date_time }}</li>
                                <li>Acute actie vereist: {{ report.report[0].damage_reports.dam_needs_action }}</li>
                                <li>Omschrijving: {{ report.report[0].damage_reports.dam_description }}</li>
                            </ul>
                        </li>
                        <li> <strong>Achterstallig onderhoud</strong>
                            <ul>
                                <li>Locatie: {{ report.report[1].maintenance.main_location }}</li>
                                <li>Soort onderhoud: {{ report.report[1].maintenance.main_kind_of_maintenance }}</li>
                                <li>Acute actie vereist: {{ report.report[1].maintenance.main_needs_action }}</li>
                                <li>Kostenindicatie: {{ report.report[1].maintenance.main_cost_indication }}</li>
                            </ul>
                        </li>
                        <li> <strong>Technische installaties inspecteren</strong>
                            <ul>
                                <li>Locatie: {{ report.report[2].technical_installations.tech_location }}</li>
                                <li>Soort installatie: {{ report.report[2].technical_installations.tech_installation_type }}</li>
                                <li>Gemelde storing: {{ report.report[2].technical_installations.tech_reported_malfunction }}</li>
                                <li>Testprocedure: {{ report.report[2].technical_installations.tech_test_procedure }}</li>
                                <li>Goedgekeurd: {{ report.report[2].technical_installations.tech_approved }}</li>
                                <li>Opmerkingen: {{ report.report[2].technical_installations.tech_remark }}</li>
                            </ul>
                        </li>
                        <li> <strong>Modificaties</strong>
                            <ul>
                                <li>Bestaande situatie: {{ report.report[3].modifications.mod_documented_modifications }}</li>
                                <li>Locatie modificatie: {{ report.report[3].modifications.mod_location }}</li>
                                <li>Uitgevoerd door: {{ report.report[3].modifications.mod_carried_out_by }}</li>
                                <li>Beschrijving modificatie: {{ report.report[3].modifications.mod_modification_type }}</li>
                                <li>Te ondernemen actie: {{ report.report[3].modifications.mod_action }}</li>
                                <li>Opmerkingen: {{ report.report[3].modifications.mod_remark }}</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </ion-card-content>
        </ion-card>
    </base-layout>
</template>
  
<script>
import {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
} from "@ionic/vue";
import { getJsonData } from "@/services/json.service.js";

export default {
    name: "showData",
    data() {
        return {
            jsonData: null,
            reports: [],
        };
    },
    mounted() {
        getJsonData()
            .then((data) => {
                this.reports = data.map((item) => ({
                    id: item.id,
                    property_location: item.property_location,
                    date: item.date,
                    report: item.report,
                    showContent: false,
                }));
                this.sortReports();
            })
            .catch((error) => console.error(error));
    },

    methods: {
        sortReports() {
            return this.reports.sort(
                (a, b) => new Date(b.date) - new Date(a.date));
        },
    },

    computed: {
        sortedReports() {
            return this.reports;
        },
    },

    components: {
        IonCard,
        IonCardHeader,
        IonCardTitle,
        IonCardSubtitle,
        IonCardContent,
    },
};
</script>
  