import { User } from "@/models/Event";
import { Link, useParams } from "react-router-dom";

type props = {
  users?: User[];
};

function Gallery({ users }: props) {
  const { id } = useParams();

  return (
    <div className=" grid grid-cols-3 gap-2 md:grid-cols-5 lg:grid-cols-9">
      {users?.map(({ thumbnail, _id }) => (
        <Link to={`/${id}/images/${_id}`} key={thumbnail._id}>
          <img
            src={thumbnail.downloadUrl}
            className=" aspect-square object-cover rounded-sm shadow-sm w-full"
          />
        </Link>
      ))}
    </div>
  );
}

export default Gallery;
