// Importeer het npm package Express (uit de door npm aangemaakte node_modules map)
// Deze package is geïnstalleerd via `npm install`, en staat als 'dependency' in package.json
import express from 'express'

// Importeer de Liquid package (ook als dependency via npm geïnstalleerd)
import { Liquid } from 'liquidjs';

// Variabelen met api links
const apiEndpoint = "https://fdnd-agency.directus.app/items/avl_"
const apiCategories = "categories"
const apiComments = "comments"
const apiContourings = "contourings"
const apiSpeakers = "speakers"
const apiUsers = "users"
const apiWebinars = "webinars"

// Doe een fetch naar de data die je nodig hebt
const categoriesResponse = await fetch(`${apiEndpoint}${apiCategories}`)
const commentsResponse = await fetch(`${apiEndpoint}${apiComments}`)
const contouringsResponse = await fetch(`${apiEndpoint}${apiContourings}`)
const speakersResponse = await fetch(`${apiEndpoint}${apiSpeakers}`)
const usersResponse = await fetch(`${apiEndpoint}${apiUsers}`)
const webinarsResponse = await fetch(`${apiEndpoint}${apiWebinars}`)

// Lees van de response van die fetch het JSON object in, waar we iets mee kunnen doen
const categoriesResponseJSON = await categoriesResponse.json()
const commentsResponseJSON = await commentsResponse.json()
const contouringsResponseJSON = await contouringsResponse.json()
const speakersResponseJSON = await speakersResponse.json()
const usersResponseJSON = await usersResponse.json()
const webinarsResponseJSON = await webinarsResponse.json()

// Maak een nieuwe Express applicatie aan, waarin we de server configureren
const app = express()

// Gebruik de map 'public' voor statische bestanden (resources zoals CSS, JavaScript, afbeeldingen en fonts)
// Bestanden in deze map kunnen dus door de browser gebruikt worden
app.use(express.static('public'))

// Stel Liquid in als 'view engine'
const engine = new Liquid();
app.engine('liquid', engine.express()); 

// Stel de map met Liquid templates in
// Let op: de browser kan deze bestanden niet rechtstreeks laden (zoals voorheen met HTML bestanden)
app.set('views', './views')

const apiResponse = "https://fdnd-agency.directus.app/items/avl_webinars"
const fields = "?fields=*,speakers.*.*,resources.*.*,categories.*.*"

// Maak een GET route voor de index (meestal doe je dit in de root, als /)
app.get('/', async function (request, response) {
   // Render index.liquid uit de Views map
   // Geef hier eventueel data aan mee
   response.render('index.liquid', {
    categories: categoriesResponseJSON.data, 
    comments: commentsResponseJSON.data, 
    contourings: contouringsResponseJSON.data, 
    speakers: speakersResponseJSON.data, 
    users: usersResponseJSON.data, 
    webinars: webinarsResponseJSON.data})
app.get("/webinar/:slug", async function (request, response) {
  const slug = request.params.slug
  const filter = `&filter={"slug":"${slug}"}`
  
  const webinarResponse = await fetch(`${apiResponse}${fields}${filter}`)
  const webinarResponseJSON = await webinarResponse.json()

  response.render("webinar.liquid", { webinars: webinarResponseJSON.data })
})

// Maak een POST route voor de index; hiermee kun je bijvoorbeeld formulieren afvangen
// Hier doen we nu nog niets mee, maar je kunt er mee spelen als je wilt
app.post('/', async function (request, response) {
  // Je zou hier data kunnen opslaan, of veranderen, of wat je maar wilt
  // Er is nog geen afhandeling van een POST, dus stuur de bezoeker terug naar /
  response.redirect(303, '/')
})

// Stel het poortnummer in waar Express op moet gaan luisteren
// Lokaal is dit poort 8000, als dit ergens gehost wordt, is het waarschijnlijk poort 80
app.set('port', process.env.PORT || 8000)

// Start Express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})
