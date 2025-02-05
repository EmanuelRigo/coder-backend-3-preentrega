import { faker } from "@faker-js/faker";
import { createHash } from "../utils/index.js";

class MockingService {

  static async generateMockingUsers(num) {
    const users = [];
    for (let i = 0; i < num; i++) {
      const hashedPassword = await createHash("coder123");
      users.push({
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        email: faker.internet.email(),
        password: hashedPassword,
        role: faker.helpers.arrayElement(["admin", "user"]),
        pets: [],
      });
    }
    return users;
  }

  static async generateMockingPets(num) {
    const pets = [];
    for (let i = 0; i < num; i++) {
      pets.push({
        name: faker.animal.petName(),
        specie: faker.animal.cat(),
        adopted: false,
        birthDate: faker.date.past(),
        image: "https://via.placeholder.com/150",
      });
    }
    return pets;
  }
}

export default MockingService;