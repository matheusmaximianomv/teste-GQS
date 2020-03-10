class Aluno {
    
    constructor(name, nota1, nota2, nota3) {
        this.name = name;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
        return;
    }

    getNota1() {
        return this.nota1;
    }

    setNota1(nota1) {
        this.nota1 = parseFloat(nota1);
        return;
    }

    getNota2() {
        return this.nota2;
    }

    setNota2(nota2) {
        this.nota2 = parseFloat(nota2);
        return;
    }

    getNota3() {
        return this.nota3;
    }

    setNota3(nota3) {
        this.nota3 = parseFloat(nota3);
        return;
    }

    getMedia() {
        return (this.nota1 + this.nota2 + this.nota3) / 3;
    }

}

module.exports = Aluno;