'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/btn1', controller.btn.btn1);
  router.get('/btn2', controller.btn.btn2);
  router.get('/btn3', controller.btn.btn3);
  router.get('/btn4', controller.btn.btn4);
  router.post('/login', controller.user.login);
  router.get('/logout',controller.user.logout); 
  router.get('/user',controller.user.user);
   
  router.get('/cardList',controller.card.card_list);
  
};
