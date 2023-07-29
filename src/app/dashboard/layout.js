import Sidebar from "./Sidebar";
export const metadata = {
  title: "Dashboard",
  description: "Next Hero",
};

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex container mx-auto">
      <Sidebar />
      {children}
    </div>
  );
};

export default DashboardLayout;
