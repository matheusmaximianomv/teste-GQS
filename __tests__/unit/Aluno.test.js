const Aluno = require('../../src/app/models/Aluno');

describe('Testing methods of class Aluno', () => {
    
    it('should set the value of the variable name', () => {
        const aluno = new Aluno();

        aluno.setName("Matheus Maximiano");

        expect(aluno.getName()).toBe("Matheus Maximiano");
    });

    it('should set the value of the variable nota1', () => {
        const aluno = new Aluno();

        aluno.setNota1(9.5);

        expect(aluno.getNota1()).toBe(9.5);
    });
    
    it('should set the value of the variable nota2', () => {
        const aluno = new Aluno();

        aluno.setNota2(10);

        expect(aluno.getNota2()).toBe(10);
    });

    it('should set the value of the variable nota3', () => {
        const aluno = new Aluno();

        aluno.setNota3(9);

        expect(aluno.getNota3()).toBe(9);
    });

    it('should receive the grades and calculate the average', () => {
        const aluno = new Aluno("Matheus Maximiano", 10, 9, 9.5);

        expect(aluno.getMedia()).toBe(9.5);
    });

    it('should receive the note and verify that it is of type number', () => {
        const aluno = new Aluno();

        aluno.setNota1(9);

        expect(typeof aluno.getNota1()).toBe("number");
    });

    it('should receive the name of the student and verify that it is not of type number', () => {
        const aluno = new Aluno();

        aluno.setName("Matheus");

        expect(typeof aluno.getName()).not.toBe("number");
    });
})
