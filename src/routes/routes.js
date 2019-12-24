const express = require('express');
const router = express.Router();
const config = require('../../config');
const installCtrl = require('../controller/install/install.ctrl')

// router.route('/register')
//     .post(userCtrl.initRegisterMember);

router.route('/webhooks')
    .get((req, res) => {
        const { query } = req;
        if(config.webhook.hrVerifyToken === query['hub.verify_token']){
            res.status(200).send(query['hub.challenge'])
        } else {
            res.status(401).end();
        }
    })

router.route('/login')
    .get(installCtrl.initInstallApp)
// router.route('/promotion')
//     .get(promotion.initGetPromotion)
//     .post(promotion.initAddPromotion)

module.exports = router;