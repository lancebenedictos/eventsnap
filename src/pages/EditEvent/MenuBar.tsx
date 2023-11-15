import { Link } from "react-router-dom";

function MenuBar({ id }: { id?: string }) {
  return (
    <div className="flex gap-2">
      <Link
        to={`/event/edit/${id}`}
        className="bg-cta px-4 py-2 text-white rounded-sm"
      >
        Edit event
      </Link>

      <button className="bg-cta px-4 py-2 text-white rounded-sm">
        Create email
      </button>

      <button className="bg-cta px-4 py-2 text-white rounded-sm">
        Generate QR
      </button>
    </div>
  );
}

export default MenuBar;
