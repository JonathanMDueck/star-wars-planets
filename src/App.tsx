import { RouterProvider } from "react-router-dom";
import "./Global.css";
import { router } from "./routes";
import { queryClient } from "./lib/tanstack-query";
import { QueryClientProvider } from "@tanstack/react-query";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
