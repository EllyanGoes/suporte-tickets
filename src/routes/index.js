import { parseRoutePath } from "../utils/parseRoutePath.js"
import { tickets } from "./tickets.js"

//Centraliza todos os arquivos de rota em uma única lista
export const routes = [...tickets].map((route) => ({
  ...route,
  path: parseRoutePath(route.path),
}))
