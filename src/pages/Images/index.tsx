import { getImages } from "@/api/users";
import { Thumbnail } from "@/models/Event";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

function Images() {
  const { eventId, userId } = useParams();

  const { data } = useQuery({
    queryKey: [eventId, userId],
    queryFn: () => getImages(eventId!, userId!),
  });

  return (
    <main className="bg-white">
      <h2 className=" text-2xl font-bold">Your photos</h2>

      <div className=" grid grid-cols-3 gap-2 md:grid-cols-5 lg:grid-cols-9">
        {data?.data
          ? data.data.resources.map((el: Thumbnail) => (
              <img
                key={el._id}
                src={el.downloadUrl}
                className="aspect-square object-cover rounded-sm"
              />
            ))
          : null}
      </div>
    </main>
  );
}

export default Images;
