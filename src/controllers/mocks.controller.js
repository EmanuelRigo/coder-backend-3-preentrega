import MockingService from "../services/mocking.js";

const getMockingPets = async (req, res) => {
    const num = parseInt(req.params.num, 10);
    const pets = await MockingService.generateMockingPets(num);
    res.send({status: "success", payload: pets});
}

const getMockingUsers = async (req, res) => {
    const num = parseInt(req.params.num, 10);
    const users = await MockingService.generateMockingUsers(num);
    res.send({status: "success", payload: users});
}

export { getMockingPets, getMockingUsers };