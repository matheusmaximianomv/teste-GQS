const Turma = require('../../src/app/models/Turma');

describe('Testing methods of class Turma', () => {
    
    it('should set the value of the variable semestre', () => {
        const turma = new Turma();

        turma.setSemestre("5° semestre");

        expect(turma.getSemestre()).toBe("5° semestre");
    });

    it('should set the value of the variable curso', () => {
        const turma = new Turma();

        turma.setCurso("Sistemas de Informações");

        expect(turma.getCurso()).toBe("Sistemas de Informações");
    });
    
    it('should set the value of the variable quantAluno', () => {
        const turma = new Turma();

        turma.setQuantAluno(20);

        expect(turma.getQuantAluno()).toBe(20);
    });

    it('should set the value of the variable disciplinas', () => {
        const turma = new Turma();

        turma.setDisciplinas("PDS III, Arquitetura de Redes");

        expect(turma.getDisciplinas()).toBe("PDS III, Arquitetura de Redes");
    });

    it('should set the value of the variable turno', () => {
        const turma = new Turma();

		turma.setTurno("Noite");
		
        expect(turma.getTurno()).toBe("Noite");
    });

    it('should receive the note and verify that it is of type number', () => {
        const turma = new Turma();

        turma.setQuantAluno(20);

        expect(typeof turma.getQuantAluno()).toBe("number");
    });

})
