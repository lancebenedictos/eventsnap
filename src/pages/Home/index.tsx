import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import EventCard from "./EventCard";
import { createEvent, getEvents } from "@/api/events";
import { useNavigate } from "react-router-dom";

function Home() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { data } = useQuery({
    queryKey: ["events"],
    queryFn: getEvents,
  });

  const mutation = useMutation({
    mutationFn: createEvent,
    onSuccess: (_data) => {
      queryClient.setQueryData(["events", _data._id], _data);
      navigate(`event/${_data._id}`);
    },
  });

  return (
    <main>
      <h2 className="text-2xl">Your events</h2>
      <button
        className=" bg-cta text-white px-4 py-2  rounded-sm"
        onClick={() => {
          mutation.mutate();
        }}
      >
        Create event
      </button>

      <div className="mt-4 flex flex-col gap-4">
        {data?.map((el) => (
          <EventCard event={el} key={el._id} />
        ))}
      </div>
    </main>
  );
}

export default Home;
