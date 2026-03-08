const http = require('node:http')
const fs = require('node:fs')
const path = require('node:path')

const PORT = 8080
const MOCK_DIR = path.join(__dirname, 'mock')

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET',
  'Access-Control-Allow-Headers': 'Content-Type'
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`)

  if (url.pathname !== '/weather') {
    res.writeHead(404, CORS_HEADERS)
    res.end('Not Found')
    return
  }

  const locality = JSON.parse(fs.readFileSync(path.join(MOCK_DIR, 'locality.json'), 'utf-8'))
  const air_pollution = JSON.parse(fs.readFileSync(path.join(MOCK_DIR, 'air_pollution.json'), 'utf-8'))
  const air_pollution_forecast = JSON.parse(fs.readFileSync(path.join(MOCK_DIR, 'air_pollution_forecast.json'), 'utf-8'))
  const onecall = JSON.parse(fs.readFileSync(path.join(MOCK_DIR, 'onecall.json'), 'utf-8'))

  const body = JSON.stringify({ locality, air_pollution, air_pollution_forecast, onecall })

  res.writeHead(200, { ...CORS_HEADERS, 'Content-Type': 'application/json' })
  res.end(body)
})

server.listen(PORT, () => {
  console.log(`[mock-server] listening on http://localhost:${PORT}`)
})
