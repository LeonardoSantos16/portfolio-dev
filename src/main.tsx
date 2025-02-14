import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme.ts'
import { StyleGlobal } from './styles/global.ts'
import { BrowserRouter } from 'react-router-dom'
import Home from './pages/home/index.tsx'
import Project from './pages/projects/index.tsx'
import Layout from './components/layout/index.tsx'
createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <StrictMode>
          <Project />
      </StrictMode>
      <StyleGlobal />
    </ThemeProvider>
  </BrowserRouter>

)
