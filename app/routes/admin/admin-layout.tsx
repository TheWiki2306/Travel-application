import { Outlet } from "react-router";

function AdminLayout() {
  return (
    <div className="admin-layout">
      Admin Layout
      <aside className="children">
        <Outlet />
      </aside>
    </div>
  );
}

export default AdminLayout;
