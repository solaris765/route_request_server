const subdomain = require('express-subdomain'),
    express = require('express'),
    app = express(),
    Connection = require('./connection'),
    bodyparser = require('body-parser')

app.use(bodyparser.json())

app.get('/sse-server', (req, res, next) => {
    res.status(200).set({
        "connection": "keep-alive",
        "cache-control": "no-cache",
        "content-Type": "application/json"
    })

    let con = new Connection(req.body.subDomain, res)
    app.use(con.subDomain)
})

let r = express.Router()
r.get('/',(req, res,next)=>{
    res.json('this works')
})

app.use(subdomain('blah', r))

app.get('/routes', (req,res)=>{
    res.json(app._router.stack)
})

app.listen(8080, () => {
    console.log('its up')
})
