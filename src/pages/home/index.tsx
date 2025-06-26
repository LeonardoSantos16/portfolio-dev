import { useEffect, useState } from "react";
import About from "../../components/about-section";
import Contact from "../../components/contact";
import Headline from "../../components/headline";
import ProjectsSection from "../../components/project-section";
import { api } from "../../hooks/api";
import { Container } from "./styles";
export interface PropsData {
  id: number;
  title: string;
  date: string;
  description: string;
  link_demo: string;
  link_github: string;
}

const Home = () => {
  const [data, setData] = useState<PropsData[] | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/repository");
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  console.log(data);
  return (
    <Container>
      <Headline />
      <About />
      <ProjectsSection data={data} />
      <Contact />
    </Container>
  );
};

export default Home;
