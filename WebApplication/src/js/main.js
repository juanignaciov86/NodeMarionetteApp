requirejs.config({
  paths: {
    'jquery': '../../bower_components/jquery/dist/jquery',
    'underscore': '../../bower_components/underscore/underscore',
    'backbone': '../../bower_components/backbone/backbone',
    'backbone.babysitter': '../../bower_components/backbone.babysitter/lib/backbone.babysitter',
    'backbone.wreqr': '../../bower_components/backbone.wreqr/lib/backbone.wreqr',
    'backbone.marionette': '../../bower_components/marionette/lib/core/backbone.marionette'
  },
  shim: {
    underscore: {
      exports: '_'
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


require([
    'jquery',
    'backbone',
    'backbone.marionette'
], function(
    $,
    Backbone,
    Marionette
) {

    $( document ).ready( function() {
        console.log( 'Document is ready.' );
        console.log( 'jQuery: ', $.fn.jquery );
        console.log( 'Backbone: ', Backbone.VERSION );
        console.log( 'Marionette: ', Marionette.VERSION );
    } );

} );
