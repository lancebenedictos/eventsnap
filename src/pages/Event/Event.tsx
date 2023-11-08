import MenuBar from "./MenuBar";
import { BiCopy } from "react-icons/bi";
import Reminders from "./Reminders";

function Event() {
  return (
    <main className="flex flex-col">
      <MenuBar />
      <span className="flex w-full bg-white p-2 rounded-sm">
        <p className=" line-clamp-1">
          www.eventsnap.com/invite/id ?asdasdsadknlasdlknsdlknasdlka
        </p>
        <button
          onClick={() => {
            navigator.clipboard.writeText("test");
          }}
          className="ml-auto bg-background px-2 rounded-md"
        >
          <BiCopy />
        </button>
      </span>
      <h2>Event name</h2>
      <h2>Date</h2>
      <h2>Description</h2>

      <Reminders />

      <h2 className="font-bold text-xl">Attendees</h2>

      <h2 className="font-bold text-xl">Photos</h2>
    </main>
  );
}

export default Event;
