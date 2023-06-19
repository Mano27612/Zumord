import React from "react";
import styled from "styled-components";
import YouTube from "../img/logo.png";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
// import { Badge } from "@mui/material";
import Badge from 'react-bootstrap/Badge';
import { NotificationAddOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";


const Container = styled.div`
  position: sticky;
  top: 0;
  color: white;
 background-color: ${({ theme }) => theme.bgLighter};
  height: 56px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
  margin-top:25px;
  float:right;
`;

const Img = styled.img`
  height: 25px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0px 20px;
  position: relative;
`;


const Search = styled.div`
  width: 40%;
  position: absolute;
  left: 0px;
  right: 0px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid white;
  border-radius: 10px;
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  color: ${({ theme }) => theme.text};
`;

const Navbar = () => {
  return (
    <Container >
      <Wrapper>
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>
            <Img src={YouTube} />
            YouTube
          </Logo>
        </Link>
        <Search>
          <Input placeholder="Search" />
          <SearchOutlinedIcon />
        </Search>
             

        <Badge >
              <NotificationAddOutlined
              style={{padding:"20px" , width:"50px"}}/>
            </Badge>

              <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
              class="rounded-circle shadow-4"
              style={{ width: "50px", borderRadius:"50%"}}
              alt="Avatar"
            />
         
      </Wrapper>
    </Container>
  );
};



export default Navbar;
