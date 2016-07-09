var Task = require('./task');


//Observers:
var notificationService = function(){
	var message = 'Notifying ';
	this.update = function(task){
		console.log(message + task.user + ' for task ' + task.name);
	};
};

var logginService = function(){
	var message = 'Logging ';
	this.update = function(task){
		console.log(message + task.user + ' for task ' + task.name);
	};
};

var auditingService = function(){
	var message = 'Auditing ';
	this.update = function(task){
		console.log(message + task.user + ' for task ' + task.name);
	};
};
//
//ObserverList{}
function ObserverList(){
	this.observerList = [];
}

ObserverList.prototype.add = function( obj ){
	return this.observerList.push( obj );
};

ObserverList.prototype.get = function( index ){
	if( index > -1 && index < this.observerList.length ) {
		return this.observerList[ index ];
	}
};

ObserverList.prototype.count = function(){
	return this.observerList.length;
};

ObserverList.prototype.removeAt = function( index ){
	this.observerList.splice( index, 1);
};

ObserverList.prototype.indexOf = function( obj, startIndex ){
	var i = startIndex;
	while(i < this.observerList.length){
		if (this.observerList[i] === obj){
			return i;
		}
		i++;
	}

	return -1;
};



//Subject
var ObservableTask = function(data) {
	Task.call(this, data);
	this.observers = new ObserverList();
};

ObservableTask.prototype.addObserver = function( observer ){
	this.observers.add( observer);
};

ObservableTask.prototype.notify = function( context ){
	var observerCount = this.observers.count();
	for(var i =0; i < observerCount; i++){
		this.observers.get(i)(context);
	}
};

ObservableTask.prototype.save = function() {
	this.notify(this);
	Task.prototype.save.call(this);
};

ObservableTask.prototype.removeObserver = function(observer){
	this.observers.removeAt(this.observers.indexOf(observer, 0));
};


var not = new notificationService();
var ls = new logginService();
var audit = new auditingService();


//var task1 = new Task({name: 'create a demo for constructors', user: 'Jon'});
//task1.save();
var task1 = new ObservableTask({name: 'create a demo for constructors', user: 'Jon'});
task1.addObserver(not.update);
task1.addObserver(ls.update);
task1.addObserver(audit.update);
task1.save();
console.log("-----------");
task1.removeObserver(audit.update);
task1.save();
