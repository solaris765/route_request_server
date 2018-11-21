const subdomain = require('express-subdomain'),
    express = require('express'),
    router = express.Router();

class connection {
    constructor(sub, push_to_client) {
        this.push_to_client = push_to_client
        this.router = router

        this.router.use('*', (req, res, next) => {
            console.log('subdomain test')
        })

        this.subDomain = subdomain(sub || 'test', this.router)
    }
}

module.exports = connection
