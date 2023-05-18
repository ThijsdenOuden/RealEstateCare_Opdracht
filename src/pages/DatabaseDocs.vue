<template>
    <base-layout pageTitle="Documentatie">
        <div id="container">
            <ion-card
              v-for="(card, index) in cards"
              :key="index"
              class="showDocument">
                <ion-card-header @click="toggleCard(index)">
                    <div>
                        <ion-icon name="document-text-outline"></ion-icon>
                        {{ card.header }}
                    </div>
                    <ion-icon name="chevron-down-outline"></ion-icon>
                </ion-card-header>
                <ion-card-content v-if="card.showContent">
                    {{ card.content }}
                </ion-card-content>
            </ion-card>
        </div>
    </base-layout>
</template>

<script>
import {
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonIcon
} from '@ionic/vue'

export default {
    name: 'databaseDocs',
    data() {
    return {
      cards: [
        { header: "Voorbeeld document 1", 
            content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, dolores maxime deserunt tempora perferendis dignissimos cumque, est facilis eaque quasi vero deleniti sequi veritatis aliquid.", 
            showContent: false },
        { header: "Voorbeeld document 2", 
            content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, dolores maxime deserunt tempora perferendis dignissimos cumque, est facilis eaque quasi vero deleniti sequi veritatis aliquid.", 
            showContent: false },
        { header: "Voorbeeld document 3", 
            content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, dolores maxime deserunt tempora perferendis dignissimos cumque, est facilis eaque quasi vero deleniti sequi veritatis aliquid.", 
            showContent: false },
        { header: "Voorbeeld document 4", 
            content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, dolores maxime deserunt tempora perferendis dignissimos cumque, est facilis eaque quasi vero deleniti sequi veritatis aliquid.", 
            showContent: false },
        { header: "Voorbeeld document 5", 
            content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, dolores maxime deserunt tempora perferendis dignissimos cumque, est facilis eaque quasi vero deleniti sequi veritatis aliquid.", 
            showContent: false }
      ]
    }
  },
  methods: {
    toggleCard(index) {
      this.cards[index].showContent = !this.cards[index].showContent;
    }
  },
    components: {
        IonCard,
        IonCardHeader,
        IonCardContent,
        IonIcon
    }
}
</script>