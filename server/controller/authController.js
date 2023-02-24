const {User, Basket} = require("../modelsORM");
const bcrypt = require("bcrypt")
const jsonwebtoken = require("jsonwebtoken")
const ApiError = require("../error/ApiError");

let generatorJwt = (id, email, role) => {
    return jsonwebtoken.sign(
        {id, email, role},
        process.env.secretKey,
        {expiresIn: "24h"}
    )
}


class authController {
    async registration(req, res, next) {

        const {email, password, name, number} = req.body
        const candidate = await User.findOne({where: {email}})
        let user = {}

        if (candidate.id !== 1) {
            return next(ApiError.badRequest("такой email уже существует"))
        } else if (candidate.id === 1) {
            candidate.role = "admin"
            user = candidate.save()
        } else {
            const hashPassword = await bcrypt.hash(password, 5)
            user = await User.create({email, password: hashPassword, name, number})
        }

        const token = generatorJwt(user.id, user.email, user.role)
        return res.json({token})
    }

    async login(req, res, next) {
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if (!user) {
            return next(ApiError.internal("пользователь не найден"))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal("не верный пароль"))
        }
        const token = generatorJwt(user.id, user.email, user.role)
        return res.json({token})
    }

    async check(req, res) {
        const token = generatorJwt(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }
}

module.exports = new authController()