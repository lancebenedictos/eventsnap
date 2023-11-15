import Attendee from "./Attendee";

type Organizer = {
  first_name: string;
  last_name: string;
  _id: string;
  email: string;
};

export type User = {
  _id: string;
  thumbnail: Thumbnail;
};

export type Thumbnail = {
  _id: string;
  faceId: string;
  downloadUrl: string;
};
export default class Event {
  _id: string;
  title?: string;
  date?: string;
  time?: string;
  description?: string;
  location?: string;
  organizer?: Organizer;
  attendees?: Attendee[];
  users?: User[];

  constructor(
    _id: string,
    title?: string,
    date?: string,
    time?: string,
    description?: string,
    location?: string,
    organizer?: Organizer,
    attendees?: Attendee[],
    users?: User[]
  ) {
    this._id = _id;
    this.title = title;
    this.date = date;
    this.time = time;
    this.description = description;
    this.location = location;
    this.organizer = organizer;
    this.attendees = attendees;
    this.users = users;
  }
}
