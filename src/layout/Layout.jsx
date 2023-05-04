import styles from "./index.module.scss";
import Header from "../components/header";
import Footer from "@/src/components/footer";

const Layout = ({ children }) => {
  return (
    <div className={styles.Layout}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
