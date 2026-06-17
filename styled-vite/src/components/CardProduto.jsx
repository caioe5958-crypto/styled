import { useState } from 'react';
import styled from 'styled-components';

// Componentes estilizados do CardProduto
const Card = styled.div`
    width: 300px;
    padding: 16px;
    border: 1px solid black;
    border-radius: 8px;
`;
const NomeProduto = styled.h2`
    margin-bottom: 8px;
`;

const Preco = styled.p`
    font-weight: bold;
    margin-bottom: 12px;
`;

const Botao = styled.button`
    padding: 10px;
    border: none;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    // Altera a cor do botão conforme a prop "adicionado"
    background-color: ${(props) =>
        props.adicionado ? '#198754' : '#6c757d'};
`;


function CardProduto() {
    // Estado que controla a aparência e o texto do botão
    const [produtoAdicionado, setProdutoAdicionado] = useState(false);
    return (
        <Card>
            <NomeProduto>Notebook Gamer</NomeProduto>
            <Preco>R$ 5.999,00</Preco>
            <Botao adicionado={produtoAdicionado}
            // Alterna entre adicionado e não adicionado ao clicar
            onClick={() => setProdutoAdicionado(!produtoAdicionado)}>
                {produtoAdicionado ? 'Adicionado ao carrinho' : 'Adicionar ao carrinho'}
            </Botao>
        </Card>
    );
}

export default CardProduto;