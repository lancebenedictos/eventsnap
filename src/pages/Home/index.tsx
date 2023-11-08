import EventCard from "./EventCard";

function Home() {
  return (
    <main>
      <h2 className="text-2xl">Your events</h2>
      <button className=" bg-cta text-white px-4 py-2  rounded-sm">
        Create event
      </button>

      <div className="mt-4 flex flex-col gap-4">
        <EventCard title="test" date={new Date(Date.now()).getFullYear()} />
        <EventCard title="test" date={new Date(Date.now()).getFullYear()} />
      </div>
    </main>
  );
}

export default Home;
