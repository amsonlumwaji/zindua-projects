// Create a class to represent an event
class Event {
    constructor(title, date, location) {
      this.title = title;
      this.date = date;
      this.location = location;
      this.attendees = new Set();
    }
  
    // Method to add attendees to the event
    addAttendee(attendee) {
      this.attendees.add(attendee);
    }
  }
  
  // Create an array of events
  const events = [
    new Event("Birthday Party", new Date("2023-08-15"), "Park Avenue"),
    new Event("Conference", new Date("2023-09-20"), "Convention Center"),
    new Event("Wedding", new Date("2023-10-05"), "Rose Garden"),
    // Add more events as needed
  ];
  
  // Example of adding attendees to an event
  events[0].addAttendee("John");
  events[0].addAttendee("Alice");
  events[1].addAttendee("Bob");
  events[2].addAttendee("Emma");
  
  console.log(events);
  