import Rodape from "componentes/Rodape";

const { default: Cabecalho } = require("componentes/Cabecalho");
const { default: Container } = require("componentes/Container");
const { default: FavoritosProvider } = require("contextos/Favoritos");
const { Outlet } = require("react-router-dom");

function PaginaBase() {
    return (
        <main>
            <Cabecalho />
            <FavoritosProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritosProvider>
            <Rodape />
        </main>
    )
}

export default PaginaBase;