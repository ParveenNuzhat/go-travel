import React, { useEffect, useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  const activeStyle = {
    fontWeight: "bold",
    color: "red",
  };

  useEffect(() => {
    fetch(`https://quiet-waters-33050.herokuapp.com/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data[0]?.role === "admin") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      });
  }, [user?.email]);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      style={{ height: "60px" }}
    >
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink activeStyle={activeStyle} className="menu-text" to="/home">
              Home
            </NavLink>

            <NavLink
              activeStyle={activeStyle}
              className="menu-text"
              to="/spots"
            >
              Top Rated Spots
            </NavLink>

            {isAdmin ? (
              <>
                <NavLink
                  activeStyle={activeStyle}
                  className="menu-text"
                  to="/manageBlogs"
                >
                  Manage Blogs
                </NavLink>

                <NavLink
                  activeStyle={activeStyle}
                  className="menu-text"
                  to="/admin"
                >
                  New Admin
                </NavLink>

                <NavLink
                  activeStyle={activeStyle}
                  className="menu-text"
                  to="/adminBlog"
                >
                  Admin Blog
                </NavLink>
              </>
            ) : (
              <>
                <NavLink
                  activeStyle={activeStyle}
                  className="menu-text"
                  to="/userBlog"
                >
                  Post Blog
                </NavLink>
              </>
            )}

            {user?.email && (
              <Navbar.Brand to="/home" className="header-text text-danger">
                {user.displayName}{" "}
              </Navbar.Brand>
            )}
            {user?.email ? (
              <Button onClick={logOut} className="menu-button ms-2">
                Log out
              </Button>
            ) : (
              <div>
                <NavLink
                  activeStyle={activeStyle}
                  className="menu-text"
                  to="/register"
                >
                  Register
                </NavLink>
                <NavLink
                  activeStyle={activeStyle}
                  className="menu-text"
                  to="/login"
                >
                  Login
                </NavLink>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
