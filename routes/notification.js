
const express = require('express');

const router = express.Router();

router.post('/send',(req,res)=>{


    var FCM = require('fcm-node');
    var serverKey = 'AAAAAfguTzI:APA91bGyfTpolj-RoSVcr0nnXA3HQe_7ZcX1TSqiuPe8YpslNYdY1yqmO761Z_3eUivnEyBvcqcSOl-4fGoDk02zS1qksDPRvpbB8wvJElnCvzjbdQ0m2wqwu_aVTlTXpXgRAgOIq72A'; //put your server key here
    var fcm = new FCM(serverKey);

    var message = { //this may vary according to the message type (single recipient, multicast, topic, et cetera)
        to: req.body.to,
        collapse_key: 'your_collapse_key',

        notification: {
            title: req.body.notificationTitle,
            body: req.body.notificationBody
        },

        // data: {  //you can send only notification or only data(or include both)
        //     my_key: 'my value',
        //     my_another_key: 'my another value'
        // }
    };

    fcm.send(message, function(err, response){
        if (err) {
            console.log("Something has gone wrong!");
        } else {
            console.log("Successfully sent with response: ", response);
        }
    });

})

module.exports = router
