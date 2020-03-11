class Professor {
    
    constructor(name, matricula, disciplina, cpf, rg) {
        this.name = name;
        this.matricula = matricula;
        this.disciplina = disciplina;
        this.cpf = cpf;
        this.rg = rg;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
        return;
    }

    getMatricula() {
        return this.matricula;
    }

    setMatricula(matricula) {
        this.matricula = matricula;
        return;
    }

    getDisciplina() {
        return this.disciplina;
    }

    setDisciplina(disciplina) {
        this.disciplina = disciplina;
        return;
    }

    getCpf() {
        return this.cpf;
    }

    setCpf(cpf) {
        this.cpf = cpf;
        return;
    }

    getRg() {
        return this.rg;
    }

    setRg(rg) {
        this.rg = rg;
        return;
    }

}

module.exports = Professor;
