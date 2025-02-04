import MockingService from "../services/mocking"

const getMockingPets = async (req, res) => {
    const pets = await MockingService.generateMockingPets(10);
    res.send({status: "success", payload: pets});
}

const getMockingUsers = async (req, res) => {
    const users = await MockingService.generateMockingUsers(10);
    res.send({status: "success", payload: users});
}

export default {
    getMockingPets,
    getMockingUsers
}