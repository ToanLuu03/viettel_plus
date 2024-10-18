import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { router } from "./routers/routers";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <div>
      <RouterProvider router={router} fallbackElement={< ></>} />
    </div>
  );
}

export default App;
