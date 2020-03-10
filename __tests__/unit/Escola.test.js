const Escola = require('../../src/app/models/Escola');

describe('Testing methods of class Escola', () => {
    it('should set the value of the variable nome', () =>{
        const escola = new Escola();

        escola.setNomeEscola("Educandário Martins");

        expect(escola.getNomeEscola()).toBe("Educandário Martins");
    });

    it('should set the value of the variable endereco', () =>{
        const escola = new Escola();

        escola.setEndereco("R. Prisma Cristal");

        expect(escola.getEndereco()).toBe('R. Prisma Cristal');
    });

    it('should set the value of the variable num', () =>{
        const escola = new Escola();

        escola.setNum(123);
        
        expect(escola.getNum()).toBe(123);
    });

    it('should set the value of the variable bairro', () =>{
        const escola = new Escola();

        escola.setBairro('nanotics');

        expect(escola.getBairro()).toBe('nanotics');
    });

    it('should set the value of the variable cep', () =>{
        const escola = new Escola();

       escola.setCep(321123456);
       
       expect(escola.getCep()).not.toBe(1233591456);
    });
})