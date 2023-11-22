import Navbar from "./components/navbar/Navbar";
import Leftbar from "./components/leftbar/Leftbar";
import Rightbar from "./components/rightbar/Rightbar";
import Login from "./pages/login/Login"
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./style.scss"
import { DarkModeContext } from "./context/darkModeContext";
import { useContext } from "react";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { AuthContext } from "./context/authContext";


function App() {

  const {currentUser} = useContext(AuthContext)
  const queryClient = new QueryClient();

  const { darkMode } = useContext(DarkModeContext);

  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <div className={`theme-${darkMode ? "dark" : "light"}`}>
          <Navbar />
          <div style={{ display: "flex" }}>
            <Leftbar />
            <div style={{ flex: 10 }}>
              <Outlet />
            </div>
            <Rightbar />
          </div>
        </div>
      </QueryClientProvider>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/profile/:id",
          element: <Profile />
        }
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;