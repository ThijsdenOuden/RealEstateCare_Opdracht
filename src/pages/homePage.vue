<template>
    <base-layout page-title="Home">
        <img id="logo" src="../theme/Logo/logo_full.png" alt="logo">
        <div id="contentSlot">
            <section id="menuLayout">
                <router-link to="/performedReports">
                    <div class="menuBtn" id="p-report">
                        <ion-icon class="menuIcon" name="checkmark-outline"></ion-icon>
                        <h3 class="menuTitle">Uitgevoerd</h3>
                    </div>
                </router-link>
                <router-link to="/settings">
                    <div class="menuBtn" id="settings">
                        <ion-icon class="menuIcon" name="cog-outline"></ion-icon>
                        <h3 class="menuTitle">Instellingen</h3>
                    </div>
                </router-link>
                <router-link to="/AssignedReports">
                    <div class="menuBtn" id="a-report">
                        <ion-icon class="menuIcon" name="today-outline"></ion-icon>
                        <h3 class="menuTitle">Toegewezen</h3>
                    </div>
                </router-link>
                <router-link to="/databaseDocs">
                    <div class="menuBtn" id="database">
                        <ion-icon class="menuIcon" name="server-outline"></ion-icon>
                        <h3 class="menuTitle">Documenten</h3>
                    </div>
                </router-link>
                
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
    name: 'HomePage',
    components: {
        IonIcon
    }
}
</script>