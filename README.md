# Per_Scholas-Exercises

Part 1:
Create a new folder for this lab called mongoose-flights
Create your package.jsonand server.js
Create all your basic folders to get started; just as we've done with every express projects ... i.e. models, routes, controllers, and views-- prepare to create additional files (modules) inside of these folders
Create a config/database.js module inside your project that connects to a database named flights-- Be sure to require the module in server.js
Create a FlightModel with the following properties:



Property	Type	Validations	Default Value
airline	String	enumto include 'American', 'Southwest' & 'United'	n/a
flightNo	Number	Required
Between 10and 9999	n/a
departs	Date	n/a	One year from date created



6. Implement the following User Stories ("As A User" == AAU):

AAU, I want to view a list of all flights (index view) that displays each flight's airline, flight no., and departure date/time
AAU, I want to create flights by entering the information on a page (new view) that has a form and submitting it



Hints:
Checkout the <input type="datetime-local"> Links to an external site.to assist users in entering valid date/time values



Part 2:
Display the default departure date when displaying the new flight form

Hints:

In the flight controller's newaction, you could create an in-memory flight like this:
const newFlight = new Flight();
This in-memory flight doc would have the default departure date set properly based on the logic in the function you assigned to default.
Just like any other data you want to access/display in a view template, that data needs to be passed by the controller action when it calls res.render, however…
Although an input of type="datetime-local" will display a date assigned to its value attribute, that date value needs to be formatted as a string matching this format: yyyy-MM-ddThh:mm (yes, a “T” character is used to separate the date portion from the time portion). One way of obtaining the properly formatted string is to use the toISOString() method and use slice() to return only the first 16 characters, for example:



	const newFlight = new Flight();
	// Obtain the default date
	const dt = newFlight.departs;
	// Format the date for the value attribute of the input
	const departsDate = dt.toISOString().slice(0, 16);
	res.render('flights/new', {departsDate});



5. Code these additional User Stories:

AAU, I want to be able to access each view via a navigation bar at the top of the page with links to:

ALL FLIGHTS, and
ADD FLIGHT
AAU, I want to view the list of flights by departure date in ascending order.
AAU, I want the flights in the list to be displayed using red text if the flight's departure date has passed.
 

Part 3:
The goal of this lab is to add the ability to specify the airportthat the flight is originating from; and a list (array) of destinationsfor the flight.

Styling is secondary, spend time on it only after the functionality has been implemented.

Create a destinationSchemathat will provide the structure for destination subdocuments with the following properties:

 

 

Property	Type	Validations	Default Value
airport	String	enumto include
'AUS', 'DAL', 'LAX', 'SAN' & 'SEA'	n/a
arrival	Date	n/a	n/a
 

 

Add the following two additional properties to the FlightModel:

 

 

Property	Type	Validations	Default Value
airport	String	enumto include
'AUS', 'DAL', 'LAX', 'SAN' & 'SEA'	'SAN'
destinations	[destinationSchema]	n/a	n/a
 

Modify the form for inputting a flight to add a <select name="airport">element to include a value for the new flight document's airportproperty. Ensure that there are <option>elements for the four allowable airport codes ('AUS', 'DAL', etc.).
Implement the following User Story:
AAU, when viewing the list of flights, I want to click on a "detail" link displayed next to each flight to view all of the properties for that flight (showview)
Implement the following User Story:
AAU, when viewing the details page (showview) for a flight, I want to be able to add a destination for that flight, including its arrivaldate/time & one of the established airport codes
Implement the following User Story:
AAU, when viewing the details page (showview) for a flight, I want to see a list of that flight's destinations(airport& arrival)



Part 4:
Sort the list of destinationsfor a flight by the arrivaldate/time in ascending order.
When adding a destination for a flight, exclude the airports listed in the <select>that have already been used by other destinations and/or the flight's airport.
Style the views
