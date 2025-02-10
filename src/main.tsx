import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme.ts'
import { StyleGlobal } from './styles/global.ts'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/header/index.tsx'
createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <StrictMode>
        <Header />
      </StrictMode>
      <StyleGlobal />
    </ThemeProvider>
  </BrowserRouter>

)
