//Obtenção do body
export async function jsonHandler(request, response) {
  const buffers = []

  for await (const chunk of request) {
    buffers.push(chunk)
  }

  try {
    //Concatenando os buffers e transformando eles em texto e depois convertendo em json
    request.body = JSON.parse(Buffer.concat(buffers).toString())
  } catch (error) {
    request.body = null
  }

  response.setHeader("Content-Type", "application/json")
}
