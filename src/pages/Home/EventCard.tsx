import { Link } from "react-router-dom";
import Event from "../../models/Event";

type props = {
  event: Event;
};
function EventCard({ event }: props) {
  return (
    <Link
      to={`/events/${event._id}`}
      className="bg-white p-2 rounded-md shadow-md hover:bg-cta hover:text-white"
    >
      <h4 className=" font-bold text-xl">{event.title || "New event"}</h4>
      {event.date ? <p>{event?.date}</p> : <p>No date</p>}
    </Link>
  );
}

export default EventCard;
