import { createContext, useContext, useState } from "react";

{/* A estrutura para iniciar um contexto é a seguinte:

const MeuContexto = createContext(); 

Cada objeto Context vem com um componente Provider React que permite que os componentes que estão usando esse contexto façam alterações nele.

<MeuContexto.Provider value={inserir aqui}>

Após abranger o componente com o provider, você consegue acesso ao componente utilizando o hook useContext(MeuContexto).

*/}

export const FavoritosContext = createContext();
FavoritosContext.displayName = "Favoritos";

export default function FavoritosProvider({ children }) {
    const [favorito, setFavorito] = useState([]);

    return (
        <FavoritosContext.Provider
            value={{ favorito, setFavorito }}>
            {children}
        </FavoritosContext.Provider>
    )
}

export function useFavoritoContext() {
    const { favorito, setFavorito } = useContext(FavoritosContext);

    function adicionarFavorito(novoFavorito) {
        const favoritoRepetido = favorito.some(item => item.id === novoFavorito.id)

        let novaLista = [...favorito];

        if (!favoritoRepetido) {
            novaLista.push(novoFavorito);
            return setFavorito(novaLista);
        }

        novaLista.splice(
            novaLista.findIndex(
                item => item.id === novaLista.find(item => item.id === novoFavorito.id).id
            ),
            1
        )
        return setFavorito(novaLista);
    }
    return {
        favorito,
        adicionarFavorito
    }
}