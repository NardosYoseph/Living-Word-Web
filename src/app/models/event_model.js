
class Event {
  constructor(_id,title, description, date, time,image,address,category) {
    this._id = _id;
    this.title = title;
    this.description = description;
    this.date = date;
    this.time = time;
    this.category=category;
  //  this.price = price;
   // this.availableTickets = availableTickets;
    this.image = image;
    this.address=address;

    // this.status = status;
    // this.attendee=attendee;
    // this.eventOrganizer=eventOrganizer;

  }
}

export default Event;
  