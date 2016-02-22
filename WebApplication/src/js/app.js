define(function(require) {

    var Backbone = require('backbone');
    var Marionette = require('backbone.marionette');

    var ToDoModel = require('./models/todo');

    var ToDo = Marionette.LayoutView.extend({
      tagName: 'li',
      template: require('hbs!./templates/todoitem')
    });

    var TodoList = Marionette.CompositeView.extend({
      el: '#app-hook',
      template: require('hbs!./templates/todolist'),

      childView: ToDo,
      childViewContainer: 'ul',

      ui: {
        assignee: '#id_assignee',
        form: 'form',
        text: '#id_text'
      },

      triggers: {
        'submit @ui.form': 'add:todo:item'
      },

      collectionEvents: {
        add: 'itemAdded'
      },

    //   modelEvents: {
    //     change: 'render'
    //   },

      onAddTodoItem: function() {
        // debugger
        this.model.set({
          assignee: this.ui.assignee.val(),
          text: this.ui.text.val()
        }, {validate: true});

        var items = this.model.pick('assignee', 'text');
        this.collection.add(items);
      },

      itemAdded: function() {
        this.model.set({
          assignee: '',
          text: ''
        });
        //this.render();
      }
    });

    var todo = new TodoList({
      collection: new Backbone.Collection([
        {assignee: 'Scott', text: 'Write a book about Marionette'},
        {assignee: 'Andrew', text: 'Do some coding'}
      ]),
      model: new ToDoModel()
    });

    todo.render();

} );
