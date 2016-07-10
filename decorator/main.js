var Task = function (data){
	this.name = data.name;
	this.completed = data.completed;
};

Task.prototype.complete = function(){
	console.log('completing task: ' + this.name);
	this.completed = true;
};

Task.prototype.save = function(){
	console.log('saiving task: ' + this.name);
};

var myTask = new Task('Legacy Task');
myTask.complete();
myTask.save();

var urgentTask = new Task('Urgent Task');
urgentTask.priority = 2;
urgentTask.notify = function(){
	console.log('notifying important people');
};

urgentTaks.complete();

//decorator
urgentTask.save = function(){
	this.notify();
	Task.prototype.save.call(this);
};

urgentTask.save();
