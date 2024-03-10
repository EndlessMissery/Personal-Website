import FadeIn from "../FadeIn/FadeIn";
import "./Header.css"

export default function Header() {
  
    return (
      <FadeIn>
        <header>
          <h1>Roman Kalita</h1>
          <p>Designer & developer</p>
        </header>
        <hr className="under-name" />
      </FadeIn>
    );
  }
