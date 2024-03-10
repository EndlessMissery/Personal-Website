import FadeIn from "../FadeIn/FadeIn";
import "./Header.css"

export default function Header() {
  
    return (
      <FadeIn>
        <header>
          <h1>Roman Kalita</h1>
          <hr className="under-name" />
          <p>
            Designer & developer
          </p>
        </header>
      </FadeIn>
    );
  }
