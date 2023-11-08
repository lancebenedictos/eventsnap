export default class Reminder {
  task: string;
  time: string;
  date: Date;
  _id?: string;
  done: boolean;
  constructor(
    task: string,
    time: string,
    date: Date,
    _id: string,
    done: boolean
  ) {
    this.task = task;
    this.time = time;
    this.date = date;
    this._id = _id;
    this.done = done;
  }
}
