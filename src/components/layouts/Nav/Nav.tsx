import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  Avatar,
  DropdownItem,
  DropdownMenu,
} from "@heroui/react";

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function Nav() {
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar disableAnimation isBordered className="bg-[#007ADE]">
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      {/*Logo On Mobile */}
      <NavbarContent className="sm:hidden pr-3 text-white" justify="center">
        <NavbarBrand as={Link} href="/hotel">
          <p className="ont-extrabold text-inherit">STAYKUY</p>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop */}
      <NavbarBrand className="hidden sm:flex gap-4" as={Link} href="/hotel">
        <p className="text-white font-extrabold text-inherit text-xl">
          STAYKUY
        </p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#" className="text-white text-sm">
            My Booking
          </Link>
        </NavbarItem>

        <NavbarItem isActive>
          <Link
            aria-current="page"
            color="warning"
            href="#"
            className="text-white text-sm"
          >
            Whishlist
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link color="foreground" href="#" className="text-white text-sm">
            Blog
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link color="foreground" href="#" className="text-white text-sm">
            Help
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Menu Avatar */}
      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="md"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="profile">My Profile</DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>

      {/* Menu on Mobile */}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
