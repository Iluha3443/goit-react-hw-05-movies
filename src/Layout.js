import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";
import styled from "styled-components";

 const StyledLink = styled(NavLink)`
  color: black;
  margin-right: 15px;
  padding: 15px;

  &.active {
    color: orange;
  }
`;

const Layout = () => {

   

    return (
        <div>
            <nav>
                <StyledLink to="/" >Home</StyledLink>
                <StyledLink to="/movies">Movies</StyledLink>
            </nav>
            <main>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </main>
        </div>
    );
}

export default Layout;