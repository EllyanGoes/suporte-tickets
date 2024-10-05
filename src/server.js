import http from "node:http"

import { jsonHandler } from "./middlewares/jsonHandler.js"
import { routeHandler } from "./middlewares/routeHandler.js"

async function listener(request, response) {
  await jsonHandler(request, response) //captura o body da requisição json
  routeHandler(request, response) //verifica se a rota existe
}

http.createServer(listener).listen(3333)
