import { User } from "@/models/Event";
import { Link, useParams } from "react-router-dom";

type props = {
  users?: User[];
};

function Gallery({ users }: props) {
  const { id } = useParams();

  return (
    <div className=" grid grid-cols-3 gap-2">
      {users?.map(({ thumbnail, _id }) => (
        <Link to={`/${id}/images/${_id}`} key={thumbnail._id}>
          <img
            src={thumbnail.downloadUrl}
            className=" aspect-square object-cover rounded-sm shadow-sm"
          />
        </Link>
      ))}
    </div>
  );
}

export default Gallery;
