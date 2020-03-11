const Professor = require('../../src/app/models/Professor');

describe('Testing methods of class Professor', () => {
    
    it('should set the value of the variable name', () => {
        const professor = new Professor();

        professor.setName("Danilo");

        expect(professor.getName()).toBe("Danilo");
    });

    it('should set the value of the variable matricula', () => {
        const professor = new Professor();

        professor.setMatricula("TI030");

        expect(professor.getMatricula()).toBe("TI030");
    });
    
    it('should set the value of the variable disciplina', () => {
        const professor = new Professor();

        professor.setDisciplina("Gestão de Qualidade de Software");

        expect(professor.getDisciplina()).toBe("Gestão de Qualidade de Software");
    });

    it('should set the value of the variable cpf', () => {
        const professor = new Professor();

        professor.setCpf("123.456.789-00");

        expect(professor.getCpf()).toBe("123.456.789-00");
    });

    it('should receive the grades and calculate the rg', () => {
        const professor = new Professor();

        professor.setRg("123456");

        expect(professor.getRg()).toBe("123456");
    });

    it('should receive the name and verify that it is of type string', () => {
        const professor = new Professor();

        professor.setName("Danilo");

        expect(typeof professor.getName()).toBe("string");
    });

})
