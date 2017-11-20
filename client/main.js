import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Mongo } from 'meteor/mongo';
 
Tasks = new Mongo.Collection('tasks');

import './main.html';


Template.add_task.events({
	'click .submit' : function(){
		Tasks.insert({
			task: $('.the_task').val()
		})
	}
});

Template.find_task.events({
	'click .find' : function(){
		result = Tasks.findOne({task: $('.the_find').val()});
		//console.log("result : "+JSON.stringify(result));
		$('#result').text("id : " + result._id + ",   task : " + result.task);
	}
});

Template.remove_task.events({
	'click .remove' : function(){
		Tasks.remove({
	 		_id: Tasks.findOne({task: $('.the_id').val()})._id
		})
	}
});

Template.update_task.events({
	'click .update' : function(){
		Tasks.update({_id : $('.the_update').val()},{$set:{task : $('.the_set').val()}});
	}
})

Template.list_tasks.helpers({
		'all_tasks' : function(){
		 result = Tasks.find();
		 return result
	}
});


