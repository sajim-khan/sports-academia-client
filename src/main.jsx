import React from "react";
import { createRoot } from "react-dom/client"; // Update import statement
import "./index.css";
import AuthProvider from "./Provider/AuthProvider.jsx";
import { BrowserRouter as Router, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { router } from "./Router/PrivetRouter/Router";
import { ThemeProvider } from "./Common/ThemeContext/ThemeContext";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  // Use createRoot instead of ReactDOM.render
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider>
            <div className="">
              <RouterProvider router={router} />
            </div>
          </ThemeProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
