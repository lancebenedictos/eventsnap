import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const changeEvent = (setFunction: (value: string) => void) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setFunction(e.target.value);
    };
  };

  return (
    <main className="bg-white full flex flex-col items-center">
      <h2 className="text-3xl pt-4 ">Sign up</h2>
      <p className="pt-2">Welcome to EventSnap</p>

      <form action="" className="flex flex-col w-full py-4" onSubmit={onSubmit}>
        <Label htmlFor="first_name">First name</Label>

        <Input
          placeholder="First name"
          value={firstName}
          id="first_name"
          type="text"
          onChange={changeEvent(setFirstName)}
        />

        <Label htmlFor="last_name">Last name</Label>
        <Input
          placeholder="Last name"
          value={lastName}
          id="last_name"
          type="text"
          onChange={changeEvent(setLastName)}
        />

        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="Email address"
          value={email}
          onChange={changeEvent(setEmail)}
        />

        <Label htmlFor="password">Password</Label>
        <Input
          placeholder="Password"
          id="password"
          value={password}
          onChange={changeEvent(setPassword)}
          type="password"
        />

        <Label htmlFor="cpassword">Confirm password</Label>
        <Input
          placeholder="Confirm password"
          id="cpassword"
          value={cpassword}
          onChange={changeEvent(setCPassword)}
          type="password"
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
