class Escola{
    
    constructor(nomeEscola, endereco, num, bairro, cep){
        this.nomeEscola = nomeEscola;
        this.endereco = endereco;
        this.num = num;
        this.bairro = bairro;
        this.cep = cep;
    }

    getNomeEscola(){
        return this.nomeEscola;
    }

    getEndereco(){
        return this.endereco;
    }

    getNum(){
        return this.num;
    }

    getBairro(){
        return this.bairro;
    }

    getCep(){
        return this.cep;
    }

    setNomeEscola( nomeEscola ){
        this.nomeEscola = nomeEscola;
        return;
    }

    setEndereco(endereco){
        this.endereco = endereco;
        return;
    }

    setNum(num){
        this.num = num;
        return;
    }

    setBairro( bairro ){
        this.bairro = bairro;
        return;
    }

    setCep( cep ){
        this.cep = cep;
        return;
    }

}

module.exports = Escola;