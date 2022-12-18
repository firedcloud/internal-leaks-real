const pov = require('pov')
const { createServer } = require('http')
const { parse } = require('url')

function createHandler(app) {
    return function (req, res) {
        const parsedUrl = parse(req.url, true)
        const { pathname, query } = parsedUrl

        if (pathname === '/a') {
            app.render(req, res, '/a', query)
        } else if (pathname === '/b') {
            app.render(req, res, '/b', query)
        }
        else {
            handle(req, res, parsedUrl)
        }
    }
}
