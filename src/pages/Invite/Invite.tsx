import { Formik } from "formik";
import * as Yup from "yup";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ErrorMessage from "@/common/ErrorMessage";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getEvent } from "@/api/events";
import { registerAttendee } from "@/api/users";
import { AxiosError } from "axios";
import { useState } from "react";

interface Values {
  first_name: string;
  last_name: string;
  email: string;
}

const InviteSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  last_name: Yup.string()
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
    return null;
  }
}

function Invite() {
  const [error, setError] = useState<string | undefined>(undefined);
  const [success, setSuccess] = useState<boolean>(false);

  const { id } = useParams();
  const { data } = useQuery({
    queryKey: [id],
    queryFn: () => getEvent(id),
  });

  return (
    <main className="bg-white full flex flex-col lg:flex-row items-center lg:items-start gap-2">
      <div className=" lg:w-[40%] w-full p-4 lg:p-0">
        <h2 className="text-3xl pt-4 ">
          Register for {addApostropheS(data?.organizer?.first_name)} event
        </h2>
        <p className="pt-2 font-bold">{data?.title}</p>
        <p>{data?.description}</p>
        <p>
          When:{data?.date} | {data?.time}
        </p>
        <p>Where: {data?.location}</p>
      </div>
      <div className="w-full p-4 lg:p-0 lg:w-[60%]">
        {success ? (
          <h1 className="text-2xl text-green-300">You are now registered!</h1>
        ) : (
          <Formik
            validationSchema={InviteSchema}
            initialValues={{
              first_name: "",
              last_name: "",
              email: "",
            }}
            onSubmit={async (values: Values) => {
              try {
                await registerAttendee({
                  user: values,
                  eventId: id,
                });
                setSuccess(true);
                setError(undefined);
              } catch (error) {
                const err = error as AxiosError;

                setSuccess(false);
                if (err.response?.status === 400) {
                  setError("Email is already registered");
                }
              }
            }}
          >
            {({ values, errors, touched, handleChange, handleSubmit }) => (
              <form
                action=""
                className="flex flex-col w-full py-4"
                onSubmit={handleSubmit}
              >
                <Label htmlFor="first_name">First name</Label>

                <Input
                  placeholder="Enter you first name"
                  value={values.first_name}
                  id="first_name"
                  type="text"
                  onChange={handleChange}
                />
                {errors.first_name && touched.first_name ? (
                  <ErrorMessage msg={errors.first_name} />
                ) : null}

                <Label htmlFor="last_name">Last name</Label>

                <Input
                  placeholder="Enter your last name"
                  value={values.last_name}
                  id="last_name"
                  type="text"
                  onChange={handleChange}
                />
                {errors.last_name && touched.last_name ? (
                  <ErrorMessage msg={errors.last_name} />
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

                {error ? <ErrorMessage msg={error} /> : null}

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
        )}
      </div>
    </main>
  );
}

export default Invite;
