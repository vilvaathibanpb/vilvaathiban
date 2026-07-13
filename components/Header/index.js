import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import SideMenu from "../SideMenu";

const Bar = styled.div`
  .flex;
  .justify-between;
  .items-center;
  .px-6;
  .lg: px-12;
  .py-6;
  border-bottom: 1px solid #ececea;
  background: #fafaf7;
`;

const Brand = styled.div`
  .flex;
  .items-center;
  .cursor-pointer;
`;

const Mark = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #111827;
  color: #fafaf7;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 800;
  font-size: 15px;
  margin-right: 14px;
  letter-spacing: 0.5px;
`;

const Name = styled.div`
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #111827;
  letter-spacing: -0.01em;
  line-height: 1.2;
`;

const Role = styled.div`
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 12px;
  color: #475569;
  letter-spacing: 0.02em;
`;

const Nav = styled.nav`
  .hidden;
  .lg: flex;
  .items-center;
  gap: 28px;
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
`;

const NavLink = styled.a`
  font-size: 14px;
  color: ${(p) => (p.active ? "#111827" : "#475569")};
  font-weight: ${(p) => (p.active ? 700 : 500)};
  cursor: pointer;
  border-bottom: ${(p) => (p.active ? "2px solid #111827" : "2px solid transparent")};
  padding-bottom: 2px;
  transition: color 120ms ease, border-color 120ms ease;
  &:hover {
    color: #111827;
  }
`;

const Experience = styled.a`
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 13px;
  font-weight: 600;
  color: #fafaf7;
  background: #111827;
  padding: 8px 14px;
  border-radius: 999px;
  margin-left: 10px;
  cursor: pointer;
  transition: background 160ms ease;
  &:hover {
    background: #475569;
  }
`;

const Burger = styled.div`
  .lg: hidden;
  cursor: pointer;
  color: #111827;
`;

const Dropdown = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  &:hover > div {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) translateY(0);
  }
`;

const Menu = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(6px);
  margin-top: 12px;
  width: max-content;
  max-width: 320px;
  background: #ffffff;
  border: 1px solid #ececea;
  border-radius: 12px;
  box-shadow: 0 12px 32px rgba(17, 24, 39, 0.12);
  padding: 8px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 140ms ease, transform 140ms ease, visibility 140ms ease;
  z-index: 20;

  &::before {
    content: "";
    position: absolute;
    top: -12px;
    left: 0;
    right: 0;
    height: 12px;
  }
`;

const MenuLink = styled.a`
  display: block;
  padding: 10px 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 120ms ease;
  &:hover { background: #f5f5f1; }

  .t { font-size: 14px; font-weight: 600; color: #111827; }
  .d { font-size: 12.5px; color: #475569; margin-top: 2px; line-height: 1.4; }
`;

const SERVICES = [
  {
    href: "/services/mcp-architecture",
    label: "MCP architecture in 1 month",
    desc: "In-house MCPs, plugins & skills so every team uses AI.",
  },
  {
    href: "/services/ai-engineering-efficiency",
    label: "AI engineering efficiency",
    desc: "Streamline delivery and ship faster with AI.",
  },
  {
    href: "/services/eu-ai-act",
    label: "EU AI Act compliance",
    desc: "Engineer the controls before the Aug 2026 deadline.",
  },
];

const NAV_ITEMS = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services", children: SERVICES },
  { href: "/workshop", label: "Workshops" },
  { href: "/talks", label: "Talks" },
  { href: "/blogs", label: "Writing" },
  { href: "/videos", label: "Videos" },
  { href: "/projects", label: "Projects" },
  { href: "/reviews", label: "Reviews" },
];

const Header = () => {
  const router = useRouter();
  const [showMenu, toggleMenu] = useState(false);
  return (
    <Bar>
      <Link href="/about">
        <Brand>
          <Mark>VA</Mark>
          <div>
            <Name>Vilva Athiban P B</Name>
            <Role>Lead AI Engineer · Speaker · Educator</Role>
          </div>
        </Brand>
      </Link>
      <Nav>
        {NAV_ITEMS.map((item) =>
          item.children ? (
            <Dropdown key={item.href}>
              <Link href={item.href} passHref legacyBehavior>
                <NavLink active={router.pathname.startsWith(item.href)}>
                  {item.label}
                </NavLink>
              </Link>
              <Menu>
                {item.children.map((child) => (
                  <Link key={child.href} href={child.href} passHref legacyBehavior>
                    <MenuLink>
                      <div className="t">{child.label}</div>
                      <div className="d">{child.desc}</div>
                    </MenuLink>
                  </Link>
                ))}
              </Menu>
            </Dropdown>
          ) : (
            <Link key={item.href} href={item.href} passHref legacyBehavior>
              <NavLink active={router.pathname === item.href}>{item.label}</NavLink>
            </Link>
          )
        )}
        <Experience href="/">Experience 3D</Experience>
      </Nav>
      <Burger onClick={() => toggleMenu(true)}>
        <svg viewBox="0 0 100 80" width="28" height="28" fill="currentColor">
          <rect width="100" height="10" rx="6"></rect>
          <rect y="30" width="100" height="10" rx="6"></rect>
          <rect y="60" width="100" height="10" rx="6"></rect>
        </svg>
      </Burger>
      <SideMenu path={router.pathname} closeMenu={toggleMenu} showMenu={showMenu} />
    </Bar>
  );
};

export default Header;
