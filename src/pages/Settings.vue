<template>
    <base-layout pageTitle="Instellingen">
        <img id="settingsLogo" src="../theme/Logo/logo_full.png" alt="logo">
        <div id="content">
            <ion-card id="settingsCard">
                <div class="switches">
                    <h4>Dark mode:</h4>
                    <ion-toggle id="themeSwitch" :enableOnOffLabels="true" :checked="true" @click="toggle"></ion-toggle>
                </div>
                <div class="switches">
                    <h4>Geluiden:</h4>
                    <ion-toggle :enableOnOffLabels="true" :checked="false"></ion-toggle>
                </div>
                <div class="switches">
                    <h4>Notificaties:</h4>
                    <ion-toggle :enableOnOffLabels="true" :checked="true"></ion-toggle>
                </div>
            </ion-card>
            <ion-button @click="logout" id="logoutBtn">Log uit</ion-button>
        </div>
    </base-layout>
</template>

<script>
import {
    IonCard,
    IonToggle,
    IonButton
} from '@ionic/vue'

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
            sessionStorage.removeItem('Login');
            sessionStorage.removeItem('Authenticated');
            sessionStorage.removeItem('ID');
            this.$router.replace({ name: 'login' });
        }
    }
}
</script>