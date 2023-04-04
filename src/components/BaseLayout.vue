<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>{{ pageTitle }}</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <slot/>
        </ion-content>
        <ion-footer>
            <ion-toolbar id="footerToolbar">
                <ion-buttons id="footerButtons">
                    <ion-button>
                        <ion-icon class="footerIcons" name="home-outline"></ion-icon>
                    </ion-button>
                    <ion-button>
                        <ion-icon class="footerIcons" name="person-outline"></ion-icon>
                    </ion-button>
                    <ion-button>
                        <ion-icon class="footerIcons" name="cog-outline"></ion-icon>
                    </ion-button>
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
    IonButton,
    IonIcon
} from '@ionic/vue';

export default {
    props: ['pageTitle'],
    components: {
        IonPage,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonFooter,
        IonButtons,
        IonButton,
        IonIcon
    }
}
</script>