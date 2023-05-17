<template>
    <section class="form">
        <div
          class="formTitle"
          @click="showForm = !showForm">
            <h4>Modificatie</h4>
        </div>
        <div v-show="showForm">
            <div class="inputColumn">
                <label for="mod_documented_modifications">Bestaande modificaties:</label>
                <ion-input
                  type="url"
                  id="mod_documented_modifications"
                  v-model="Modification.mod_documented_modifications" />
            </div>
            <div class="inputColumn">
                <label for="mod_location">Locatie van de modificatie:</label>
                <ion-input
                  type="text"
                  id="mod_location"
                  v-model="Modification.mod_location" />
            </div>
            <div class="inputColumn">
                <label for="mod_carried_out_by">Uitgevoerd door:</label>
                <ion-select
                  id="mod_carried_out_by"
                  v-model="Modification.mod_carried_out_by"
                  placeholder="Selecteer"
                  interface="action-sheet">
                    <ion-select-option value="Huurder">Huurder</ion-select-option>
                    <ion-select-option value="RealEstateCare">RealEstateCare</ion-select-option>
                    <ion-select-option value="Onbekend">Onbekend</ion-select-option>
                    <ion-select-option value="Anders">Anders</ion-select-option>
                </ion-select>
            </div>
            <div class="inputColumn">
                <label for="mod_modification_type">Beschrijving modificatie:</label>
                <ion-input
                  type="text"
                  id="mod_modification_type"
                  v-model="Modification.mod_modification_type" />
            </div>
            <div class="inputColumn">
                <label for="mod_action">Te ondernemen actie:</label>
                <ion-select
                  id="mod_action"
                  v-model="Modification.mod_action"
                  placeholder="Selecteer"
                  interface="action-sheet">
                    <ion-select-option value="Accepteren">Accepteren</ion-select-option>
                    <ion-select-option value="Laten keuren">Laten Keuren</ion-select-option>
                    <ion-select-option value="Verwijderen">Verwijderen</ion-select-option>
                    <ion-select-option value="Aanpassen en keuren">Aanpassen en keuren</ion-select-option>
                </ion-select>
            </div>
            <div class="inputColumn">
                <label for="mod_remark">Opmerking:</label>
                <ion-input
                  type="text"
                  id="mod_remark"
                  v-model="Modification.mod_remark" />
            </div>
            <div class="inputColumn">
                <ion-button class="imageButton" type="button" @click="() => takePhoto('image1')">Foto maken</ion-button>
                <ion-input class="imageInput" type="url" v-model="Modification.mod_image1"></ion-input>
                <ion-button class="imageButton" type="button" @click="() => takePhoto('image2')">Foto maken</ion-button>
                <ion-input class="imageInput" type="url" v-model="Modification.mod_image2"></ion-input>
                <ion-button class="imageButton" type="button" @click="() => takePhoto('image3')">Foto maken</ion-button>
                <ion-input class="imageInput" type="url" v-model="Modification.mod_image3"></ion-input>
            </div>
        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex';
import {
    IonInput,
    IonSelect,
    IonSelectOption,
    IonButton
} from '@ionic/vue';
import { Camera, CameraResultType } from '@capacitor/camera';

export default {
    name: "modificationReport",
    components: {
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
            this.Modification[`mod_${imageKey}`] = imageUrl;
        } catch (error) {
            console.error('Camera error:', error);
        }
        },
    },
    computed: {
        ...mapState({
          Modification: state => state.report.report && state.report.report.length > 0 ? state.report.report[3].modifications || {} : {}
        }),
    },
    data() {
        return {
            showForm: false,
        };
    }
}
</script>