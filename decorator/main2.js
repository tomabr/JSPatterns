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


//Decorator
var UrgentTask = function(name, priority){
	Task.call(this, name); //
	this.priority = priority;
};

//set prototype
//create new object witch is conected with Task.prototype via [[Prototype]]
UrgentTask.prototype = Object.create(Task.prototype);
//Bad solution:
//Urgent.prototype = Task.prototype because in this way Bar.prototype.sth modifies the same object as Task.prototype.sth
//Urgent.prootype = new Task(); - we create new object, but also run operation which are implemented in Task constructor, so it could do not expected solutions

//ES6 solution
//Object.setPrototypeOf(UrgentTask.prototype, Task.prototype);


UrgentTask.prototype.save = function(){
	console.log('notifying important people');
	Task.prototype.save.call(this);
};

var ut = new UrgentTask('urgent task', 2);
ut.complete();
