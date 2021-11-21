import React from 'react';
import FullCalendar, { EventApi, DateSelectArg, EventClickArg, EventContentArg, formatDate } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { INITIAL_EVENTS, createEventId } from './event-utils';

interface DemoAppState {
  weekendsVisible: boolean;
  currentEvents: EventApi[];
}

export default class DemoApp extends React.Component<{}, DemoAppState> {

  state: DemoAppState = {
    weekendsVisible: true,
    currentEvents: []
  };

  render() {
    return (
      <div>
        <div style={{ textAlign: 'center', width: '100%', fontFamily: 'monospace' }} >
          <h1>
            Eswara Nadh Timesheet
          </h1>
        </div>
        <div className='demo-app'>
          <div className='demo-app-main'>
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
              }}
              initialView='dayGridMonth'
              editable={true}
              selectable={true}
              dayMaxEvents={true}
              weekends={this.state.weekendsVisible}
              initialEvents={INITIAL_EVENTS}
            />
          </div>
        </div>
      </div>

    );
  }



  handleEvents = (events: EventApi[]) => {
    this.setState({
      currentEvents: events
    });
  };

}

function renderEventContent(eventContent: EventContentArg) {
  return (
    <>
      <b>{eventContent.timeText}</b>
      <i>{eventContent.event.title}</i>
    </>
  );
}

