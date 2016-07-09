#Behavioral patterns
Behavioral patterns are concerned with the assigment of responsibility between objects and how they communicate.
Bevarioral patterns deal with resposibilites of objects. They help objects cooperate and asign clear hierarchy of them.
Behavioral object can encapsulate request.


## Decorator pattern
It is a behavioral pattern in which an object, called the subject, maintains a list of its dependents, called observers, and notifies them automatically of any state changes, usually by calling one of their methods.

The one of object is the focal point which have the list of observers (subscribers) and a method to notify.


The focal point with observers are very loosely connected. Relation is crated during running the program and can be dinamically changed.

Observes don't know about other observers.



|    Subject     |  	Notifications	   |   Observers              |
|----------------|-------------------------|--------------------------|
|          	     |:arrow_upper_right:      |  concrete observer A     |
|the focal point |:arrow_right:            | concrete observer B      |
|                |:arrow_lower_right:       |  concrete observer C     |


## Mediator pattern
It is a behvioral paterern which defines an object that encapsulates how a set of objects interact.

One object manges all communication. It is a mediator.

We have many to many relationship by meditor. Objects no longer communicate directly with each other, but instead communicate through the mediator. This reduces the dependencies between communicating objects

|         |     |   |   |   |
       |          	     |          |:allow_upper_right       |  concrete obj A     |
meditor|:arrow_right:    |meditor   |:arrow_right:      |  concrete obj B     |
       |                 |          |:arrow_lower_right       |  concrete obj C     |
