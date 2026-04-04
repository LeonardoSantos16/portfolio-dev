import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme.ts";
import { StyleGlobal } from "./styles/global.ts";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import { AppRoutes } from "./routes";
import ScrollToTop from "./components/ScrollTop.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <StrictMode>
          <Header />
          <ScrollToTop />
          <AppRoutes />

          <Footer />
          <Toaster
            richColors
            closeButton
            position="bottom-right"
            theme="dark"
          />
        </StrictMode>
      </QueryClientProvider>
      <StyleGlobal />
    </ThemeProvider>
  </BrowserRouter>,
);
