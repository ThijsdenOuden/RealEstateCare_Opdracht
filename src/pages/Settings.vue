<template>
    <base-layout pageTitle="Instellingen">
        <img
          id="settingsLogo"
          src="../theme/Logo/logo_full.png"
          alt="Real estate care logo">
        <div id="content">
            <ion-card id="settingsCard">
                <div class="switches">
                    <h4>Dark mode:</h4>
                    <ion-toggle
                      id="themeSwitch"
                      :enableOnOffLabels="true"
                      :checked="true"
                      @click="toggle"></ion-toggle>
                </div>
                <div class="switches">
                    <h4>Geluiden:</h4>
                    <ion-toggle
                      :enableOnOffLabels="true"
                      :checked="false"></ion-toggle>
                </div>
                <div class="switches">
                    <h4>Notificaties:</h4>
                    <ion-toggle
                      :enableOnOffLabels="true"
                      :checked="true"></ion-toggle>
                </div>
            </ion-card>
            <ion-button
              @click="logout"
              id="logoutBtn">Log
              uit</ion-button>
            <p id="textColor">Voor vragen en/of contact kunt u mailen naar: developers@rec.com</p>
        </div>
    </base-layout>
</template>

<script>
import {
    IonCard,
    IonToggle,
    IonButton
} from '@ionic/vue'
import axios from 'axios';
import dataBase from '../data/db.json';

export default {
    name: "SettingsPage",
    components: {
        IonCard,
        IonToggle,
        IonButton
    },
    methods: {
        toggle(event) {
            if (event.target.checked) {
                document.body.classList.add("themeSwitch");
            } else {
                document.body.classList.remove("themeSwitch");
            }
        },
        logout() {
            axios.put('https://api.jsonbin.io/v3/b/64650d329d312622a3601d12', dataBase, {
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Master-Key': '$2b$10$pABFxM8WP4rImbk4IqMBbuWmCvHQ.jHsY/lQMg4tef.22J9kLXRLq',
                    }
                })
            sessionStorage.removeItem('Login');
            sessionStorage.removeItem('Authenticated');
            sessionStorage.removeItem('ID');
            this.$router.replace({ name: 'login' });
        }
    }
}
</script>