// @ts-nocheck
import { Link } from "react-router";
import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import NavItems from "./navItems";

const MobileSideBar = () => {
  let sidebar: SidebarComponent;

  const toggleSidebar = () => {
    sidebar.toggle();
  };

  return (
    <div className="mobile-sidebar wrapper">
      <header>
        <Link to="/">
          <img
            src="/public/assets/icons/logo.svg"
            alt="logo"
            className="size-[30px]"
          />
          <h1>TourGuy</h1>
        </Link>

        <button onClick={toggleSidebar} aria-label="Menu">
          <img
            src="/public/assets/icons/menu.svg"
            alt="menu"
            className="size-7"
          />
        </button>
      </header>

      <SidebarComponent
        width={270}
        ref={(Sidebar) => (sidebar = Sidebar)}
        created={() => sidebar.hide()}
        closeOnDocumentClick={true}
        showBackdrop={true}
        type="over"
      >
        <NavItems handleClick={toggleSidebar} />
      </SidebarComponent>
    </div>
  );
};

export default MobileSideBar;
