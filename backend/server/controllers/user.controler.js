const User = require("../models/User.model");
const userService = require("../services/user.service");

const useController = {
    //GET ALL USERS
    allUsers: async(req, res) => {
        try {
            const user = await userService.getAllUsers();
            return res.json({
                method: 'GET',
                status: 'success',
                description: 'List all users',
                data: user
            })
        } catch(error) {
            res.status(400).json("ERROR: " + error);
        }
    },

    // DELETE
    deleteUser: async (req, res) => {
        try {
            const user = await userServices.deleteUser(req.params.id);
            
            return res.json({
                method: 'DELETE',
                status: 'success',
                data: user.deletedCount === 0 ? "Deleted unsuccessfully" : "Deleted successfully"
            });
        } catch (error) {
            res.status(400).json("ERROR: " + error);
        }
    },

    // UPDATE
    updateUser: async (req, res) => {
        try {
            const user = await userServices.updateUser(req.params.id, req.body);
            return res.json({
                method: 'PUT',
                status: 'success',
                data: user
            });
        } catch (error) {
            res.status(400).json("ERROR: " + error);
        }
    }
}

module.exports = useController;

