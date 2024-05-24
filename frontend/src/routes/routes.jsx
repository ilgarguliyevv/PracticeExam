import Basket from "../pages/Basket";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import UserRoot from "../pages/User/UserRoot";
import Wishlsit from "../pages/Wishlist";

const routes = [
  {
    path: "/",
    element: <UserRoot />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/basket",
        element: <Basket />,
      },
      {
        path: "/wishlist",
        element: <Wishlsit />,
      },
      {
        path: "/detail/:id",
        element: <Detail />,
      },
    ],
  },
];

export default routes;
