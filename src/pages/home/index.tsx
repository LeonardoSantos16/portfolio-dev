import { useQuery } from "@tanstack/react-query";
import About from "../../components/about-section";
import Contact from "../../components/contact";
import Headline from "../../components/headline";
import ProjectsSection from "../../components/project-section";
import { api } from "../../hooks/api";
import { Container } from "./styles";
import { PropsData } from "../../types/api-interface";

const Home = () => {
  const { data, isLoading } = useQuery<PropsData[]>({
    queryKey: ["projects-highlighted"],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      const response = await api.get("/repository/highlighted");
      return response.data;
    },
  });

  return (
    <Container>
      <Headline />
      <About />
      <ProjectsSection data={data || null} isLoading={isLoading} />
      <Contact />
    </Container>
  );
};

export default Home;
