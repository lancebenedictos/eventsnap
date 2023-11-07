import { useState } from "react";
import TextField from "../../common/TextField";
import { Link } from "react-router-dom";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <main className="bg-white full flex flex-col items-center">
      <h2 className="text-3xl pt-4 ">Sign up</h2>
      <p className="pt-2">Welcome to EventSnap</p>

      <form action="" className="flex flex-col w-full py-4" onSubmit={onSubmit}>
        <label htmlFor="first_name">First name</label>
        <TextField
          inputType="text"
          value={firstName}
          onValueChange={setFirstName}
          id="first_name"
          placeholder="Enter first name"
        />

        <label htmlFor="last_name">Last name</label>
        <TextField
          inputType="text"
          value={lastName}
          onValueChange={setLastName}
          id="last_name"
          placeholder="Enter last name"
        />

        <label htmlFor="last_name">Email</label>
        <TextField
          inputType="email"
          value={email}
          onValueChange={setEmail}
          id="email"
          placeholder="Enter email address"
        />

        <label htmlFor="last_name">Password</label>
        <TextField
          inputType="password"
          value={password}
          onValueChange={setPassword}
          id="password"
          placeholder="Enter password"
        />

        <p className="mt-2">
          Already have an account? <Link to="/login">Login.</Link>
        </p>

        <button className="bg-cta text-white py-2 w-44 self-center mt-4 rounded-sm">
          Submit
        </button>
      </form>
    </main>
  );
}

export default Signup;
