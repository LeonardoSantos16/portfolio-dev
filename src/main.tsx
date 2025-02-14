import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme.ts'
import { StyleGlobal } from './styles/global.ts'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/header'
import Headline from './components/headline'
import About from './components/about-section'
import ProjectsSection from './components/project-section'
import Contact from './components/contact/index.tsx'
import Footer from './components/footer/index.tsx'
createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <StrictMode>
        <Header />
        <Headline />
        <About/>
        <ProjectsSection />
        <Contact />
        <Footer />
      </StrictMode>
      <StyleGlobal />
    </ThemeProvider>
  </BrowserRouter>

)
