import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage.tsx";
import SignUpPage from "./pages/SignUpPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";
import EditPollPage from "./pages/EditPollPage.tsx";
import ErrorPage from "./pages/ErrorPagePage.tsx";
import PollResponsePage from "./pages/PollResponsePage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login/",
    element: <LoginPage />,
  },
  {
    path: "/signup/",
    element: <SignUpPage />,
  },
  {
    path: "/profile/",
    element: <ProfilePage />,
  },
  {
    path: "/polls/:pollId/edit/",
    element: <EditPollPage />,
  },
  {
    path: "/polls/:pollId/respond/",
    element: <PollResponsePage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
