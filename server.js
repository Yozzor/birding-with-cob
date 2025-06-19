const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = process.env.PORT || 3000

// Initialize Next.js app
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

console.log('Starting Birding with Cob server...')
console.log('Environment:', process.env.NODE_ENV)
console.log('Port:', port)

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      // Parse the URL
      const parsedUrl = parse(req.url, true)
      const { pathname, query } = parsedUrl

      // Handle the request with Next.js
      await handle(req, res, parsedUrl)
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('Internal server error')
    }
  })
  .listen(port, (err) => {
    if (err) throw err
    console.log(`> Birding with Cob ready on http://${hostname}:${port}`)
  })
})
.catch((ex) => {
  console.error('Failed to start server:', ex.stack)
  process.exit(1)
})
