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

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="services" element={<ServiceDays />} />
      </Route>
    )
  );

  return (
    <div>
      <h1>Christ Church of God Project</h1>
      <RouterProvider router={router} />
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
