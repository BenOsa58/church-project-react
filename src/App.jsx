import Home from "./pages/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  Router,
  RouterProvider,
} from "react-router-dom";
import ServiceDays from "./pages/ServiceDays";
import MyNavbar from "./components/MyNavbar";

import Register from "./pages/Register";
import { AuthContextProvider } from "./context/Authcontext";
import Login from "./pages/Login";
import ReviewsPage from "./pages/ReviewsPage";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  //console.log("app", app);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="services" element={<ServiceDays />} />

        <Route
          path="register"
          element={
            <ProtectedRoute>
              <Register />
            </ProtectedRoute>
          }
        />
        <Route
          path="login"
          element={
            <ProtectedRoute>
              <Login />
            </ProtectedRoute>
          }
        />

        <Route path="reviews" element={<ReviewsPage />} />
      </Route>
    )
  );

  return (
    <div>
      <h1 className="header">Christ Church of God Project</h1>
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
    </div>
  );
}

const Root = () => {
  return (
    <>
      <MyNavbar />
      <Outlet />
    </>
  );
};
export default App;
