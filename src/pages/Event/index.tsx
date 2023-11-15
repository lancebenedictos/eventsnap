import { getEvent } from "@/api/events";
import { uploadImages, uploadThumbnail } from "@/api/users";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { useParams } from "react-router-dom";
import Gallery from "./Gallery";

function Event() {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const { data } = useQuery({
    queryKey: [id],
    queryFn: () => getEvent(id),
  });

  const mutation = useMutation({
    mutationFn: (formData: FormData) => uploadThumbnail(formData, id!),
    onSuccess: (_data) => {
      console.log(_data);
      queryClient.setQueryData([id], _data);
    },
  });

  const handleSelect = async (e: React.FormEvent<HTMLInputElement>) => {
    const files = (e.target as HTMLInputElement).files;

    if (files) {
      const formData = new FormData();

      for (const file of files) {
        formData.append("files", file);
      }

      // const response = await uploadThumbnail(formData, id!);
      await uploadImages(formData, id!);
    }
  };

  const handleThumbnail = async (e: React.FormEvent<HTMLInputElement>) => {
    const files = (e.target as HTMLInputElement).files;
    if (files) {
      const formData = new FormData();

      for (const file of files) {
        formData.append("files", file);
      }

      // const response = await uploadThumbnail(formData, id!);
      mutation.mutate(formData);
    }
  };
  return (
    <main className="bg-white min-h-screen">
      <h1>{data?.title}</h1>
      <div className="flex flex-col gap-3">
        <div className="flex gap-2 items-center">
          <h2 className=" font-bold text-2xl">Photos </h2>
          <Label
            htmlFor="photos"
            className="bg-cta p-2 font-bold rounded-sm text-white m-0"
          >
            Upload photos
          </Label>
        </div>

        <Input
          type="file"
          id="photos"
          multiple
          onChange={handleSelect}
          className=" hidden"
        />
        <p>
          Don't see yourself? <br />
          <Label htmlFor="thumbnail" className="font-bold rounded-sm m-0">
            Upload a photo for your thumbnail +
            <Input
              type="file"
              id="thumbnail"
              onChange={handleThumbnail}
              className=" hidden"
            />
          </Label>
        </p>
        {data?.users ? <Gallery users={data.users} /> : null}
      </div>
    </main>
  );
}

export default Event;
