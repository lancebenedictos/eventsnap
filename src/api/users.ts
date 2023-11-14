import Attendee from "@/models/Attendee";
import axios from "axios";
const base = "http://localhost:4000/api";

type props = {
  user: Attendee;
  eventId?: string;
};

export const registerAttendee = async ({ user, eventId }: props) => {
  return axios.post(`${base}/events/${eventId}/users`, {
    user,
  });
};

export const removeAttendee = async (eventId?: string, userId?: string) => {
  return axios.delete(`${base}/events/${eventId}/users/${userId}`);
};
