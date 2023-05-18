<template>
    <base-layout pageTitle="Account">
        <div id="content">
            <div id="profilePicture">
                <img
                  src="@/theme/Logo/logo_blue.png"
                  alt="placeholder profiel foto">
            </div>
            <ion-card id="profileCard">
                <h4>Profiel naam:</h4>
                <p>{{ this.$store.state.user }}</p>
                <br>
                <h4>Wachtwoord:</h4>
                <p>{{ this.$store.state.userPass }}</p>
                <br>
                <h4>Inspecteur ID:</h4>
                <p>{{ this.$store.state.userId }}</p>
            </ion-card>
        </div>
    </base-layout>
</template>

<script>
import {
    IonCard,
} from '@ionic/vue'

export default {
    name: "accountPage",
    components: {
        IonCard,
    }
}
</script>