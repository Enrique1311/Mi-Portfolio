import "./NavLinks.css";

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li onClick={() => props.isMovileNav && props.closeMovileNav()}>
        <a href="/#home" className="selected">Home</a>
      </li>
      <li onClick={() => props.isMovileNav && props.closeMovileNav()}>
        <a href="/#about-me" className="selected">About Me</a>
      </li>          
      <li onClick={() => props.isMovileNav && props.closeMovileNav()}>
        <a href="/#resume" className="selected">Resume</a>
      </li>  
      <li onClick={() => props.isMovileNav && props.closeMovileNav()}>
        <a href="/#proyects" className="selected">Proyects</a>
      </li>        
      <li onClick={() => props.isMovileNav && props.closeMovileNav()} >
        <a href="/#contact-me" className="selected">Contact Me</a>
      </li>          
    </ul>
  )
}

export default NavLinks
