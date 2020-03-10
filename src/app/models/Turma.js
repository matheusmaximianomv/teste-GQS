class Turma {
    
    constructor(semestre,curso,quantAluno, disciplinas, turno) {
        this.semestre = semestre;
        this.curso = curso;
        this.quantAluno = quantAluno;
        this.disciplinas = diciplinas;
		this.turno = turno;
    }

    getSemestre() {
        return this.semestre;
    }

    setSemestre(semestre) {
        this.semestre = semestre;
        return;
    }

    getCurso() {
        return this.curso;
    }

    setCurso(curso) {
        this.curso= curso;
        return;
    }

    getQuantAluno() {
        return this.quantAluno;
    }

    setQuantAluno(quantAluno) {
        this.quantAluno = parseFloat(quantAluno);
        return;
    }

    getDisciplinas() {
        return this.disciplinas;
    }

    setDisciplinas(disciplinas) {
        this.disciplinas = disciplinas;
        return;
    }
	
	getTurno() {
        return this.turno;
    }

    setTurno(turno) {
        this.turno = turno;
        return;
    }

}

module.exports = Turma;
