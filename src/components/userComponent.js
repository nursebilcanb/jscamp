import { BaseLogger, ElasticLogger } from "../crossCuttingCorners/logging/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User component yüklendi")

let logger1 = new ElasticLogger()
let userService = new UserService(logger1)

let user1 = new User(1,"Nursebil","Canbolat","Ankara")
let user2 = new User(2,"Bilal","Canbolat","Ankara")

userService.add(user1)
userService.add(user2)

console.log(userService.list())
console.log(userService.getById(2))


let customer = { id: 1, firstName: "Nursebil" }

//prototyping
customer.lastName = "Canbolat"

console.log(customer.lastName)