import swe from "../assets/certificates/swe.png";
import frontend from "../assets/certificates/frontend.png";
import restapi from "../assets/certificates/restapi.png";
import jsessen from "../assets/certificates/jseessen.png";
import cert from "../assets/certificates/cert.jpg";
import dl1 from "../assets/certificates/dl1.jpg";
import dl2 from "../assets/certificates/dl2.jpg";
import dl3 from "../assets/certificates/dl3.jpg";
interface Certif {
  title: string;
  issuer: string;
  date: string;
  image?: string;
}

export const certificates: Certif[] = [
  {
    title: "Software Engineer ",
    issuer: "HackerRank",
    date: "2025",
    image: swe,
  },
  {
    title: "Frontend Developer (React)",
    issuer: "HackerRank",
    date: "2025",
    image: frontend,
  },
  {
    title: "REST API",
    issuer: "HackerRank",
    date: "2025",

    image: restapi,
  },
  {
    title: "JavaScript Essentials",
    issuer: "Cisco Networking Academy",
    date: "2025",
    image: jsessen,
  },
  {
    title: "Deans List  (2024-2025)",
    issuer: "Cebu Roosevelt Memorial Colleges",
    date: "2025",
    image: dl3,
  },
  {
    title: "Creative Visionary Award",
    issuer: "Cebu Roosevelt Memorial Colleges",
    date: "2025",
    image: cert,
  },
  {
    title: "Deans List  (2024-2025)",
    issuer: "Cebu Roosevelt Memorial Colleges",
    date: "2024",
    image: dl1,
  },
  {
    title: "Deans List  (2024-2025)",
    issuer: "Cebu Roosevelt Memorial Colleges",
    date: "2024",
    image: dl2,
  },
];
