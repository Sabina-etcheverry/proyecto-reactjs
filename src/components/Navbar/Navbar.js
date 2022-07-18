import styled from 'styled-components';
import CartWidget from './CartWidget';
import { Link } from "react-router-dom";
import "./Navbar.css";





function Navbar() {
    return (
 <>
 <NavContainer>
     <Link to="/">Ecommerce <span>ETCHEVERRY</span></Link>
     <Link  to="/categorias/remeras">Remeras</Link>
     <Link  to="/categorias/pantalon">Pantalon</Link>
     <Link  to="/categorias/Camperas">Camperas</Link>
<CartWidget/>
</NavContainer>
 </>
  )
}
export default Navbar

const NavContainer = styled.nav `
h2{
    color: black;
    font-weight: 400;
    span{
      font-weight: bold;
    }
  }
  padding: .4rem;
  background-color: darksalmon;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a{
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
.links {
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a{
        color: white;
        font-size: 2rem;
        display: block;
      }
      @media(min-width: 768px){
        position: initial;
        margin: 0;
        a{
          font-size: 1rem;
          color: white;
          display: inline;
        }
        display: block;
    } 
}

.links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a{
        font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
}

  
  .button {
  font-size: 2rem;
  }

  `