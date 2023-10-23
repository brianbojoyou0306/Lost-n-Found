const router = require("express").Router();
const { User, validate } = require("../Models/user");
const bcrypt = require("bcrypt");
const jwt =require('jsonwebtoken')

router.post("/", async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ email: req.body.email });
		if (user)
			return res
				.status(409)
				.send({ message: "User with given email already Exist!" });

		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		await new User({ ...req.body, password: hashPassword }).save();//saving userdata in db
		const data ={
			user:{
				id:User.id
			}
		}

		const authtoken = jwt.sign(data, process.env.JWTPRIVATEKEY);
		res.status(201).send({ data: authtoken, message: "User Created successfully" });
	} catch (error) {
		console.log(error)
		res.status(500).send({ message: "Internal Server Error" });
	}
});

module.exports = router;
