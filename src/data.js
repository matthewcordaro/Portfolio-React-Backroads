import img1 from "./images/tour-1.jpeg"
import img2 from "./images/tour-2.jpeg"
import img3 from "./images/tour-3.jpeg"
import img4 from "./images/tour-4.jpeg"


export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
]

export const socialLinks = [
  {
    id: 1,
    href: "https://www.linkedin.com/in/matthewcordaro/",
    icon: "fa-linkedin",
  },
  { id: 2, href: "https://www.x.com/matthewcordaro", icon: "fa-x-twitter" },
  { id: 3, href: "https://www.matthewcordaro.com", icon: "fa-aws" },
]

export const services = [
  {
    id: 1,
    icon: "fa-tree",
    title: "wonderful nature",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
  },
  {
    id: 2,
    icon: "fa-hiking",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
  },
  {
    id: 3,
    icon: "fa-socks",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
  },
]

export const tours = [
  {
    id: 1,
    name: "Tibet Adventure",
    image: img1,
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    date: "August 26th, 2025",
    location: "China",
    duration: 6,
    startingPrice: 2100,
  },
  {
    id: 2,
    name: "Best of Java",
    image: img2,
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    date: "September 19th, 2025",
    location: "Indonesia",
    duration: 14,
    startingPrice: 2900,
  },
  {
    id: 3,
    name: "Explore Hong Kong",
    image: img3,
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    date: "October 22nd, 2025",
    location: "Hong Kong",
    duration: 10,
    startingPrice: 3500,
  },
  {
    id: 4,
    name: "kenya highlights",
    image: img4,
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    date: "November 12th, 2025",
    location: "Kenya",
    duration: 21,
    startingPrice: 3900,
  },
]
