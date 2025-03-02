import About from "../../components/about-section";
import Contact from "../../components/contact";
import Headline from "../../components/headline";
import ProjectsSection from "../../components/project-section";

const Home = () => {
    return(
        <>
            <Headline />
            <About/>
            <ProjectsSection />
            <Contact />
        </>
    )
}

export default Home;