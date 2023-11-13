type Organizer = {
  first_name: string;
  last_name: string;
  _id: string;
  email: string;
};
export default class Event {
  _id: string;
  title?: string;
  date?: string;
  time?: string;
  description?: string;
  location?: string;
  organizer?: Organizer;

  constructor(
    _id: string,
    title?: string,
    date?: string,
    time?: string,
    description?: string,
    location?: string,
    organizer?: Organizer
  ) {
    this._id = _id;
    this.title = title;
    this.date = date;
    this.time = time;
    this.description = description;
    this.location = location;
    this.organizer = organizer;
  }
}
