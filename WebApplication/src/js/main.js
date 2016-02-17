requirejs.config({
  paths: {
    app: './app',
    jquery: '/bower_components/jquery/dist/jquery',
    underscore: '/bower_components/underscore/underscore',
    backbone: '/bower_components/backbone/backbone',
    'backbone.babysitter': '/bower_components/backbone.babysitter/lib/backbone.babysitter',
    'backbone.wreqr': '/bower_components/backbone.wreqr/lib/backbone.wreqr',
    'backbone.marionette': '/bower_components/marionette/lib/core/backbone.marionette',
    handlebars: '/bower_components/handlebars/handlebars',
    text: '/bower_components/text/text',
    hbs: "/bower_components/require-handlebars-plugin/hbs"
  },
  shim: {
    underscore: {
      exports: '_'
    },

    hbs: { // optional
      helpers: true,            // default: true
      templateExtension: 'hbs', // default: 'hbs'
      partialsUrl: ''           // default: ''
    },
    backbone: {
      exports: 'Backbone',
      deps: [ 'jquery', 'underscore' ]
    },
    'backbone.marionette': {
      exports: 'Backbone.Marionette',
      deps: [
          'backbone',
          'backbone.babysitter',
          'backbone.wreqr'
      ]
    }
  },
  deps: [ 'jquery', 'underscore' ]
} );


requirejs(['app']);
