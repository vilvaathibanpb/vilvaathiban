import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import SideMenu from "../SideMenu";

const Container = styled.div`
  .flex;
  .justify-between;
  .px-4;
  .lg: px-12;
  .py-4;
  .items-center;
`;
const LogoContainer = styled.div`
  .cursor-pointer;
  .flex;
  .items-center;
  .lg:mr-8;
  font-weight: bold;
  font-size: 18px;
  .text-pwhite;
`;
const Logo = styled.img`
  height: 100px;
`;

const MenuContainer = styled.div`
  .hidden;
  .lg: flex;
  .justify-between;
  .w-7/12;
  .text-pwhite;
  font-size: 18px;
`;

const MobileMenu = styled.div`
  .lg: hidden;
  .text-4xl;
  .cursor-pointer;
`;

const Menu = styled.div`
  .cursor-pointer;
  .text-sdark;
  font-weight: bold;
  font-size: 18px;
  .hover: bg-sdark;
  .hover: text-pwhite;
  border-radius: 10px;
  ${props => props.active && `.text-pwhite; .bg-sdark;`}
  .p-4;
  .flex;
  .items-center;
`;

const Header = () => {
  const router = useRouter();
  const [showMenu, toggleMenu] = useState(false);
  return (
    <Container>
      <LogoContainer>
        <Link href="/">
          <Logo src="/logo.png" alt="Vilva Athiban P B, The JS Jockey" />
        </Link>
        <div>Vilva Athiban P B</div>
      </LogoContainer>
      <MenuContainer>
        <Link href="/about">
          <Menu active={router.pathname === "/about"}>About</Menu>
        </Link>
        <Link href="/workshop">
          <Menu active={router.pathname === "/workshop"}>Workshops</Menu>
        </Link>
        <Link href="/talks">
          <Menu active={router.pathname === "/talks"}>Talks</Menu>
        </Link>
        <Link href="/blogs">
          <Menu active={router.pathname === "/blogs"}>Blogs</Menu>
        </Link>
        <Link href="/videos">
          <Menu active={router.pathname === "/videos"}>Videos</Menu>
        </Link>
        <Link href="/projects">
          <Menu active={router.pathname === "/projects"}>Projects</Menu>
        </Link>
      </MenuContainer>
      <MobileMenu onClick={() => toggleMenu(true)}>🍔</MobileMenu>
      <SideMenu
        path={router.pathname}
        closeMenu={toggleMenu}
        showMenu={showMenu}
      />
    </Container>
  );
};

export default Header;
