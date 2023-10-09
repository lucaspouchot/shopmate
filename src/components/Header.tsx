import Logo from '../assets/logo.png';
import './header.css';

export function Header() {
  return (
    <header>
      <img className='logo' src={Logo} alt='logo'></img>
      <a href="/">Home</a>
    </header>
  )
}
