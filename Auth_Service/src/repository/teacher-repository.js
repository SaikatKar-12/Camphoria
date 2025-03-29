const {Teacher} = require('../models/index');
const teacher = require('../models/convenor');

class TeacherRepository {
    async create(data){
        try {
            const user = await Teacher.create(data);
            return user;
        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw error;
        }
    }

    async destroy(userId){
        try {
            await Teacher.destroy({
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
            const user = await Teacher.findByPk(userId,{
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
            const user = await Teacher.findOne({where:{
                email:userEmail
            }});
            return user;
        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw error;
        }
    }
}

module.exports = TeacherRepository;