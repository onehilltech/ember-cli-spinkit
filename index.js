'use strict';

module.exports = {
  name: require('./package').name,

  included (app) {
    this._super (...arguments);

    app.import ({
      development: 'node_modules/spinkit/spinkit.css',
      production: 'node_modules/spinkit/spinkit.min.css'
    });
  },

};
