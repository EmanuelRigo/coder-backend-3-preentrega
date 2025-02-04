import { faker } from "@faker-js/faker";

const generateProducts = () => {
    return{
            id: faker.database.mongodbObjectId(),
            title: faker.commerce.productName(),
            price: faker.commerce.price(),
            image: faker.image.avatar(),
            description: faker.commerce.productDescription(),
            stock: parseInt(faker.string.numeric())
        }
    }

const generateUsers = () => {
    let cart = []
    
    let productNumber = parseInt(faker.string.numeric())

    for (let i = 0; i < productNumber; i++) {
        cart.push(generateProducts())
    }


    return{
            id: faker.database.mongodbObjectId(),
            first_name: faker.person.firstName(),
            last_name: faker.person.lastName(),
            birthdate: faker.date.birthdate(),
            phone: faker.phone.number(),
            image: faker.image.avatar(),
            email: faker.internet.email(),
            cart
        }
    }


export default generateUsers;