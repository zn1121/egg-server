const Controller = require('egg').Controller;
const mqtt = require('mqtt');

class UserController extends Controller {

    async login() {
        // const { ctx } = this;
        const ctx = this.ctx;
        // ctx.body = {name:"zhangning",avatar: 'http://file01.yunjichina.com.cn/uploads/20180927/60d8343840746794f7ea099e1c76390f.jpg'}
        ctx.body = {
            name: ctx.request.body.userName,
            password: ctx.request.body.password
        }
        console.log(ctx.body);
        if (ctx.body.name == "admin" && ctx.body.password == "ant.design") {
            ctx.session.user = ctx.body.name;
            ctx.body = { 
                name: "zhangning", 
                avatar: 'http://file01.yunjichina.com.cn/uploads/20180927/60d8343840746794f7ea099e1c76390f.jpg', 
                status: "ok" 
            }
            console.log("session是",ctx.session)
            //获取session
            // const userId = ctx.session.userId;
            // const posts = await ctx.service.post.fetch(userId);
        }
    }
    async user(){
        const ctx = this.ctx;
        if(ctx.session.user == "admin"){
            ctx.body = {
                name:ctx.session.user,
                avatar: 'http://file01.yunjichina.com.cn/uploads/20180927/60d8343840746794f7ea099e1c76390f.jpg',
                status: 'ok'
            }
        }else{
            ctx.body = {
                status:401
            }
        }
    }
    async logout(){
        const ctx = this.ctx;
        ctx.session = null;       
    }



}

module.exports = UserController;