import Footer from "./Footer/Footer";
import Header from "./Header";

const AppLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default AppLayout;
