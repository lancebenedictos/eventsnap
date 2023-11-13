import { Formik } from "formik";
import * as Yup from "yup";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ErrorMessage from "@/common/ErrorMessage";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getEvent } from "@/api/events";
interface Values {
  name: string;
  email: string;
}

const InviteSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

function addApostropheS(name?: string) {
  if (name && typeof name === "string") {
    // Check if the name already ends with 's'
    if (name.slice(-1) === "s") {
      return name + "'";
    } else {
      return name + "'s";
    }
  } else {
    // Handle invalid input
    console.error("Invalid input. Please provide a valid string.");
    return null;
  }
}

function Invite() {
  const { id } = useParams();
  const { data } = useQuery({
    queryKey: [id],
    queryFn: () => getEvent(id),
  });

  console.log(data);

  return (
    <main className="bg-white full flex flex-col items-center">
      <h2 className="text-3xl pt-4 ">
        Register for {addApostropheS(data?.organizer?.first_name)} event
      </h2>
      <p className="pt-2 font-bold">{data?.title}</p>
      <p>{data?.description}</p>
      <p>{data?.date}</p>
      <p>{data?.time}</p>
      <p>{data?.location}</p>

      <Formik
        validationSchema={InviteSchema}
        initialValues={{
          name: "",
          email: "",
        }}
        onSubmit={(values: Values) => {}}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <form
            action=""
            className="flex flex-col w-full py-4"
            onSubmit={handleSubmit}
          >
            <Label htmlFor="first_name">Name</Label>

            <Input
              placeholder="Enter your name"
              value={values.name}
              id="first_name"
              type="text"
              onChange={handleChange}
            />
            {errors.name && touched.name ? (
              <ErrorMessage msg={errors.name} />
            ) : null}

            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && touched.email ? (
              <ErrorMessage msg={errors.email} />
            ) : null}

            <button
              //   disabled={mutation.isPending}
              type="submit"
              className="bg-cta text-white py-2 w-44 self-center mt-4 rounded-sm disabled:bg-ctaLight"
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
    </main>
  );
}

export default Invite;
