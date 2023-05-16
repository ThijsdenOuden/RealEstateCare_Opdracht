<template>
    <section class="form">
        <div
          class="formTitle"
          @click="showForm = !showForm">
            <h4>Installatie</h4>
        </div>
        <div v-show="showForm">
            <div class="inputColumn">
                <label for="tech_location">Locatie van de installatie:</label>
                <ion-input
                  type="text"
                  id="tech_location"
                  v-model="Tech.tech_location" />
            </div>
            <div class="inputColumn">
                <label for="tech_installation_type">Soort installatie:</label>
                <ion-select
                  id="tech_installation_type"
                  v-model="Tech.tech_installation_type"
                  placeholder="Selecteer"
                  interface="action-sheet">
                    <ion-select-option value="Koeling">Koeling</ion-select-option>
                    <ion-select-option value="Verwarming">Verwarming</ion-select-option>
                    <ion-select-option value="Lucht Verversing">Lucht Verversing</ion-select-option>
                    <ion-select-option value="Electra">Electra</ion-select-option>
                    <ion-select-option value="Beveiliging">Beveiliging</ion-select-option>
                </ion-select>
            </div>
            <div class="inputColumn">
                <label for="tech_reported_malfunction">Gemelde storing:</label>
                <ion-input
                  type="text"
                  id="tech_reported_malfunction"
                  v-model="Tech.tech_reported_malfunction" />
                  </div>
            <Router-link to="/databaseDocs">
                <ion-button
                  id="testProcedures"><ion-icon
                  name="document-text-outline"></ion-icon>
                  Test procedures</ion-button>
            </Router-link>
            <div class="input">
                <label for="tech_approved">Goedgekeurd:</label>
                <ion-checkbox
                  id="tech_approved"
                  v-model="Tech.tech_approved"></ion-checkbox>
            </div>
            <div class="inputColumn">
                <label for="tech_remark">Opmerking:</label>
                <ion-input
                  type="text"
                  id="tech_remark"
                  v-model="Tech.tech_remark" />
            </div>
            <div class="inputColumn">
                <ion-button class="imageButton" type="button" @click="() => takePhoto('image1')">Foto maken</ion-button>
                <ion-input class="imageInput" type="url" v-model="Tech.tech_images.image1"></ion-input>
                <ion-button class="imageButton" type="button" @click="() => takePhoto('image2')">Foto maken</ion-button>
                <ion-input class="imageInput" type="url" v-model="Tech.tech_images.image2"></ion-input>
                <ion-button class="imageButton" type="button" @click="() => takePhoto('image3')">Foto maken</ion-button>
                <ion-input class="imageInput" type="url" v-model="Tech.tech_images.image3"></ion-input>
            </div>
        </div>
    </section>
</template>

<script>
import { mapState }from 'vuex';
import {
    IonButton,
    IonInput,
    IonCheckbox,
    IonSelect,
    IonSelectOption,
    IonIcon
} from '@ionic/vue';
import { Camera, CameraResultType } from '@capacitor/camera';

export default {
    name: "installationReport",
    components: {
        IonButton,
        IonInput,
        IonCheckbox,
        IonSelect,
        IonSelectOption,
        IonIcon
    },
    methods: {
        async takePhoto(imageKey) {
        try {
            const image = await Camera.getPhoto({
            quality: 90,
            allowEditing: false,
            resultType: CameraResultType.Uri,
            });
            const imageUrl = image.webPath;
            this.Tech.tech_images[imageKey] = imageUrl;
        } catch (error) {
            console.error('Camera error:', error);
        }
        },
    },
    computed: {
        ...mapState({
            Tech: state => state.report.report && state.report.report.length > 0 ? state.report.report[2].technical_installations || {} : {}
        }),
    },
    data() {
        return {
            showForm: false,
        }
    }
}
</script>