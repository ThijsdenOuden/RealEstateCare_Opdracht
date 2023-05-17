<template>
    <ion-page>
        <div class="login">
            <ion-card id="authCard">
                <img id="loginLogo" src="../theme/Logo/logo_full.png" alt="logo">
                <ion-card-header class="loginHeader">
                    <h2>Verificatie</h2>
                </ion-card-header>
                <ion-card-content class="authInput">
                    <ion-input  type="number" v-model="authentication" placeholder="Authenticatie nummer" ></ion-input>
                    <ion-button @click="authenticate" class="loginBtn">Log in</ion-button>
                </ion-card-content>
            </ion-card>
        </div>
    </ion-page>
</template>

<script>
import {
    IonPage,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonInput,
    IonButton,
    toastController
} from '@ionic/vue';

export default {
    name: 'authenticatePage',
    components: {
        IonPage,
        IonCard,
        IonCardHeader,
        IonCardContent,
        IonInput,
        IonButton,
    },
    data() {
        return {
            authentication: '',
        }
    },
    methods: {
        authenticate() {
            const authenticationNumber = localStorage.getItem('Authentication');
            if (authenticationNumber == this.authentication) {
                sessionStorage.setItem('Authenticated', true);
                this.presentToast();
                this.$router.replace( '/');
            } else if (authenticationNumber !== this.authentication){
                this.errorToast();
                document.getElementById('authCard').style.border = '3px solid var(--danger)';
                document.getElementById('authCard').style.boxShadow = '0 0 50px 1px var(--danger)';
            }
        },
        async presentToast() {
            const toast = await toastController.create({
                message: "U bent succesvol ingelogt!",
                cssClass: 'toast',
                duration: 5000,
                position: 'top',
                icon: 'checkmark-outline'
            });

            await toast.present();
        },
        async errorToast() {
            const toast = await toastController.create({
                message: "Verificatiecode komt niet overeen!",
                cssClass: 'errToast',
                duration: 5000,
                position: 'bottom',
                icon: 'alert-circle-outline'
            });

            await toast.present();
        },
    }
}

</script>