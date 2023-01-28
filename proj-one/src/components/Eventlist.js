import React from "react";

export default function Eventlist({ events, handleClick }) {
  return (
    <div>
      {events.map((event, index) => (
        <React.Fragment key={event.id}>
          <h2>
            {index} - {event.title}
          </h2>
          <button onClick={() => handleClick(event.id)}>
            delete event widdit
          </button>
        </React.Fragment>
      ))}
    </div>
  );
}
