import { createBrowserRouter } from "react-router";
import ServicePage from "./src/pages/ServicePage";
import FAQ from "./src/pages/FAQ";
import TestimonialPage from "./src/pages/TestimonialPage";
import WhyUsPage from "./src/pages/WhyUsPage";
import AboutPage from "./src/pages/AboutPage";
import Mainlayout from "./src/components/Mainlayout";
import HomePage from "./src/pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/service",
        element: <ServicePage />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/testimonial",
        element: <TestimonialPage />,
      },
      {
        path: "/why-us",
        element: <WhyUsPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },
]);

export default router;
