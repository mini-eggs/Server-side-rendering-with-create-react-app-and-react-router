
require('import-export')
require('babel-core/register')({ presets: ['es2015', 'react'] })

const http = require('http')
const path = require('path')
const fs = require('fs')
const express = require('express')
const react = require('react')
const reactDomServer = require('react-dom/server')
const reactRouter = require('react-router')

const renderToString = reactDomServer.renderToString
const match = reactRouter.match
const RouterContext = reactRouter.RouterContext

const staticFiles = [
  '/static/*',
  '/logo.svg',
  '/asset-manifest.json',
  '/favicon.ico'
]

const routes = require('../src/routes').default()

const app = express()
app.server = http.createServer(app)
app.use(express.static('../build'))

staticFiles.forEach(file => {
  app.get(file, (req, res) => {
    const filePath = path.join( __dirname, '../build', req.url )
    res.sendFile( filePath )
  })
})

app.get('*', (req, res) => {

  const error = () => res.status(404).send('404')
  const htmlFilePath = path.join( __dirname, '../build', 'index.html' )

  fs.readFile( htmlFilePath, 'utf8', (err, htmlData) => {
    if(err) {
      error()
    }
    else {
      match({ routes, location: req.url }, (err, redirect, ssrData) => {
        if(err) {
          error()
        }
        else if(redirect) {
          res.redirect(302, redirect.pathname + redirect.search)
        }
        else if(ssrData) {
          const ReactApp = renderToString( react.createElement(RouterContext, ssrData) )
          const RenderedApp = htmlData.replace('{{SSR}}', ReactApp)
          res.status(200).send(RenderedApp)
        }
        else {
          error()
        }
      })
    }
  })
})

app.server.listen( process.env.PORT || 8080 )
console.log(`Listening on http://localhost:${app.server.address().port}`)
