import AlterUserService from "../src/Service/user/alterUserService"


let alterUserService

beforeAll(() => {
    alterUserService = new AlterUserService()
})

describe('Alter User Service', () => {

    it('Deve existir um erro para os usuários não encontrados', async () => {

        const dataUser = {
            email: 'eractruus@test.com',
            senha: '000'
        }

        const alterUser = alterUserService.executeService(dataUser)

        await expect(alterUser).rejects
            .toEqual(new Error('Usuário não encontrado'))
    })

    it('Deve retornar uma mensagem de alteração', async () => {

        const dataUser ={
            email:'eractrus@test.com',
            senha:'1234'
        }
        const alteruser = await alterUserService.executeService(dataUser)

        expect(alteruser.updatedUser.apelido).toBe('Eractrus')
        expect(alteruser.mensagem).toBe(`Senha do usuário ${alteruser.updatedUser.apelido} alterada com sucesso!`)
    })
})