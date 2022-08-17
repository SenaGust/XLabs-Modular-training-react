import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Exercise1 from "../pages/exercise1/Exercise1";
import Exercise2 from "../pages/exercise2/Exercise2";
import Exercise4 from "../pages/exercise4/Exercise4";
import Exercise5 from "../pages/exercise5/Exercise5";

export default function AllRoutes() {
  return (
    <BrowserRouter>
      <div>
        <ul style={{ display: "flex", justifyContent: "space-evenly" }}>
          <li>
            <Link to="/exercises/1">Exercício 1</Link>
          </li>
          <li>
            <Link to="/exercises/2">Exercício 2</Link>
          </li>
          <li>
            <Link to="/exercises/4">Exercício 4</Link>
          </li>
          <li>
            <Link to="/exercises/5">Exercício 5</Link>
          </li>
        </ul>

        <hr />
      </div>
      <Routes>
        <Route path="/">
          <Route path="/exercises">
            <Route path="1" element={<Exercise1 />} />
            <Route path="2" element={<Exercise2 />} />
            <Route path="4" element={<Exercise4 />} />
            <Route path="5" element={<Exercise5 />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
