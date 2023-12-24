// authUserService.test.js

import AuthUserService from '../src/Service/user/authUserService';

let authUserService;

beforeAll(() => {
    authUserService = new AuthUserService();
});

describe('AuthUserService', () => {

    it('Deve autenticar o usuário com sucesso', async () => {
        const user = {
            apelido: 'mario',
            senha: '000'
        };

        const result = await authUserService.executeService(user);

        expect(result).toHaveProperty('token');
        expect(result.user.apelido).toBe(user.apelido);
        expect(result.user).toHaveProperty('email');
        expect(result.user).toHaveProperty('id');
    });

   it('Deve lançar erro ao fornecer apelido incorreto', async () => {

        const user = {
            apelido: 'usuario-inexistente',
            senha: '000'
        };

        await expect(authUserService.executeService(user)).rejects.toEqual(new Error('Apelido incorreto'));
    });

    it('Deve lançar erro ao fornecer senha incorreta', async () => {
  
          const user = {
              apelido: 'mario',
              senha: '0123'
          };
  
          await expect(authUserService.executeService(user)).rejects.toEqual(new Error('Senha incorreto'));
      });
});
