## CASE: Real Estate Care

**Install:**
Clone de repository:		

    git clone <repository-url>
 Installeer packages:

    npm install
Start de server:

    npm run serve
 **Live versie:**
 [https://rec-frameworks.netlify.app](https://rec-frameworks.netlify.app/)
 
 **Login:**
 Er zijn 3 fictieve accounts aangemaakt die u kunt gebruiken voor de login:
 
| Username | Password |
|--|--|
| admin@rec.com | Admin123 |
| john@rec.com | John123 |
| jane@rec.com | Jane123 |

De login is voorzien van two-factor-authentication. Voor deze demo versie wordt de verificatiecode per pop-up getoond. In de definitieve versie zal dit d.m.v. een sms-service worden gedaan.

**Opdracht:**
Real Estate Care is een dienstverlenende organisatie die voor verschillende opdrachtgevers (zoals woningcorporaties en vastgoedontwikkelaars) woningen onderhoudt, verbetert en inspecteert.
Een aspect is natuurlijk het op locatie inspecteren van het pand en het opnemen van de schade, achterstallig onderhoud, verouderde installaties etc.
Van oudsher werd dit met formulieren gedaan maar nu dus de taak om dit te stroomlijnen en flexibel in te richten met oog voor de toekomst.

**Applicatie overzicht:**
Dit project is een Ionic/Vue -based webapplicatie voor de case RealEstateCare. 
De Ionic componenten gemixt met de snelheid en flexibiliteit van Vue.js zorgt voor een goede UX en mooi uitziende UI. Naast Ionic en Vue zijn ook Vuex, Axios, JsonBin.io en Vue-router gebruikt.
**Vuex:** Statemanagement voor het opslaan en beheren van de opgehaalde data.
**Axios, JsonBin.io:** Een JSON bestand met dummy data wordt d.m.v. JsonBin.io gehost en met Axios wordt de relevante data opgehaald van de web API.
 **Vue-router:** Zorgt voor duidelijke en gemakkelijke navigatie in een SPA.

De kern van de app bestaat uit 4 pagina's:
**Toegewezen rapportages:** waar de opdrachtgever al een aantal velden heeft ingevuld of aangekruist m.b.t. de opdracht die uitgevoerd moet worden.
**Uitgevoerde rapportages:** Wanneer de inspecteur een rapportage afrond komt deze hier te staan. Deze kan nog heropent en aangepast worden mits nodig.
**Kennisbase:** Hier komen relevante documenten te staan voor installatieprocessen. Voor nu is het opgevuld met dummy tekst.
**Instellingen:** Hier staan de instellingen van de app zoals: Dark-mode, Geluid en Notificaties.

**Toegankelijkheid:**
De toegankelijkheid van de applicatie is optimaal door het volgen van de 10 heurastieken van Jacob Nielson. Onderstaand hoe deze zijn toegepast:

 - Elementen zijn herkenbaar door het gebruik van de Ionic componenten en d.m.v. de icons van Ionicons is er op diverse plekken extra duidelijkheid gegeven wat de bedoeling en/of functie van het desbetreffende element is.
 - Door gebruik te maken van de Vue-router en een logische benaming van de Ion-buttons blijft het voor de gebruiker te allen tijde logisch wat er wordt gevraagd en wat de opties zijn. 
 - Overal is één font gebruikt voor eenheid en hebben de elementen die hetzelfde zijn consequent dezelfde stijl.
 - De gebruiker kan vergissingen maken. Bijvoorbeeld een veld vergeten in te vullen en het rapport al afronden. Het afgeronde rapport kan dan gewoon heropent worden en de inspecteur kan het vergeten veld alsnog invullen.
 - De meeste componenten komen uit de Ionic library en zijn dus hetzelfde en logisch gemaakt. De inspecteurs herkennen deze componenten omdat ze deze al dagelijks zien op hun telefoon. Deze componenten zijn gelijk aan de Android en IOS componenten en veranderen ook op basis van de telefoon waar de applicatie op draait.
 - Door de logische indeling is er geen "terug-knop" nodig. Alles is meteen bereikbaar. Dit maakt de applicatie flexibel en makkelijk te leren.
 - Er is vaak gekozen voor een IonCard component dat een titel laat zien en pas als erop geklikt wordt opent de IonCard en kan de inspecteur de gehele inhoud zien. Door dit te implementeren wordt het overzicht van de applicatie behouden en kan de inspecteur alles makkelijk vinden.
 - De applicatie maakt gebruik van IonSpinner en Toast componenten om de gebruiker duidelijk te maken wat er gebeurt. Als de gebruiker bijvoorbeeld een verkeerde login intoets wordt de rand van de IonCard rood en verschijnt er een Toast aan de onderkant die zegt dat de inlog gegevens niet kloppen.
 - Onderaan de "Instellingen" pagina staat contact informatie voor de gebruiker.
 -  Na een test van verschillende gebruikers zijn er nog een paar kleine aanpassingen geweest met betrekking op UX/UI.

**Gebruikersvriendelijkheid:**
Voor de gebruikersvriendelijkheid is er gekeken naar de WCAG 2.1 richtlijnen:

 - Alle afbeeldingen hebben een "alt" tekst mochten deze niet geladen worden of gelezen worden door een screenreader.
 - De applicatie is te gebruiken met alleen een toetsenbord.
 - Inputs hebben labels.

**Style guides:**
De style guides van Vue zijn zoveel mogelijk toegepast.  Hiervoor is er gekeken naar de style guides van de Vue website:
[Style Guide — Vue.js (vuejs.org)](https://v2.vuejs.org/v2/style-guide/?redirect=true).
Zo is bijvoorbeeld ook de "Split HTML Attributes (Vue, React, Angular)" extention gebruikt voor de Multi-attribute elements. Om zo alle attributen van een component op een eigen regel te krijgen.


**Slot:**
Er is hard gewerkt om de applicatie mooi, toegankelijk, gebruikersvriendelijk en snel te maken naast dat alle criteria van de case gewaarborgd zijn. Mochten er vragen zijn dan kunt u altijd even mailen naar:

    ThijsdenOuden@outlook.com

**Let op:**
Het JSON bestand wordt na het uitloggen opnieuw ingesteld met de beginwaardes.
