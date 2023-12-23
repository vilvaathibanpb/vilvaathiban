import styled from "styled-components";
import Link from "next/link";

const MenuItems = styled.div`
  .bg-pwhite;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  .fixed;
  .top-0;
  .left-0;
  .text-pdark;
  .flex;
  .flex-col;
  .justify-around;
  .items-center;
  font-size: 18px;
  font-weight: 700;
  animation: show-menu 0.25s;

  @keyframes show-menu {
    0% {
      left: 100%;
    }
    100% {
      left: 0;
    }
  }
`;

const Close = styled.div`
  .lg: hidden;
  .absolute;
  .top-0;
  .right-0;
  .px-8;
  .py-4;
`;

const Menu = styled.div`
  .text-sdark;
  border-radius: 10px;
  .p-4;
  ${props => props.active && `.text-pwhite; .bg-sdark;`}
`;

const SideMenu = ({ showMenu, closeMenu, path }) => {
  return (
    <>
      {showMenu && (
        <MenuItems>
          <Close onClick={() => closeMenu(false)}>❎</Close>
          <Link href="/about">
            <Menu active={path=== '/about'}>About</Menu>
          </Link>
          <Link href="/workshop">
            <Menu active={path=== '/workshop'}>Workshops</Menu>
          </Link>
          <Link href="/talks">
            <Menu active={path=== '/talks'}>Talks</Menu>
          </Link>
          <Link href="/blogs">
            <Menu active={path=== '/blogs'}>Blogs</Menu>
          </Link>
          <Link href="/videos">
            <Menu active={path=== '/videos'}>Videos</Menu>
          </Link>
          <Link href="/projects">
            <Menu active={path=== '/projects'}>Projects</Menu>
          </Link>
          <Link href="/reviews">
            <Menu active={path=== '/reviews'}>Reviews</Menu>
          </Link>
        </MenuItems>
      )}
    </>
  );
};

export default SideMenu;
