import express from 'express'

import { Liquid } from 'liquidjs'

const app = express()

app.use(express.static('public'))

const engine = new Liquid();
app.engine('liquid', engine.express())

app.set('views', './views')

// algemene API response links
const apiEndpoint = "https://fdnd-agency.directus.app/items/avl_webinars"
const fields = "?fields=*,speakers.*.*,resources.*.*,categories.*.*"

app.get('/', async function (request, response) {
  // Webinar fetch link
  const webinarResponse = await fetch(`${apiEndpoint}${fields}`)
  const webinarResponseJSON = await webinarResponse.json()

  response.render("index.liquid", { webinars: webinarResponseJSON.data })
})

app.get("/webinar/:slug", async function (request, response) {
  // Variabelen fetch link individuele webinar pagina
  const slug = request.params.slug
  const filter = `&filter={"slug":"${slug}"}`
  
  const webinarResponse = await fetch(`${apiEndpoint}${fields}${filter}`)
  const webinarResponseJSON = await webinarResponse.json()

  response.render("webinar.liquid", { webinars: webinarResponseJSON.data })
})

app.post('/', async function (request, response) {
  response.redirect(303, '/')
})

app.set('port', process.env.PORT || 8000)

app.listen(app.get('port'), function () {
  console.log(`Application started on http://localhost:${app.get('port')}`)
})