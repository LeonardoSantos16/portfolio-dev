import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme.ts'
import HeaderMobile from './components/header/header-mobile/index.tsx'
import { StyleGlobal } from './styles/global.ts'
createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <StrictMode>
      <HeaderMobile />
    </StrictMode>
    <StyleGlobal />
  </ThemeProvider>
)
