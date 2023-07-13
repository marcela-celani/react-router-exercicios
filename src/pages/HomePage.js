import { useNavigate } from "react-router-dom";
import { goToProductDetails, goToProfilePage } from "../routes/cordinator";

function HomePage() {

  const navigate = useNavigate()

  return (
    <section>
      <h1>Página inicial</h1>
      <button onClick={() => goToProfilePage(navigate)}>Ir para página de perfil</button>
      <button onClick={() => goToProductDetails(navigate, 'marcela')}>detalhes</button>
    </section>
  );
}

export default HomePage;
