<template>
    <base-layout page-title="Home">
        <div id="contentSlot">
            <img id="welcomeLogo" src="../theme/Logo/logo_name.png" alt="logo">
            <section id="menuLayout">
                <div class="menuKnop" id="t-rapport">
                    <ion-icon class="menuIcon" name="reader-outline"></ion-icon>
                    <h3 class="menuTitle">Toegewezen <br> rapportages</h3>
                </div>
                <div class="menuKnop" id="u-rapport">
                    <ion-icon class="menuIcon" name="receipt-outline"></ion-icon>
                    <h3 class="menuTitle">Uitgevoerde <br> rapportages</h3>
                </div>
                <div class="menuKnop" id="kennisbase">
                    <ion-icon class="menuIcon" name="server-outline"></ion-icon>
                    <h3 class="menuTitle">Documentatie</h3>
                </div>
                <div class="menuKnop" id="instellingen">
                    <ion-icon class="menuIcon" name="cog-outline"></ion-icon>
                    <h3 class="menuTitle">Instellingen</h3>
                </div>
                <div id="v-line"></div>
            </section>
        </div>
    </base-layout>
</template>

<script>
import {
        IonIcon
} from '@ionic/vue';

export default {
    components: {
        IonIcon
    }
};
</script>