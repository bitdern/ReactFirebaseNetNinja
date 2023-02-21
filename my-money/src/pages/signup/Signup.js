import { useState } from "react";

// styles
import styles from "./Signup.module.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, userName, password);
  };

  return (
    <form onSubmit={handleSubmit} className={styles["signup-form"]}>
      <h2>Sign Up!</h2>
      <label>
        <span>
          email:
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </span>
      </label>
      <label>
        <span>user name:</span>
        <input
          type="text"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
        />
      </label>
      <label>
        <span>password:</span>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      <button className="btn">Sign Up</button>
    </form>
  );
}
