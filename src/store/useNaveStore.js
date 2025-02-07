import { create } from "zustand";

const useNavStore = create((set) => ({
  Nav: [
    {
      id: 1,
      name: "Home",
      link: "/",
      active: true,
    },
    {
      id: 2,
      name: "Service",
      link: "/service",
      active: false,
    },
    {
      id: 3,
      name: "FAQ",
      link: "/faq",
      active: false,
    },
    {
      id: 4,
      name: " About",
      link: "/about",
      active: false,
    },
  ],
  activeCategory: (id) =>
    set((state) => ({
      Nav: state.Nav.map((el) =>
        el.id === id ? { ...el, active: true } : { ...el, active: false }
      ),
    })),
}));

export default useNavStore;
