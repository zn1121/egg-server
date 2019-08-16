'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
};

exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks'
};


exports.cors = {//跨域
  enable: true,
  package: 'egg-cors',
};

exports.session = true;

// exports.redis = {
//   enable: true,
//   package: 'egg-redis',
// };

// exports.session = {
//   key: 'EGG_SESS',
//   maxAge: 24 * 3600 * 1000, // 1 天
//   httpOnly: true,
//   encrypt: true,
// };


