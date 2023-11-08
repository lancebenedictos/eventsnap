import Event from "../../models/Event";

function EventCard({ title, date }: Event) {
  return (
    <div className="bg-white p-2 rounded-md shadow-md">
      <h4 className=" font-bold text-xl">{title}</h4>
      <p>{date}</p>
    </div>
  );
}

export default EventCard;
