import MainLayout from "./components/layout/MainLayout";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import TechStack from "./components/sections/TechStack";

export default function App() {
  return (
    <MainLayout>
      <Navbar />
      <Hero />
      <TechStack />
      <Projects />
    </MainLayout>
  )
}