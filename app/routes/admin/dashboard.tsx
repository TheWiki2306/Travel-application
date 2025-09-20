import { Header } from "components";
export const Dashboard = () => {
  const user = { name: "Adrian" };

  return (
    <main className="dashboard wrapper">
      <Header
        title={`Welcome ${user?.name} ?? 'Guest`}
        description="Track activity, trends and popular places in real time"
      />
      Dashboard page content
    </main>
  );
};
export default Dashboard;
