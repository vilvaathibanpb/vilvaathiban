import styled from "styled-components";
import Link from "next/link";

const Overlay = styled.div`
  background: #fafaf7;
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  animation: show-menu 0.2s ease-out;

  @keyframes show-menu {
    0% { transform: translateX(100%); }
    100% { transform: translateX(0); }
  }
`;

const Close = styled.div`
  position: absolute;
  top: 16px;
  right: 20px;
  font-size: 22px;
  cursor: pointer;
  color: #475569;
`;

const Item = styled.a`
  font-size: 20px;
  color: ${(p) => (p.active ? "#111827" : "#475569")};
  font-weight: ${(p) => (p.active ? 700 : 500)};
  padding: 12px 24px;
  cursor: pointer;
`;

const Pill = styled.a`
  margin-top: 16px;
  font-size: 14px;
  font-weight: 600;
  color: #fafaf7;
  background: #111827;
  padding: 10px 20px;
  border-radius: 999px;
  cursor: pointer;
`;

const NAV_ITEMS = [
  { href: "/about", label: "About" },
  { href: "/workshop", label: "Workshops" },
  { href: "/talks", label: "Talks" },
  { href: "/blogs", label: "Writing" },
  { href: "/videos", label: "Videos" },
  { href: "/projects", label: "Projects" },
  { href: "/reviews", label: "Reviews" },
];

const SideMenu = ({ showMenu, closeMenu, path }) => {
  if (!showMenu) return null;
  return (
    <Overlay>
      <Close onClick={() => closeMenu(false)}>✕</Close>
      {NAV_ITEMS.map((item) => (
        <Link key={item.href} href={item.href} passHref legacyBehavior>
          <Item active={path === item.href} onClick={() => closeMenu(false)}>
            {item.label}
          </Item>
        </Link>
      ))}
      <Link href="/" passHref legacyBehavior>
        <Pill onClick={() => closeMenu(false)}>Experience 3D</Pill>
      </Link>
    </Overlay>
  );
};

export default SideMenu;
