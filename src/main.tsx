import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme.ts'
import { StyleGlobal } from './styles/global.ts'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import { AppRoutes } from './routes'
import ScrollToTop from './components/ScrollTop.tsx'
// Atualizar as rotas
createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <StrictMode>
        <Header />
        <ScrollToTop />
        <AppRoutes />

        <Footer />
      </StrictMode>
      <StyleGlobal />
    </ThemeProvider>
  </BrowserRouter>
)
