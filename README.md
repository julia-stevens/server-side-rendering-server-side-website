> _Fork_ deze leertaak en ga aan de slag. Onderstaande outline ga je gedurende deze taak in jouw eigen GitHub omgeving uitwerken. De instructie vind je in: [docs/INSTRUCTIONS.md](https://github.com/fdnd-task/server-side-rendering-server-side-website/blob/main/docs/INSTRUCTIONS.md)

# Oncollaboration - Server-side Rendering

<img width="250" alt="image" src="https://github.com/user-attachments/assets/4be4d4a8-9bd7-4ae8-b512-db4bb51a7d56" />
<img width="500" alt="image" src="https://github.com/user-attachments/assets/218f7833-86dd-4546-9c0a-90aa4aea0bed" />


## Inhoudsopgave
* [Inleiding](#inleiding)
* [Beschrijving](#beschrijving)
* [Kenmerken](#kenmerken)
* [Installatie](#installatie)
* [Bronnen](#bronnen)
* [Licentie](#licentie)

## Inleiding
### About _Oncollaboration_
Oncollaboration is een ontwerp voor een online platform voor samenwerking en kennisdeling tussen Indonesische en Nederlandse radiotherapeuten.

Dit platform is het afstudeerwerk van oud-CMD student Sergio Eijben. Hij is in opdracht van Judi van Diessen van het Antoni van Leeuwenhoek ziekenhuis afgestudeerd op de vraag hoe de samenwerking en kennisdeling tussen radiotherapeuten in Nederland en Indonesië verbeterd kan worden.

### Uitdaging
Ontwerp en ontwikkel het online platform Oncollaboration om kennisoverdracht en interactie tussen Nederlandse en Indonesische radiotherapeuten te stimuleren.

### Oplossing
Mijn oplossing voor de uitdaging omvat de uitwerking van 3 soorten pagina's van _Oncollaboration_, namelijk: home pagina, webinars overzicht en de detail pagina's van de webinars. Ook kan er gefilterd en gesorteerd worden om de juiste webinars makkelijker te zoeken. 

[Bekijk hier de live site](https://server-side-rendering-server-side-w6g6.onrender.com)

## Beschrijving
De Home-pagina begint met een korte introductie over het platform _Oncollaboration_ en vertelt de gebruiker wat er zoal te vinden is op de website. Ook staat hier een overzicht van de webinars, contourings en articles. De gebruiker kan vanuit deze pagina door naar de overzichtspagina van één van de genoemde onderwerpen. 
Op de overzichtspagina van de Webinars worden alle webinars getoond, en kan de gebruiker de webinars sorteren (nieuwste, oudste, views, naam) en filteren op categorie. En op de detail pagina van een webinar wordt, natuurlijk, de webinar zelf getoond, met extra informatie over de spreker, de bijbehorende contourings en bijbehorende articles. 

https://github.com/user-attachments/assets/3c5bd301-90f1-405a-bdaf-05b7811d7525

### Responsive 
De website is gebouwd vanuit het mobile-first principe. Onderstaande afbeelding laat de verschillende layouts zien. Op het kleinste formaat heb ik gewerkt met een one column layout, en naar mate de schermbreedte groter wordt, wordt er meer content horizontaal geplaatst en uitgelijnd. 

![image](https://github.com/user-attachments/assets/631bc551-efd6-4b34-808d-24195e36a08a)

### Belangrijkste features
#### Sorteer functie
Op de overzichtspagina van de webinars kan de content gesorteerd worden. Dit wordt met feedforward aangegeven door tekst ('Sort by:' & 'Sort & Filter') en de selecteer knop. De opties geven de gebruiker feedforward over wat er verwacht kan worden wanneer er gesorteerd wordt. Daarnaast geeft de knop ('Sort webinars') ook feedforward aan de gebruiker en kan er dus verwacht worden dat de webinars gesorteerd worden. Wanneer er op de knop geklikt wordt, krijgt deze een andere kleur en wordt de pagina gerefresht. Hiermee krijgt de gebruiker feedback van de sorteer actie. Daarnaast verandert het overzicht van de webinars in volgorde en hiermee krijgt de gebruiker dus ook feedback over de sorteer actie. 

https://github.com/user-attachments/assets/a514ec21-852a-42ad-8063-de55f4487532

#### Filter functie
De filterknoppen bevatten allemaal een duidelijk label van de categorie die bij de knop hoort. Dit is duidelijk feedforward aan de gebruiker. Daarnaast staat er een knop bij, namelijk 'Filter webinars'. Hiermee wordt wederom feedforward gegeven dat de webinars gefilterd kunnen worden op categorie. Bij een klik op een categorie-knop, verandert deze van kleur. Hiermee wordt feedback gegeven aan de gebruiker dat er iets veranderd is én feedforward, namelijk wanneer de filter actie voltooid wordt (door op de knop te klikken) de webinars van de bijbehorende categorie getoond worden. De pagina wordt vervolgens herladen en alleen de webinars van de gekozen categorie worden getoond. Hiermee krijgt de gebruiker dus de feedback dat de actie succesvol was. 

Een functionaliteit die ik hier nog aan wil toevoegen is om bij de categorieën te laten zien hoeveel webinars er bij de categorie horen. 

https://github.com/user-attachments/assets/38732f0c-4b0e-408f-b12c-daf46c15470d

### Ontwerpkeuzes
Vanuit de opdracht heb ik een Figma document meegekregen met een uitgebreid ontwerp voor _Oncollaboration_. Voor het maken van deze pagina's heb ik mij vooral aan de huisstijl van dit ontwerp gehouden, zie onderstaande voorbeelden: 

#### Kleurgebruik
Het kleurgebruik van _Oncollaboration_ is deels afkomstig vanuit de huisstijl van de website van Antoni van Leeuwenhoek. De rode kleur komt dan ook hier veel terug, met een licht rode achtergrondkleur. 
Belangrijk is dat deze kleur goed contrast hebben en dit is belangrijk voor de toegankelijkheid: 

<img src="https://github.com/user-attachments/assets/9ecbedb3-122b-4006-8cae-aed88151c1b8" width="200">
<img src="https://github.com/user-attachments/assets/6de23984-fe7b-4514-af36-318c604cc2c2" width="200">
<img src="https://github.com/user-attachments/assets/0982da25-5deb-46b0-a266-5489077b08cb" width="200">

#### Ronde borders
In het hele ontwerp komen veel ronde borders terug. Dit bij het afbeeldingen, knoppen en bij verschillende sections. Dit heb ik dan ook meegenomen in de styling van de pagina's. 

<img width="250" alt="image" src="https://github.com/user-attachments/assets/765d681c-2893-4b99-9739-71c644774d78" />
<img width="250" alt="image" src="https://github.com/user-attachments/assets/212ae5d6-3f7b-4d5a-8ae9-db82702f4495" />

## Kenmerken
In dit project maak ik gebruik van Node.js en Express om een webserver op te zetten. Ik gebruik Liquid als template-engine voor het genereren van dynamische HTML-pagina's.

### Routes en dataverwerking
* [`app.get("/")`](https://github.com/julia-stevens/server-side-rendering-server-side-website/blob/1272902fb62111818773754600f8c239f7d5d043/server.js#L21-L42): Haalt gegevens op voor webinars en contourings via de Directus API, verzamelt alle resources van webinars en rendert de gegevens in index.liquid.
* [`app.get("/webinars/")`](https://github.com/julia-stevens/server-side-rendering-server-side-website/blob/1272902fb62111818773754600f8c239f7d5d043/server.js#L44-L83): Haalt webinars op, past sorteermogelijkheden toe op basis van de querystring (zoals nieuwste, oudste, alfabetisch of op aantal views), en filtert op een geselecteerde categorie. De gerenderde gegevens worden weergegeven in webinars.liquid.
* [`app.get("/webinars/:slug")`](https://github.com/julia-stevens/server-side-rendering-server-side-website/blob/1272902fb62111818773754600f8c239f7d5d043/server.js#L85-L100): Haalt de details op van een specifiek webinar op basis van de slug uit de URL en toont de gegevens in webinar.liquid.

### Data ophalen en HTML renderen
* De gegevens worden opgehaald via `fetch()`-aanvragen naar verschillende Directus API-eindpunten, zoals voor webinars, contourings en categorieën. [Hier is een voorbeeld van het ophalen van alle webinars](https://github.com/julia-stevens/server-side-rendering-server-side-website/blob/1272902fb62111818773754600f8c239f7d5d043/server.js#L22)
* Na verwerking van de data, wordt de HTML gegenereerd met behulp van Liquid templates. [Hier wordt bijvoorbeeld de detailpagina van een webinar gerenderd](https://github.com/julia-stevens/server-side-rendering-server-side-website/blob/1272902fb62111818773754600f8c239f7d5d043/server.js#L96-L99)
* De gerenderde HTML wordt gegenereerd via Liquid, waarbij variabelen worden doorgegeven aan de templates, zie bijvoorbeeld [het overzicht van alle webinars](https://github.com/julia-stevens/server-side-rendering-server-side-website/blob/1272902fb62111818773754600f8c239f7d5d043/views/webinars.liquid#L74-L90)
  
### Uitleg NodeJS, Express en Liquid
#### NodeJS
Met NodeJS kun je JavaScript op een server draaien. Hiermee kun je get en post request/responses bouwen om met bv. databases te communiceren. Zoals wij in dit project hebben gedaan.

#### Express
Express is een hulpmiddel binnen NodeJS, waarmee een webserver gebouwd kan worden. Je kunt bijvoorbeeld instellen welke pagina's en data getoond wordt.

#### Liquid
Liquid is een template-engine waarmee je dynamische HTML-pagina's kunt genereren.

## Installatie
Zoals beschreven bij Kenmerken is bij dit project gebruik gemaakt van NodeJS. Om aan dit project te werken moet NodeJS geïnstalleerd zijn. Eenmal geïnstalleerd kan het project geopend worden in de code editor.

Voer in de terminal `npm install` uit om alle afhankelijkheden te installeren.

Voer vervolgens `npm start` uit om de server te starten.

Ga in je browser naar http://localhost:8000 om het project te bekijken.

## Bronnen
* [FDND Agency](https://github.com/fdnd-agency/oncollaboration/wiki/Design-Challenge)

## Licentie
This project is licensed under the terms of the [MIT license](./LICENSE).
