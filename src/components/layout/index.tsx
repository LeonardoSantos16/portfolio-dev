import Header from "../header";
import Footer from "../footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>;
};

export default Layout;
