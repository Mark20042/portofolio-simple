import myImage from "../assets/images/mark.jpg";
import verified from "../assets/images/taena.png";

interface AkoRani {
  name: string;
  role: string;
  location: string;
  github: string;
  email: string;
  resume: string;
  picture?: string;
  verified?: string;
}

export const Me: AkoRani = {
  name: "Mark Joseph Potot",
  role: "Full Stack Developer",
  location: "Cebu, Philippines",
  github: "https://github.com/Mark20042",
  email: "mailto:mark.potot2004@gmail.com",
  resume: "https://github.com/Mark20042",
  picture: myImage,
  verified: verified,
};
