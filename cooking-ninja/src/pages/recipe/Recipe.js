import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/usefetch";

// styles
import "./Recipe.css";

export default function Recipe() {
  const { id } = useParams();
  const url = "http://localhost:3000/recipes/" + id;
  const { data: recipe, isPending, error } = useFetch(url);
  const history = useNavigate();

  useEffect(() => {
    if (error) {
      //redirect
      setTimeout(() => {
        history.push("/");
      }, 2000);
    }
  }, [error, history]);

  return (
    <div className="recipe">
      {isPending && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}
      {recipe && <h1>{recipe.title}</h1>}
    </div>
  );
}
