import axios from "axios";
const base =
  process.env.NODE_ENV === "production"
    ? "https://event-snap-18da04b7e300.herokuapp.com/api"
    : "http://localhost:4000/api";

type Organizer = {
  first_name: string;
  last_name: string;
  email: string;
  password?: string;
};
export const checkUser = async (): Promise<Organizer> => {
  const res = await axios.get(`${base}/auth/check`, { withCredentials: true });

  return res.data.organizer;
};

export const signUp = async (user: Organizer): Promise<Organizer> => {
  const res = await axios.post(
    `${base}/auth/signup`,
    { ...user },
    { withCredentials: true }
  );
  return res.data.organizer;
};

export const logout = async (): Promise<Organizer> => {
  const res = await axios.get(`${base}/auth/logout`, { withCredentials: true });
  return res.data.organizer;
};

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<Organizer> => {
  const res = await axios.post(
    `${base}/auth/login`,
    { email, password },
    { withCredentials: true }
  );
  return res.data.organizer;
};
