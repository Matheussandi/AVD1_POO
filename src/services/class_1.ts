class Lojinha {
    constructor(
        public _produto: string,
        public _preco: number,
        public _quantidade: number
    ) {}

    get produto() {
        return this._produto;
    }

    get preco() {
        return this._preco;
    }

    get quantidade() {
        return this._quantidade;
    }

    set produto(produto: string) {
        if (produto === '') {
            throw new Error("Nome inválido !")
        }

        this._produto = produto;
    }

    set preco(preco: number) {
        if (preco <= 0) {
            throw new Error("Preço inválido !")
        }

        this._preco = preco;
    }

    set quantidade(quantidade: number) {
        if (quantidade <= 0) {
            throw new Error("Quantidade inválida !")
        }

        this._quantidade = quantidade;
    }

    public valor() {
        return this.preco * this.quantidade
    }

    public desconto() {
        if (this.quantidade <= 10) {
            return 0
        } else if (this.quantidade > 10 && this.quantidade <= 20) {
            return this.valor() * 0.1
        } else if (this.quantidade > 20 && this.quantidade <= 50) {
            return this.valor() * 0.2
        } else {
            return this.valor() * 0.25
        }
    }

    public total() {
        return this.valor() - this.desconto()
    }
}

const cliente = new Lojinha('Notebook', 2000, 15)

try {
    cliente.produto = 'Xbox'
    cliente.preco = 100
    cliente.quantidade = 20

     console.log(`O produto ${cliente.produto} de ${cliente.preco} reais, quantidade comprada de ${cliente.quantidade} teve o desconto de ${cliente.desconto()} reais e o valor pago foi de ${cliente.total()} reais.`)
} catch (err:any) {
    console.log(err.message)
}