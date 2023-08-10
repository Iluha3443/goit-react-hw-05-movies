import { NavLink, Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/" >Home Page</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
         <Route path="/movies" element={<div>Movies</div>} />
      </Routes>
    </div>
      
   
  );
};
