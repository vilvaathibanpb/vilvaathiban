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

const NAV_ITEMS = [
  { href: "/about", label: "About" },
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
        {NAV_ITEMS.map((item) => (
          <Link key={item.href} href={item.href} passHref legacyBehavior>
            <NavLink active={router.pathname === item.href}>{item.label}</NavLink>
          </Link>
        ))}
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
