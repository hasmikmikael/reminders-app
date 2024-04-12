import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ReminderList from "./components/ReminderList";
import Reminder from "./models/reminder";
import reminderService from "./services/reminder";

// This component is only responsible for rendering UI.
function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  const loadReminders = async () => {
    const reminders = await reminderService.getReminders();
    setReminders(reminders);
  };

  useEffect(() => {
    loadReminders();
  }, []);

  return (
    <div className="App">
      <ReminderList items={reminders} />
    </div>
  );
}

export default App;
