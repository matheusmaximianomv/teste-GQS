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
        this.matricula = parseFloat(matricula);
        return;
    }

    getDisciplina() {
        return this.disciplina;
    }

    setDisciplina(disciplina) {
        this.disciplina = parseFloat(disciplina);
        return;
    }

    getCpf() {
        return this.cpf;
    }

    setCpf(cpf) {
        this.cpf = parseFloat(cpf);
        return;
    }

    getRg() {
        return this.rg;
    }

    setRg(rg) {
        this.rg = parseFloat(rg);
        return;
    }

}

module.exports = Professor;
