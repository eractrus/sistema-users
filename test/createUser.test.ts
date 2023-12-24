import CreateUserService from "../src/Service/user/createUserService"

let createUserService

beforeAll(() => {
    createUserService = new CreateUserService()
})

describe('Create User Service', () => {

    it("Deve registrar um novo usuário", async () => {

        const dataUsers = {
            apelido: "Maria",
            email: "maria@test.com",
            senha: "123"
        }

        const createUser = await createUserService.executeService(dataUsers)

        expect(createUser.service).toHaveProperty("id")
        expect(createUser.service.apelido).toBe('Maria')
        expect(createUser.service).toHaveProperty("email")
    })

    it('Deve existir um erro ao usuário ja cadastrado', async () => {
        const dataUsersExist = {
            apelido: "Maria Exist",
            email: "mariaExist@test.com",
            senha: "Exist123"
        }

        await createUserService.executeService(dataUsersExist)

        await expect(createUserService.executeService(dataUsersExist))
            .rejects
            .toEqual(new Error('E-mail ja cadastrado'))

    })

})