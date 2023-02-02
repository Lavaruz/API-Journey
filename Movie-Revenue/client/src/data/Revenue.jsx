import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function Revenue() {
  const [movies, setMovies] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/movies?limit=20")
      .then((res) => setMovies(res.data.data));
  }, []);

  return movies;
}

export default Revenue;
