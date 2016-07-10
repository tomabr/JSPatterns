var Task = function (data){
	this.name = data.name;
	this.priority = data.priority;
	this.project = data.project;
	this.user = data.user;
	this.completed = data.completed;
};

var TaskService = function(){
	return {
		complete: function(task){
			task.completed = true;
			console.log('Task is completed');
		},
		setCompleteData: function(task){
			task.completedData = new Data();
			console.log(task.name + ' completed on ' + task.completedData);
		},
		saveTask: function(task) {
			console.log('saving ' + task.name);
		}
	};
};

//Fascade
var TaskServiceWrapper = function(){

	var completeAndNotify = function(task){
		TaskService.complete(task);
		if(task.completed === true){
			TaskService.setCompleteData(task);
			TaskService.save();
		}
	};

	return {
		completeAndNotify: completeAndNotify
	};
}();



var task = new Task({
	name: 'My Task',
	priority: 1,
	project: 'Courses',
	user: 'John',
	completed: false
});

TaskServiceWrapper.completeAndNotify(myTask);
