import express from 'express'

import { Liquid } from 'liquidjs'

const app = express()

app.use(express.static('public'))

const engine = new Liquid()
app.engine('liquid', engine.express())

app.set('views', './views')

// algemene API response links
const apiEndpoint = "https://fdnd-agency.directus.app/items"
const apiWebinarEndpoint = "/avl_webinars"
const apiContouringEndpoint = "/avl_contourings"
const webinarFields = "?fields=*,speakers.*.*,resources.*.*,categories.*.*"

app.get('/', async function (request, response) {
  
  let sortWebinars = ""

  switch (request.query.sort) {
    case "newest":
      sortWebinars = "&sort=-date"
      break
    case "oldest":
      sortWebinars = "&sort=date"
      break
    case "az":
      sortWebinars = "&sort=title"
      break
    case "views":
      sortWebinars = "&sort=views"
      break
    default: 
      sortWebinars = ""

  }  
  
  // Webinar fetch link
  const webinarResponse = await fetch(`${apiEndpoint}${apiWebinarEndpoint}${webinarFields}${sortWebinars}`)
  const webinarResponseJSON = await webinarResponse.json()

  response.render("index.liquid", { webinars: webinarResponseJSON.data, currentSort: request.query.sort || "newest" })
})

app.get("/webinar/:slug", async function (request, response) {
  // Variabelen fetch link individuele webinar pagina
  const slug = request.params.slug
  const filter = `&filter={"slug":"${slug}"}` 
  
  const webinarResponse = await fetch(`${apiEndpoint}${apiWebinarEndpoint}${webinarFields}${filter}`)
  const webinarResponseJSON = await webinarResponse.json()

  const contouringResponse = await fetch(`${apiEndpoint}${apiContouringEndpoint}`)
  const contouringResponseJSON = await contouringResponse.json()


  response.render("webinar.liquid", { webinars: webinarResponseJSON.data, contourings: contouringResponseJSON.data })
})

app.post('/', async function (request, response) {
  response.redirect(303, '/')
})

app.set('port', process.env.PORT || 8000)

app.listen(app.get('port'), function () {
  console.log(`Application started on http://localhost:${app.get('port')}`)
})