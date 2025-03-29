const {Convenor} = require('../models/index');
const convenor = require('../models/convenor');

class ConvenorRepository {
    async create(data){
        try {
            const user = await Convenor.create(data);
            return user;
        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw error;
        }
    }

    async destroy(userId){
        try {
            await Convenor.destroy({
                where:{
                    id:userId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw error;
        }
    }
    async getById(userId){
        try {
            const user = await Convenor.findByPk(userId,{
                attributes: ['email','id']
            });
            return user;
        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw error;
        }
    }

    async getByEmail(userEmail){
        try {
            const user = await Convenor.findOne({where:{
                email:userEmail
            }});
            return user;
        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw error;
        }
    }
}

module.exports = ConvenorRepository;