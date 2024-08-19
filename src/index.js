import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GlobalStyled } from "./GlobalStyled";

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <GlobalStyled />
      <Router />
    </React.StrictMode>
  </QueryClientProvider>
);
