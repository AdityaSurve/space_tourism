import Moon from "../assets/destination/image-moon.png";
import Mars from "../assets/destination/image-mars.png";
import Europa from "../assets/destination/image-europa.png";
import Titan from "../assets/destination/image-titan.png";

const Destinations = [
  {
    id: 10,
    name: "MOON",
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    imgUrl: Moon,
    distance: "384,400 KM",
    travel: "3 DAYS",
  },
  {
    id: 11,
    name: "MARS",
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    imgUrl: Mars,
    distance: "225 MIL. KM",
    travel: "9 MONTHS",
  },
  {
    id: 12,
    name: "EUROPA",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    imgUrl: Europa,
    distance: "628 MIL. KM",
    travel: "3 YEARS",
  },
  {
    id: 13,
    name: "TITAN",
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    imgUrl: Titan,
    distance: "1.6 BIL. KM",
    travel: "7 YEARS",
  },
];

export default Destinations;
