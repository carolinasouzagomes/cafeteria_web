// Carrinho compartilhado entre pedidos.html e pagamento.html.
const CHAVE_CARRINHO = "bloomCoffeeCarrinho";
const TAXA_ENTREGA = 5;

function lerCarrinho() {
    try {
        const dados = JSON.parse(localStorage.getItem(CHAVE_CARRINHO) || "[]");
        return Array.isArray(dados) ? dados : [];
    } catch (erro) {
        return [];
    }
}

function salvarCarrinho(carrinho) {
    localStorage.setItem(CHAVE_CARRINHO, JSON.stringify(carrinho));
}

function obterResumoCarrinho() {
    const itens = lerCarrinho();
    const subtotal = itens.reduce((total, item) => total + Number(item.price) * Number(item.quantity), 0);
    const quantidade = itens.reduce((total, item) => total + Number(item.quantity), 0);
    return {
        itens,
        subtotal,
        entrega: itens.length ? TAXA_ENTREGA : 0,
        total: subtotal + (itens.length ? TAXA_ENTREGA : 0),
        quantidade
    };
}
