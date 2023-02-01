import { useLocation } from "react-router-dom";

export default function Contact() {
  const queryString = useLocation().search;
  console.log(queryString);

  const queryParams = new URLSearchParams(queryString);
  const name = queryParams.get("name");

  return (
    <div>
      <h2>Hey {name}, Contact us here...</h2>
      <p>This is some text that will render on the webpage</p>
    </div>
  );
}
