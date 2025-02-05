import MockingService from "../services/mocking.js";
import userModel from "../dao/models/User.js";
import petModel from "../dao/models/Pet.js";

const getMockingPets = async (req, res) => {
    const num = parseInt(req.params.num, 10);
    const pets = await MockingService.generateMockingPets(num);
    res.send({status: "success", payload: pets});
}

const getMockingUsers = async (req, res) => {
    const num = parseInt(req.params.num, 10) || 50;
    const users = await MockingService.generateMockingUsers(num);
    res.send({status: "success", payload: users});
}

const generateData = async (req, res) => {
    const numUsers = parseInt(req.query.users, 10) || 50; 
    const numPets = parseInt(req.query.pets, 10) || 50; 
    const users = await MockingService.generateMockingUsers(numUsers);
    const pets = await MockingService.generateMockingPets(numPets);
    await userModel.insertMany(users);
    await petModel.insertMany(pets);

    res.send({status: "success", payload: { users, pets }});
}

export { getMockingPets, getMockingUsers, generateData };