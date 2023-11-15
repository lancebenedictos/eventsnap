import MenuBar from "./MenuBar";
import { BiCopy } from "react-icons/bi";
import Reminders from "./Reminders";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getEvent } from "@/api/events";
import Attendees from "./Attendees";

import Gallery from "../Event/Gallery";

function Event() {
  const { id } = useParams();
  const { data } = useQuery({
    queryKey: [id],
    queryFn: () => getEvent(id),
  });

  return (
    <main className="flex flex-col gap-4">
      <MenuBar id={id} />
      <span className=" w-full bg-white p-2 rounded-sm">
        <h2 className=" font-bold text-2xl">Event invite link</h2>
        <p>Use this link for participant registration</p>
        <hr />
        <span className="flex bg-background p-1 rounded-sm mt-4">
          <p className=" line-clamp-1">{`${location.origin}/invite/${id}`}?</p>
          <button
            onClick={() => {
              navigator.clipboard.writeText(`${location.origin}/invite/${id}`);
            }}
            className="ml-auto bg-background px-2 rounded-md"
          >
            <BiCopy />
          </button>
        </span>
      </span>

      <div className="flex flex-col w-full bg-white p-2 rounded-sm">
        <h2 className=" font-bold text-2xl">Event details</h2>
        <hr className="mb-4" />
        <h2 className="font-bold">{data?.title}</h2>
        <p>{data?.description}</p>
        <p>
          <span className=" font-bold">Date:</span> {data?.date}
        </p>
        <p>
          <span className="font-bold">Time:</span> {data?.time}
        </p>
        <p>
          <span className="font-bold">Location:</span> {data?.location}
        </p>
      </div>

      <Reminders />

      <Attendees attendees={data?.attendees} />
      {data?.users ? <Gallery users={data.users} /> : null}
    </main>
  );
}

export default Event;
