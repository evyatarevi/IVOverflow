import { RouterProvider } from "react-router-dom";
import routes from "./router/routes";
import { LoginForm } from "./components/index.ts";

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
