import "./App.css";
import React, { useState } from "react";
import Title from "./components/Title";
import Modal from "./components/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([
    { title: "mario's birthday bash", id: 1 },
    { title: "bowser live stream", id: 2 },
    { title: "race on moo moo farm", id: 3 },
  ]);

  console.log(showEvents);

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      });
    });
    console.log(showModal);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const subtitle = "the latest and greatest events widdit";

  return (
    <div className="App">
      <Title title="events in your hood" subtitle={subtitle} />

      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>hide events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>show events</button>
        </div>
      )}
      {showEvents &&
        events.map((event, index) => (
          <React.Fragment key={event.id}>
            <h2>
              {index} - {event.title}
            </h2>
            <button onClick={() => handleClick(event.id)}>
              delete event widdit
            </button>
          </React.Fragment>
        ))}

      {showModal && (
        <Modal handleClose={handleClose}>
          <h2>WAT u mean?!?</h2>
          <p>enter code "blintz" to recieve de la RIEN!</p>
        </Modal>
      )}

      <button onClick={() => setShowModal(true)}>where dat modal at doe</button>
    </div>
  );
}

export default App;
