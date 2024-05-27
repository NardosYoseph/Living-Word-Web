
class Event {
  constructor(id,title, description, date, time,image,address) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.date = date;
    this.time = time;
  //  this.price = price;
   // this.availableTickets = availableTickets;
    this.image = image;
    this.address;

    // this.status = status;
    // this.attendee=attendee;
    // this.eventOrganizer=eventOrganizer;

  }
}

export default Event;
  