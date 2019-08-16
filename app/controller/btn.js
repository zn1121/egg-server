const Controller = require('egg').Controller;
const mqtt = require('mqtt');


class BtnController extends Controller {
    async btn1() {
        const { ctx } = this;
        // ctx.set('Access-Control-Allow-Origin', '*')
        var client = mqtt.connect('mqtt://127.0.0.1:1883')

        client.on('connect', function () {
            client.subscribe('btn1', function (err) {
                if (!err) {
                    client.publish('btn1', 'Hello btn1（来自egg框架）')

                }
            })

        })
        ctx.body = ["这是第一个按钮（来自egg框架）"]

        client.on('message', function (topic, message) {
            console.log('这是第一个按钮接口');
            console.log(message.toString());
            client.end()
        })
    }

    async btn2() {
        const { ctx } = this;
        // ctx.set('Access-Control-Allow-Origin', '*')
        var client = mqtt.connect('mqtt://127.0.0.1:1883')

        client.on('connect', function () {
            client.subscribe('btn2', function (err) {
                if (!err) {
                    client.publish('btn2', 'Hello btn2（来自egg框架）')

                }
            })

        })
        ctx.body = ["这是第二个按钮（来自egg框架）"]

        client.on('message', function (topic, message) {
            console.log('这是第二个按钮接口');
            console.log(message.toString());
            client.end()
        })
    }

    async btn3() {
        const { ctx } = this;
        // ctx.set('Access-Control-Allow-Origin', '*')
        var client = mqtt.connect('mqtt://127.0.0.1:1883')

        client.on('connect', function () {
            client.subscribe('btn3', function (err) {
                if (!err) {
                    client.publish('btn3', 'Hello btn3（来自egg框架）')

                }
            })

        })
        ctx.body = ["这是第三个按钮（来自egg框架）"]

        client.on('message', function (topic, message) {
            console.log('这是第三个按钮接口');
            console.log(message.toString());
            client.end()
        })
    }

    async btn4() {
        const { ctx } = this;
        ctx.set('Access-Control-Allow-Origin', '*')
        var client = mqtt.connect('mqtt://127.0.0.1:1883')

        client.on('connect', function () {
            client.subscribe('btn4', function (err) {
                if (!err) {
                    client.publish('btn4', 'Hello btn4（来自egg框架）')

                }
            })

        })
        ctx.body = ["这是第四个按钮（来自egg框架）"]

        client.on('message', function (topic, message) {
            console.log('这是第四个按钮接口');
            console.log(message.toString());
            client.end()
        })
    }
}

module.exports = BtnController;