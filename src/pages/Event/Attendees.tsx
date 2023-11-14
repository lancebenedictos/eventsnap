import { removeAttendee } from "@/api/users";
import Attendee from "@/models/Attendee";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CiTrash } from "react-icons/ci";
import { useParams } from "react-router-dom";
function Attendees({ attendees }: { attendees?: Attendee[] }) {
  const { id } = useParams();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (userId?: string) => removeAttendee(id!, userId!),
    onSuccess: ({ data }) => {
      queryClient.setQueryData([id], data.event);
    },
  });
  return (
    <div className=" bg-white rounded-sm">
      <h2 className=" font-bold text-2xl p-2">Attendees</h2>
      <hr />

      <ul className="flex flex-col ">
        {attendees?.map((el) => (
          <li
            key={el._id}
            className=" border-b-2 flex p-2 items-center odd:bg-white even:bg-slate-50"
          >
            <span className="  overflow-hidden ">
              <p className="font-bold">
                {el.first_name} {el.last_name}
              </p>
              {/* <p className=" line-clamp-1 text-ellipsis">{el.email}</p> */}
            </span>

            <span className="flex ml-auto gap-2">
              <button className="p-2">RSVP</button>

              <button
                className=" bg-ctaLight active:bg-warning aspect-square p-2 rounded-sm flex items-center justify-center"
                onClick={() => mutation.mutate(el._id)}
              >
                <CiTrash />
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Attendees;
