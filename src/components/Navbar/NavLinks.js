import "./NavLinks.css";

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li onClick={() => props.isMovileNav && props.closeMovileNav()}>
        <a href="/#home">Home</a>
      </li>
      <li onClick={() => props.isMovileNav && props.closeMovileNav()}>
        <a href="/#about-me">About Me</a>
      </li>          
      <li onClick={() => props.isMovileNav && props.closeMovileNav()}>
        <a href="/">My Skills</a>
      </li>  
      <li onClick={() => props.isMovileNav && props.closeMovileNav()}>
        <a href="/">My Works</a>
      </li>        
      <li onClick={() => props.isMovileNav && props.closeMovileNav()} >
        <a href="/#contact-me">Contact Me</a>
      </li>          
    </ul>
  )
}

export default NavLinks
