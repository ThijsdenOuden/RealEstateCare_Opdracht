<template>
    <ion-page>
        <div class="login">
            <ion-card id="loginCard">
                <img id="loginLogo" src="../theme/Logo/logo_full.png" alt="logo">
                <ion-card-header class="loginHeader">
                    <h2>Log in</h2>
                </ion-card-header>
                <ion-card-content class="loginContent">
                    <ion-input
                      type="username"
                      v-model="username"
                      placeholder="Gebruikersnaam"></ion-input>
                    <ion-input
                      type="password"
                      v-model="password"
                      placeholder="Wachtwoord"></ion-input>
                    <ion-button @click="login" class="loginBtn">Log in</ion-button>
                </ion-card-content>
            </ion-card>
        </div>
    </ion-page>
</template>

<script>
import axios from 'axios';
import {
    IonPage,
    IonButton,
    IonInput,
    IonCard,
    IonCardHeader,
    IonCardContent,
    toastController
} from '@ionic/vue';

export default {
    name: 'loginPage',
    components: {
        IonPage,
        IonButton,
        IonInput,
        IonCard,
        IonCardHeader,
        IonCardContent
    },
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        async login() {
            const result = await axios.get(
                `http://localhost:3000/accounts?username=${this.username}&password=${this.password}`
            )
            if (result.status == 200 && result.data.length > 0) {
                const randomNumber = Math.floor(Math.random() * (100000 - 10000)) + 10000;
                console.log(randomNumber);
                
                localStorage.setItem('Authentication', randomNumber);
                sessionStorage.setItem('Login', true);
                sessionStorage.setItem('ID', result.data[0].id);

                const userId = result.data[0].id;
                const userPass = result.data[0].password;
                this.$store.commit('SET_USERPASS', userPass);
                
                this.setUserName(userId);
                this.presentToast(randomNumber);
                this.$router.push({ name: 'authenticate' });
            } else if (result.status == 200 && result.data.length == 0) {
                this.errorToast();
                document.getElementById('loginCard').style.border = '3px solid var(--danger)';
                document.getElementById('loginCard').style.boxShadow = '0 0 50px 1px var(--danger)';
            }
        },
        async presentToast(randomNumber) {
            const message = "Uw verificatiecode is: ";
            const toast = await toastController.create({
                message: message + randomNumber,
                cssClass: 'toast',
                duration: 8000,
                position: 'top'
            });

            await toast.present();
        },
        async errorToast() {
            const toast = await toastController.create({
                message: "Gebruikersnaam of wachtwoord is niet correct!",
                cssClass: 'errToast',
                duration: 5000,
                position: 'bottom',
                icon: 'alert-circle-outline'
            });

            await toast.present();
        },
        setUserName(userId) {
            let userName;
            switch(userId) {
                case "1": 
                    userName = 'Admin';
                    break;
                case "2": 
                    userName = 'John';
                    break;
                case "3": 
                    userName = 'Jane';
                    break;
                default: 
                    userName = 'User';
            }
            this.$store.commit('SET_USERNAME', userName);
            this.$store.commit('SET_USERID', userId);
        }
    }
}

</script>