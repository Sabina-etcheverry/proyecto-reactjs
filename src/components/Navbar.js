import React,  {useState} from 'react'
import styled from 'styled-components'
import BurguerBoton from './BurguerBoton'
import CartWidget from './CartWidget';




function Navbar() {
    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
setClicked(!clicked)
    }
    return (
 <>
 <NavContainer>
     <h2>Ecommerce <span>ETCHEVERRY</span></h2>
 <div className={`links ${clicked ? 'active' : '' } `}>
     <a onClick={handleClick} href="/">Inicio</a>
     <a onClick={handleClick} href="/">Productos</a>
     <a onClick={handleClick} href="/">Contacto</a>
 </div>
 <div className='burguer'>
<BurguerBoton clicked= {clicked} handleClick={handleClick}/>
</div>
<BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
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

  .burguer{
    @media(min-width: 768px){
      display: none;
    }
  }
  
  .button {
  font-size: 2rem;
  }

  `

const BgDiv = styled.div`
  background-color: #222;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;
  
  &.active{
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`