import { getEvent, updateEvent } from "@/api/events";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

function EventForm() {
  const queryClient = useQueryClient();
  const form = useForm();
  const { id } = useParams();
  const navigate = useNavigate();
  const { data } = useQuery({
    queryKey: [id],
    queryFn: () => getEvent(id),
  });

  const mutation = useMutation({
    mutationFn: updateEvent,
    onSuccess: (_data) => {
      console.log(_data);
      queryClient.setQueryData([id], _data);
      navigate(`/event/${id}`);
    },
  });

  const submit = (values: FieldValues) => {
    mutation.mutate({ ...values, _id: id! });
  };
  return (
    <main>
      <Form {...form}>
        <form
          action=""
          className="flex flex-col"
          onSubmit={form.handleSubmit(submit)}
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter event name"
                    {...field}
                    defaultValue={data?.title || ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter event description"
                    {...field}
                    defaultValue={data?.description || ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter event location"
                    {...field}
                    defaultValue={data?.location || ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} defaultValue={data?.date} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="time"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Time</FormLabel>
                <FormControl>
                  <Input type="time" {...field} defaultValue={data?.time} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <button className=" bg-cta text-white px-4 py-2 rounded-sm self-center mt-4">
            Submit
          </button>
        </form>
      </Form>
    </main>
  );
}

export default EventForm;
