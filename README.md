##Structural Patterns
Structrual patterns are concerned with how object are made up and simplify relationship between objects

##Decorator pattern
It is a structural pattern which is used to add new functioanlity to an existing object, without being obtrusive (it protects existing object, but allows extended functionality).

##Fascade Patterns
It is a structural pattern which simplified interface. When we have many methods, which are need to do certain task, we can wrap them in fascade.

##Flyweight Pattern
It is a structural which conserves memory by sharing poritions of an object betwene objects. Results in a smaller memory footprint.




##Behavioral Patterns
It is a behavioral patterns are concerned with the assigment of responsibility between objects and how they communicate.
Bevarioral patterns deal with resposibilites of objects. They help objects cooperate and asign clear hierarchy of them.
Behavioral object can encapsulate request.

### Decorator Pattern
It is a behavioral pattern in which an object, called the subject, maintains a list of its dependents, called observers, and notifies them automatically of any state changes, usually by calling one of their methods.

The one of object is the focal point which have the list of observers (subscribers) and a method to notify.


The focal point with observers are very loosely connected. Relation is crated during running the program and can be dinamically changed.

Observes don't know about other observers.



|    Subject     |  	Notifications	   |   Observers              |
|----------------|-------------------------|--------------------------|
|          	     |:arrow_upper_right:      |  concrete observer A     |
|the focal point |:arrow_right:            | concrete observer B      |
|                |:arrow_lower_right:       |  concrete observer C     |


### Mediator Pattern
It is a behvioral paterern which defines an object that encapsulates how a set of objects interact.

One object manges all communication. It is a mediator.

We have many to many relationship by meditor. Objects no longer communicate directly with each other, but instead communicate through the mediator. This reduces the dependencies between communicating objects

|       |     |   |   |   |
|-------|--------|------------|------------|--------------------------|
|       |          	     |          |:arrow_upper_right:       |  concrete obj A     |
|obj    |:arrow_right:    |meditor   |:arrow_right:      |  concrete obj B     |
|       |                 |          |:arrow_lower_right:       |  concrete obj C     |

###Command Pattern
It is a behavioral pattern which encapsulate the calling of method as an object

It ensure fully decouples the executioon from the implementation, allows for less fragile implementations and support undo operations.
It is especially good for supporting aduiting and logging of operations.
