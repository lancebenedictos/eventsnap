import Event from "@/models/Event";
import axios from "axios";
const base = "http://localhost:4000/api";

export const getEvents = async (): Promise<Event[]> => {
  const res = await axios.get(`${base}/events`, {
    withCredentials: true,
  });

  return res.data.events;
};

export const getEvent = async (id?: string): Promise<Event> => {
  const res = await axios.get(`${base}/events/${id}`);

  return res.data.event;
};

export const updateEvent = async (event: Event): Promise<Event> => {
  console.log(event);
  const res = await axios.patch(`${base}/events/${event._id}`, event, {
    withCredentials: true,
  });

  return res.data.event;
};

export const createEvent = async (): Promise<Event> => {
  const res = await axios.post(
    `${base}/events`,
    {},
    {
      withCredentials: true,
    }
  );

  console.log(res);
  return res.data.event;
};
