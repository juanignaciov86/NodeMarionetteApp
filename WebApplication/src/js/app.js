define(function (require) {


    var Backbone = require('backbone');
    var Marionette = require('backbone.marionette');

    var TodoList = Marionette.LayoutView.extend({
      el: '#app-hook',
      template: require('hbs!./templates/layout')
    });

    var todo = new TodoList({
      model: new Backbone.Model({
        items: [
          {assignee: 'Scott', text: 'Write a book about Marionette'},
          {assignee: 'Andrew', text: 'Do some coding'}
        ]
      })
    });

    todo.render();

} );
