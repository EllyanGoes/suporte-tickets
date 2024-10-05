//Importa as rotas do  de rotas
import { Database } from "../database/database.js" // nome da classe sempre com letra maiúscula
import { routes } from "../routes/index.js"
import { extractQueryParams } from "../utils/extractQueryParams.js"

//nome da instancia em minusculo
const database = new Database()

export function routeHandler(request, response) {
  //Verifica se a rota existe
  const route = routes.find((route) => {
    return route.method === request.method && route.path.test(request.url)
  })

  //Se existir ele executa o controller
  if (route) {
    const routeParams = request.url.match(route.path)

    const { query, ...params } = routeParams.groups

    request.params = params

    request.query = query ? extractQueryParams(query) : {}

    return route.controller({ request, response, database })
  }

  //Se não existir responde que não foi encontrado pelo status code
  return response.writeHead(404).end()
}
