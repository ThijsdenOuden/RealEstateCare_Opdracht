<template>
    <ion-page>
        <ion-header>
            <ion-toolbar class="header">
                <ion-title>{{ pageTitle }}</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <slot />
        </ion-content>
        <ion-footer>
            <ion-toolbar id="footerToolbar">
                <ion-buttons id="footerButtons">
                    <router-link to="/account">
                        <ion-icon
                          class="footerIcons"
                          name="person-outline"></ion-icon>
                    </router-link>
                    <router-link to="/">
                        <ion-icon
                          class="footerHome"
                          name="home"></ion-icon>
                    </router-link>
                    <router-link to="/settings">
                        <ion-icon
                          class="footerIcons"
                          name="cog-outline"></ion-icon>
                    </router-link>
                </ion-buttons>
            </ion-toolbar>
        </ion-footer>
    </ion-page>
</template>

<script>
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonFooter,
    IonButtons,
    IonIcon
} from '@ionic/vue';

export default {
    props: {
        pageTitle: String
    },
    components: {
        IonPage,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonFooter,
        IonButtons,
        IonIcon
    }
}
</script>