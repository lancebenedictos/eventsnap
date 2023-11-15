import Attendee from "@/models/Attendee";
import axios from "axios";
const base =
  process.env.NODE_ENV === "production"
    ? "https://event-snap-18da04b7e300.herokuapp.com/api"
    : "http://localhost:4000/api";

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

export const uploadThumbnail = async (formData: FormData, eventId: string) => {
  return axios.post(`${base}/users/${eventId}/thumbnail`, formData);
};

export const uploadImages = async (formData: FormData, eventId: string) => {
  return axios.post(`${base}/resources/${eventId}`, formData);
};

export const getImages = async (eventId: string, userId: string) => {
  console.log(`${base}/users/${eventId}/images/${userId}`);
  return axios.get(`${base}/users/${eventId}/images/${userId}`);
};
