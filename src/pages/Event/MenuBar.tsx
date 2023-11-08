function MenuBar() {
  return (
    <div className="flex gap-2">
      <button className="bg-cta px-4 py-2 text-white rounded-sm">
        Edit event
      </button>

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
