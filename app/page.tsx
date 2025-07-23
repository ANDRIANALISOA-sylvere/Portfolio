import { Header } from "../components/v2/Header";
import { Services } from "../components/v2/Services";
import { TechSkills } from "../components/v2/TechSkills";
import { Projects } from "../components/v2/Projects";
import { Xp } from "../components/v2/Xp";
import { Contact } from "../components/v2/Contact";
import { Footer } from "../components/v2/Footer";
import { CTA } from '../components/v2/CTA';
export default function Home() {
  return (
    <div className="min-h-screen">
      <Header></Header>
      <Services></Services>
      <TechSkills></TechSkills>
      <Projects></Projects>
      <Xp></Xp>
      <CTA></CTA>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}
