import { RouterProvider } from "react-router-dom";
import "./Global.css";
import { router } from "./routes";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
