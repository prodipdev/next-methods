import Navbar from "@/components/Navbar";

const WithLayout = ({ children }) => {
  return (
    <div className="mx-5">
      <Navbar />
      {children}
      <footer>Footer</footer>
    </div>
  );
};

export default WithLayout;
