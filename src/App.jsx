import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Home from "./componenets/pages/Home";
import About from "./componenets/pages/About";
import Login from "./componenets/pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Home></Home>
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <About></About>
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Login></Login>
      </>
    ),
  },
]);

function App() {
  return (
    <div>
      <main className="overflow-x-hidden">
        <RouterProvider router={router} />
      </main>
    </div>
  );
}

export default App;
