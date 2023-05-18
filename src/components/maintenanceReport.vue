<template>
    <section class="form">
        <div
          class="formTitle"
          @click="showForm = !showForm">
            <h4>Onderhoud
                <ion-icon name="chevron-down-outline"></ion-icon>
            </h4>
        </div>
        <div v-show="showForm">
            <div class="inputColumn">
                <label for="main_location">Locatie van het onderhoud:</label>
                <ion-input
                  type="text"
                  id="main_location"
                  v-model="maintenance.main_location" />
            </div>
            <div class="inputColumn">
                <label for="main_kind_of_maintenance">Soort onderhoud:</label>
                <ion-select
                  id="main_kind_of_maintenance"
                  v-model="maintenance.main_kind_of_maintenance"
                  placeholder="Selecteer"
                  interface="action-sheet">
                    <ion-select-option value="Schilderwerk">Schilderwerk</ion-select-option>
                    <ion-select-option value="Houtrot">Houtrot</ion-select-option>
                    <ion-select-option value="Electra">Electra</ion-select-option>
                    <ion-select-option value="Leidingwerk">Leidingwerk</ion-select-option>
                    <ion-select-option value="Beglazing">Beglazing</ion-select-option>
                </ion-select>
            </div>
            <div class="input">
                <label for="main_needs_action">Acute actie vereist:</label>
                <ion-checkbox
                  id="main_needs_action"
                  v-model="maintenance.main_needs_action"></ion-checkbox>
            </div>
            <div class="inputColumn">
                <label for="main_cost_indication">Kosten indicatie:</label>
                <ion-select
                  id="main_cost_indication"
                  v-model="maintenance.main_cost_indication"
                  placeholder="Selecteer"
                  interface="action-sheet">
                    <ion-select-option value="0-500">0-500</ion-select-option>
                    <ion-select-option value="500-1500">500-1500</ion-select-option>
                    <ion-select-option value="1500+">1500+</ion-select-option>
                </ion-select>
            </div>
            <div class="inputColumn">
                <ion-button
                  class="imageButton"
                  type="button"
                  @click="() => takePhoto('image1')">Foto maken</ion-button>
                  <ion-input
                  class="imageInput"
                  type="url"
                  v-model="maintenance.main_image1"></ion-input>
                  <ion-button
                  class="imageButton"
                  type="button"
                  @click="() => takePhoto('image2')">Foto maken</ion-button>
                  <ion-input
                  class="imageInput"
                  type="url"
                  v-model="maintenance.main_image2"></ion-input>
                  <ion-button
                  class="imageButton"
                  type="button"
                  @click="() => takePhoto('image3')">Foto maken</ion-button>
                  <ion-input
                  class="imageInput"
                  type="url"
                  v-model="maintenance.main_image3"></ion-input>
            </div>
        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex';
import {
    IonCheckbox,
    IonInput,
    IonSelect,
    IonSelectOption,
    IonButton
} from '@ionic/vue';
import { Camera, CameraResultType } from '@capacitor/camera';

export default {
    name: "maintenanceReport",
    components: {
        IonCheckbox,
        IonInput,
        IonSelect,
        IonSelectOption,
        IonButton
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
            this.maintenance[`main_${imageKey}`] = imageUrl;
        } catch (error) {
            console.error('Camera error:', error);
        }
        }
    },
    computed: {
        ...mapState({
          maintenance: state => state.report.report && state.report.report.length > 0 ? state.report.report[1].maintenance || {} : {}
        }),
    },
    data() {
        return {
            showForm: false,
        }
    }
}
</script>