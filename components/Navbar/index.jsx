import Link from "next/link";
import { useRouter } from "next/router";

import { StyledContainerNavbar } from "./styled";

export const Navbar = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/register");
  };

  return (
    <StyledContainerNavbar>
      <div className="content_one">
        <Link href="/">
          <a>
            <h1>DEVUX_</h1>
          </a>
        </Link>

        <Link href="/">
          <a>
            <h3>Templates</h3>
          </a>
        </Link>

        <Link href="/">
          <a>
            <h3>Preços</h3>
          </a>
        </Link>
      </div>

      <div className="content_two">
        <Link href="/">
          <a>
            <h3>Roadmap</h3>
          </a>
        </Link>

        <Link href="/login">
          <a>
            <h3>Iniciar sessão</h3>
          </a>
        </Link>

        <button type="button" onClick={handleClick}>
          Registre-se
        </button>
      </div>
    </StyledContainerNavbar>
  );
};
