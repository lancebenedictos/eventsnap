import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const changeEvent = (setFunction: (value: string) => void) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setFunction(e.target.value);
    };
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <main className="bg-white full flex flex-col items-center">
      <h2 className="text-3xl pt-4 ">Login</h2>
      <p className="pt-2">Welcome back</p>

      <form action="" className="flex flex-col w-full py-4" onSubmit={onSubmit}>
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

        <p className="mt-2">
          Don't have an account? <Link to="/signup">Sign up.</Link>
        </p>

        <button className="bg-cta text-white py-2 w-44 self-center mt-4 rounded-sm">
          Submit
        </button>
      </form>
    </main>
  );
}

export default Login;
