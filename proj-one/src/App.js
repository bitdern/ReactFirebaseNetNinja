import "./App.css";
import { useState } from "react";
import Title from "./components/Title";
import Modal from "./components/Modal";
import Eventlist from "./components/Eventlist";

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
      {showEvents && <Eventlist events={events} handleClick={handleClick} />}

      {showModal && (
        <Modal handleClose={handleClose} isSalesModal={true}>
          <h2>WAT u mean?!?</h2>
          <p>enter code "blintz" to recieve de la RIEN!</p>
        </Modal>
      )}

      <button onClick={() => setShowModal(true)}>where dat modal at doe</button>
    </div>
  );
}

export default App;
