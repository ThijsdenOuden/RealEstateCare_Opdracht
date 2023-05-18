<template>
  <section class="form">
    <div
      class="formTitle"
      @click="showForm = !showForm">
      <h4>Schade
        <ion-icon name="chevron-down-outline"></ion-icon>
      </h4>
    </div>
    <div v-show="showForm">
      <div class="inputColumn">
        <label for="dam_location">Locatie van de schade:</label>
        <ion-input
          type="text"
          fill="outline"
          id="dam_location"
          v-model="damageReport.dam_location" />
      </div>
      <div class="input">
        <label for="dam_new_damage">Nieuwe schade:</label>
        <ion-checkbox
          id="dam_new_damage"
          v-model="damageReport.dam_new_damage"></ion-checkbox>
      </div>
      <div class="inputColumn">
        <label for="dam_kind_of_damage">Soort schade:</label>
        <ion-select
          id="dam_kind_of_damage"
          v-model="damageReport.dam_kind_of_damage"
          placeholder="Selecteer"
          interface="action-sheet">
          <ion-select-option value="Moedwillig">Moedwillig</ion-select-option>
          <ion-select-option value="Slijtage">Slijtage</ion-select-option>
          <ion-select-option value="Geweld">Geweld</ion-select-option>
          <ion-select-option value="Normaal gebruik">Normaal gebruik</ion-select-option>
          <ion-select-option value="Calamiteit">Calamiteit</ion-select-option>
          <ion-select-option value="Anders">Anders</ion-select-option>
        </ion-select>
      </div>
      <div class="input">
        <label for="dam_date_time">Datum:</label>
        <input
          type="date"
          id="dam_date_time"
          v-model="damageReport.dam_date_time">
      </div>
      <div class="input">
        <label for="dam_needs_action">Acute actie vereist:</label>
        <ion-checkbox
          id="dam_needs_action"
          v-model="damageReport.dam_needs_action"></ion-checkbox>
      </div>
      <div class="inputColumn">
        <label for="dam_description">Omschrijving:</label>
        <ion-input
          type="text"
          id="dam_description"
          v-model="damageReport.dam_description" />
      </div>
      <div class="inputColumn">
        <ion-button
          class="imageButton"
          type="button"
          @click="() => takePhoto('image1')">Foto maken</ion-button>
          <ion-input
          class="imageInput"
          type="url"
          v-model="damageReport.dam_image1"></ion-input>
          <ion-button
          class="imageButton"
          type="button"
          @click="() => takePhoto('image2')">Foto maken</ion-button>
          <ion-input
          class="imageInput"
          type="url"
          v-model="damageReport.dam_image2"></ion-input>
          <ion-button
          class="imageButton"
          type="button"
          @click="() => takePhoto('image3')">Foto maken</ion-button>
          <ion-input
          class="imageInput"
          type="url"
          v-model="damageReport.dam_image3"></ion-input>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';
import {
  IonCheckbox,
  IonSelect,
  IonSelectOption,
  IonInput,
  IonButton,
  IonIcon
} from '@ionic/vue';
import { Camera, CameraResultType } from '@capacitor/camera';

export default {
  name: "damageReport",
  components: {
    IonCheckbox,
    IonSelect,
    IonSelectOption,
    IonInput,
    IonButton,
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
        this.damageReport[`dam_${imageKey}`] = imageUrl;
      } catch (error) {
        console.error('Camera error:', error);
      }
    },
  },
  computed: {
    ...mapState({
      damageReport: state => state.report.report && state.report.report.length > 0 ? state.report.report[0].damage_reports || {} : {}
    })
  },
  data() {
    return {
      showForm: false,
      imageUrl: null,
    };
  },
};
</script>