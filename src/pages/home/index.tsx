import About from "../../components/about-section";
import Contact from "../../components/contact";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Headline from "../../components/headline";
import ProjectsSection from "../../components/project-section";

const Home = () => {
    return(
        <>
            <Header />
            <Headline />
            <About/>
            <ProjectsSection />
            <Contact />
            <Footer />
        </>
    )
}

export default Home;