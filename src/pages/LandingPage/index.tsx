import { Link } from "react-router-dom";
import accent from "../../assets/square accent.svg";
function LandingPage() {
  return (
    <>
      <header className="mt-[10%]  flex flex-col gap-4 md:grid md:grid-cols-12 md:gap-8">
        <span className=" col-span-5 col-start-2 px-4">
          <h1 className=" tracking-wider">
            Make event planning feel like a breeze
          </h1>
          <p className="tracking-wide mt-4">
            EventSnap helps you make events plan easier by providing you tools
            for creating invitations, online photo album, participant RSVP and
            more!
          </p>
        </span>
        <img src={accent} className="hidden md:block mx-auto col-start-10" />
        <div className=" bg-warning text-white col-start-1 col-span-6  px-4 md:pl-[17%] flex">
          <span className="py-6">
            <h2 className=" text-2xl">How much is it?</h2>
            <p>Good news! It's completely free</p>
            <p className=" font-bold mt-4">Which includes: </p>
            <ul className="list-disc pl-4">
              <li>Emailed invites for RSVP</li>
              <li>Online photo album</li>
            </ul>
          </span>
          <div className="hidden md:block ml-auto">
            <img src={accent} className="h-1/2 " />
            <img src={accent} className="h-1/2 " />
          </div>
        </div>

        <div className="col-start-7 col-span-5 p-6 flex flex-col gap-4">
          <h2 className=" text-2xl">How does it work?</h2>
          <p>
            After creating an event, you have to option to generate a QR code
            that your event participants to scan. After scanning, your
            participants only need to register their face on the app and voila!
            All images uploaded with their images will be put into one album.
          </p>

          <Link
            to="/register"
            className=" bg-cta self-end text-white px-4 py-2 rounded-sm"
          >
            Join now
          </Link>
        </div>
      </header>

      <main>
        <section id="about" className=" h-screen">
          adsfasdf
        </section>

        <section id="contact" className=" h-screen"></section>
      </main>
    </>
  );
}

export default LandingPage;
