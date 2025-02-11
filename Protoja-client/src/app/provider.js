// import Navbar from "@/components/shared/Navbar";
import CustomNavbar from "@/components/shared/CustomNavbar";
import Footer from "@/components/shared/Footer";

export function Provider({ children }) {
  return (
    <>
      {/* <Navbar /> */}
      <CustomNavbar />
      {children}
      <Footer />
    </>
  );
}
