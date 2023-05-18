<template>
    <ion-spinner
      v-if="loading"
      name="circular"
      id="spinner"></ion-spinner>
    <ion-card
      class="reportCard"
      v-for="report in sortedReports"
      :key="report.id"
      @click="report.showContent = !report.showContent">
        <ion-card-header class="reportCardHeader">
            <ion-icon
              name="checkmark-circle-outline"
              class="confirmIcon"
              v-if="completed == true"></ion-icon>
            <ion-card-title class="cardTitle">
                <strong>{{ report.property_location }}</strong>
            </ion-card-title>
            <ion-card-subtitle class="cardSubtitle">
                {{ report.date_inspection }}
            </ion-card-subtitle>
        </ion-card-header>

        <ion-card-content
          class="reportCardContent"
          v-if="report.showContent">
            <div>
                <h4>ID: {{ report.id }}</h4>
                <div class="editButton">
                    <ion-button
                      @click='editForm(report.id)'
                      class="formButton">
                        <ion-icon name="create-outline"></ion-icon>
                        Openen en aanpassen</ion-button>
                </div>
                <ul class="reportList">
                    <li class="listPart">
                        <div class="listHeader">
                            <strong>Schade</strong>
                        </div>
                        <ul class="listItems">
                            <li class="itemTitle">Locatie:</li>
                            <li class="itemContent">{{ report.report[0].damage_reports.dam_location }}</li>
                            <li class="itemTitle">Nieuwe schade:</li>
                            <li class="itemContent">{{ report.report[0].damage_reports.dam_new_damage }}</li>
                            <li class="itemTitle">Soort schade:</li>
                            <li class="itemContent">{{ report.report[0].damage_reports.dam_kind_of_damage }}</li>
                            <li class="itemTitle">Datum:</li>
                            <li class="itemContent">{{ report.report[0].damage_reports.dam_date_time }}</li>
                            <li class="itemTitle">Acute actie vereist:</li>
                            <li class="itemContent">{{ report.report[0].damage_reports.dam_needs_action }}</li>
                            <li class="itemTitle">Omschrijving:</li>
                            <li class="itemContent">{{ report.report[0].damage_reports.dam_description }}</li>
                            <li class="itemTitle">Foto's:</li>
                            <li class="itemContent smallerText"> {{ report.report[0].damage_reports.dam_image1 }}</li>
                            <li class="itemContent smallerText"> {{ report.report[0].damage_reports.dam_image2 }}</li>
                            <li class="itemContent smallerText"> {{ report.report[0].damage_reports.dam_image3 }}</li>
                        </ul>
                    </li>
                    <li class="listPart">
                        <div class="listHeader padding-top">
                            <strong>Achterstallig onderhoud</strong>
                        </div>
                        <ul class="listItems">
                            <li class="itemTitle">Locatie:</li>
                            <li class="itemContent">{{ report.report[1].maintenance.main_location }}</li>
                            <li class="itemTitle">Soort onderhoud:</li>
                            <li class="itemContent">{{ report.report[1].maintenance.main_kind_of_maintenance }}</li>
                            <li class="itemTitle">Acute actie vereist:</li>
                            <li class="itemContent">{{ report.report[1].maintenance.main_needs_action }}</li>
                            <li class="itemTitle">Kostenindicatie:</li>
                            <li class="itemContent">{{ report.report[1].maintenance.main_cost_indication }}</li>
                            <li class="itemTitle">Foto's:</li>
                            <li class="itemContent smallerText"> {{ report.report[1].maintenance.main_image1 }}</li>
                            <li class="itemContent smallerText"> {{ report.report[1].maintenance.main_image2 }}</li>
                            <li class="itemContent smallerText"> {{ report.report[1].maintenance.main_image3 }}</li>
                        </ul>
                    </li>
                    <li class="listPart">
                        <div class="listHeader padding-top">
                            <strong>Technische installaties</strong>
                        </div>
                        <ul class="listItems">
                            <li class="itemTitle">Locatie:</li>
                            <li class="itemContent">{{ report.report[2].technical_installations.tech_location }}</li>
                            <li class="itemTitle">Soort installatie:</li>
                            <li class="itemContent">{{ report.report[2].technical_installations.tech_installation_type }}
                            </li>
                            <li class="itemTitle">Gemelde storing:</li>
                            <li class="itemContent">{{ report.report[2].technical_installations.tech_reported_malfunction }}
                            </li>
                            <li class="itemTitle">Goedgekeurd:</li>
                            <li class="itemContent">{{ report.report[2].technical_installations.tech_approved }}</li>
                            <li class="itemTitle">Opmerkingen:</li>
                            <li class="itemContent">{{ report.report[2].technical_installations.tech_remark }}</li>
                            <li class="itemTitle">Foto's:</li>
                            <li class="itemContent smallerText"> {{ report.report[2].technical_installations.tech_image1 }}</li>
                            <li class="itemContent smallerText"> {{ report.report[2].technical_installations.tech_image2 }}</li>
                            <li class="itemContent smallerText"> {{ report.report[2].technical_installations.tech_image3 }}</li>
                        </ul>
                    </li>
                    <li class="listPart">
                        <div class="listHeader padding-top">
                            <strong>Modificaties</strong>
                        </div>
                        <ul class="listItems">
                            <li class="itemTitle">Bestaande situatie:</li>
                            <li class="itemContent">{{ report.report[3].modifications.mod_documented_modifications }}</li>
                            <li class="itemTitle">Locatie modificatie:</li>
                            <li class="itemContent">{{ report.report[3].modifications.mod_location }}</li>
                            <li class="itemTitle">Uitgevoerd door:</li>
                            <li class="itemContent">{{ report.report[3].modifications.mod_carried_out_by }}</li>
                            <li class="itemTitle">Beschrijving modificatie:</li>
                            <li class="itemContent">{{ report.report[3].modifications.mod_modification_type }}</li>
                            <li class="itemTitle">Te ondernemen actie:</li>
                            <li class="itemContent">{{ report.report[3].modifications.mod_action }}</li>
                            <li class="itemTitle">Opmerkingen:</li>
                            <li class="itemContent">{{ report.report[3].modifications.mod_remark }}</li>
                            <li class="itemTitle">Foto's:</li>
                            <li class="itemContent smallerText"> {{ report.report[3].modifications.mod_image1 }}</li>
                            <li class="itemContent smallerText"> {{ report.report[3].modifications.mod_image2 }}</li>
                            <li class="itemContent smallerText"> {{ report.report[3].modifications.mod_image3 }}</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </ion-card-content>
    </ion-card>
</template>
  
<script>
import {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonButton,
    IonIcon,
    IonSpinner
} from "@ionic/vue";
import { mapGetters } from "vuex";

export default {
    name: "performedReports",
    props: {
        completed: {
            type: Boolean,
            default: false,
        },
    },
    components: {
        IonCard,
        IonCardHeader,
        IonCardTitle,
        IonCardSubtitle,
        IonCardContent,
        IonButton,
        IonIcon,
        IonSpinner
    },
    data() {
        return {
            reports: [],
        };
    },
    mounted() {
        this.$store.dispatch('loadReports');
    },
    methods: {
        editForm(reportId) {
            this.$store.dispatch('editReport', reportId);
            this.$router.replace('/editReport');
        },
    },
    computed: {
        ...mapGetters(['loading']),
        sortedReports() {
            const reports = this.$store.getters.sortedReports;
            if (this.completed) {
                return reports.filter((report) => report.report_completed);
            } else {
                return reports.filter((report) => !report.report_completed);
            }
        }
    }
};
</script>
  