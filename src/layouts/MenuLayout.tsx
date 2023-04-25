import NavbarLayout from "./NavbarLayout";
import SideBarLayout from "./SideBarLayout";

interface LayoutProps {
  children: React.ReactNode;
}
const MenuLayout = ({ children }: LayoutProps) => {
  return (
    <div>
      <NavbarLayout />
      <SideBarLayout />
      <main>{children}</main>
    </div>
  );
};

export default MenuLayout;
