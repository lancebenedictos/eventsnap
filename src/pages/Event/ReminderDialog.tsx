import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useEffect, useState } from "react";
import Reminder from "@/models/Reminder";

type props = {
  trigger: React.ReactElement;
  onSave: (reminder: Reminder) => void;
  _reminder?: Reminder;
};
function ReminderDialog({ trigger, onSave, _reminder }: props) {
  const [task, setTask] = useState("");
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState("");
  const [done, setDone] = useState(false);
  const [open, setOpen] = useState(false);
  const [calOpen, setCalOpen] = useState(false);

  useEffect(() => {
    if (_reminder) {
      setTask(_reminder.task);
      setDate(_reminder.date);
      setTime(_reminder.time);
      setDone(_reminder.done);
    }
  }, [_reminder]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add reminder</DialogTitle>
          <DialogDescription>Click save when you're done.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="task" className="text-right">
              Task
            </Label>
            <Input
              id="task"
              placeholder="Send invitations"
              autoComplete="off"
              value={task}
              onChange={({ target }) => {
                setTask(target.value);
              }}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="time" className="text-right">
              Time
            </Label>
            <Input
              id="time"
              type="time"
              className="col-span-3"
              value={time}
              onChange={({ target }) => {
                setTime(target.value);
              }}
            />
          </div>
        </div>

        <Popover open={calOpen} onOpenChange={setCalOpen}>
          <PopoverTrigger asChild>
            <Button variant={"outline"}>
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={(date) => {
                setCalOpen(false);
                setDate(date);
              }}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        <DialogFooter>
          <button
            onClick={() => {
              onSave({ task, time, date: date!, done, _id: _reminder?._id });
              setOpen(false);
            }}
          >
            Save changes
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ReminderDialog;
