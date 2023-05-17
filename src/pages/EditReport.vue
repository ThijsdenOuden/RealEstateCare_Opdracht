<template>
    <base-layout pageTitle="Aanpassen">
        <section class="contentOverflow">
            <form class="assignForm">
                <div class="formHeader">
                    <div class="inputColumn">
                        <label for="property_location"></label>
                        <ion-input
                          type="text"
                          id="property_location"
                          fill="outline"
                          placeholder="Straat+nr , Plaats"
                          v-model="report.property_location"
                          required></ion-input>
                    </div>
                    <div class="inputDisabled">
                        <label>ID:</label>
                        <h4>{{ report.id }}</h4>
                    </div>
                    <div class="input">
                        <label for="property_date">Datum:</label>
                        <input type="date" id="property_date" v-model="report.date_inspection" required />
                    </div>
                    <input type="hidden" v-model="report.report_completed">
                </div>
                <damageReport />
                <maintenanceReport />
                <installationReport />
                <modificationReport />
                <ion-button
                  @click="updateReport"
                  id="submit"
                  expand="block"
                  fill="outline">Opslaan niet afronden</ion-button>
                <ion-button
                  @click="completeReport"
                  class="formButton confirm">
                    Opslaan en afronden</ion-button>
            </form>
        </section>
    </base-layout>
</template>

<script>
import { mapState } from 'vuex';
import {
    IonButton,
    IonInput,
    toastController
} from '@ionic/vue';
import damageReport from '../components/damageReport.vue';
import maintenanceReport from '../components/maintenanceReport.vue';
import installationReport from '../components/installationReport.vue';
import modificationReport from '../components/modificationReport.vue';

export default {
    name: 'allReportForms',
    components: {
        damageReport,
        maintenanceReport,
        installationReport,
        modificationReport,
        IonButton,
        IonInput
    },
    computed: {
        ...mapState({
            report: (state) => state.report,
        }),
    },
    methods: {
        updateReport() {
            this.$store.dispatch('updateReport')
                .then(() => {
                    this.presentToast();
                    this.$router.replace('/AssignedReports');
                })
                .catch(error => {
                    this.errorToast();
                    console.error(error);
                });
        },
        completeReport() {
            this.$store.dispatch('completedReports')
                .then(() => {
                    this.presentToastComplete();
                    this.$router.replace('/PerformedReports');
                })
                .catch(error => {
                    this.errorToast();
                    console.error(error);
                });
            },
            async presentToast() {
            const toast = await toastController.create({
                message: "Het rapport is succesvol opgeslagen!",
                cssClass: 'toast',
                duration: 8000,
                position: 'top'
            });

            await toast.present();
        },
        async presentToastComplete() {
            const toast = await toastController.create({
                message: "Het rapport is succesvol afgerond!",
                cssClass: 'toast',
                duration: 8000,
                position: 'top'
            });

            await toast.present();
        },
        async errorToast() {
            const toast = await toastController.create({
                message: "Het rapport is niet succesvol aangepast!",
                cssClass: 'errToast',
                duration: 5000,
                position: 'top',
                icon: 'alert-circle-outline'
            });

            await toast.present();
        },
    }
};
</script>