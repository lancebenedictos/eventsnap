import ReminderDialog from "./ReminderDialog";
import Reminder from "@/models/Reminder";
import { useState } from "react";

function Reminders() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  return (
    <div className="bg-white p-2 rounded-md">
      <h2 className="font-bold text-2xl">
        Reminders
        <ReminderDialog
          trigger={<button>+</button>}
          onSave={(reminder: Reminder) => {
            setReminders([...reminders, reminder]);
          }}
        />
      </h2>
      <hr />
      <div className="flex flex-col gap-2">
        {reminders.map((reminder) => {
          return (
            <span
              key={reminder.task}
              className="flex justify-between border-b-2"
            >
              <ReminderDialog
                trigger={
                  <span>
                    <p className=" font-bold ">{reminder.task}</p>
                    <p>
                      {reminder.date.toDateString()} -
                      {convertTo12HourFormat(reminder.time)}
                    </p>
                  </span>
                }
                onSave={(r: Reminder) => {
                  const mapped = reminders.map((el) => {
                    if ((el._id = reminder._id)) {
                      return r;
                    }
                    return el;
                  });

                  setReminders(mapped);
                }}
                _reminder={reminder}
              />

              <input
                type="checkbox"
                className=" w-4"
                checked={reminder.done}
                onChange={({ target }) => {
                  const mapped = reminders.map((el) => {
                    if ((el._id = reminder._id)) {
                      el.done = target.checked;
                    }
                    return el;
                  });
                  setReminders(mapped);
                }}
              />
            </span>
          );
        })}
      </div>
    </div>
  );
}

function convertTo12HourFormat(time24: string) {
  const [hours, minutes] = time24.split(":");
  let suffix = "AM";
  let hours12 = parseInt(hours, 10);

  if (hours12 >= 12) {
    suffix = "PM";
    if (hours12 > 12) {
      hours12 -= 12;
    }
  }

  if (hours12 === 0) {
    hours12 = 12;
  }

  const time12 = `${String(hours12).padStart(2, "0")}:${minutes} ${suffix}`;
  return time12;
}

export default Reminders;
