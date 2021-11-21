import { EventInput } from '@fullcalendar/react';

let eventGuid = 0;
let dateString = (n: number) => new Date(`11/${n}/2021`).toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today

const absentDays = [7, 14, 19, 21, 25, 28];

const formRanges = (end: number) => Array.from({ length: end }, (_, i) => i + 1);

type eventType = {
  title: string;
  display?: string;
  color?: string;
  id?: string;
  start?: string;
  end?: string;
};

const formEvents = () => {
  const events: eventType[] = [];
  formRanges(30).forEach(day => {
    if (absentDays.includes(day)) {
      events.push({
        title: 'Absent',
        start: dateString(day + 1),
        end: dateString(day + 1),
        display: 'background',
        color: 'red'
      });
    } else {
      events.push({
        id: createEventId(),
        title: 'Entry Time',
        start: dateString(day + 1) + 'T10:00:00',
      });
      events.push({
        id: createEventId(),
        title: 'Exit Time',
        start: dateString(day + 1) + 'T16:00:00'
      });
    }

  });
  console.log(events);

  return events;
};

export const INITIAL_EVENTS: EventInput[] = formEvents();
export function createEventId() {
  return String(eventGuid++);
}
