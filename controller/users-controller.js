const userService = require("../services/users-service");

class UserController {
  // Get all users
  async getAllData(req, res) {
    try {
      const users = await userService.fetchAllData();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Create a new user
  async createData(req, res) {
    try {
      const userData = req.body;
      const createdUser = await userService.addUser(userData);
      res
        .status(201)
        .json({ message: "User created successfully", data: createdUser });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  // Get user by ID
  async getUserById(req, res) {
    try {
      const id = req.params.id;
      const user = await userService.getUserById(id);

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Update a user
  async update(req, res) {
    try {
      const userId = req.params.id;
      const userData = req.body;
      const updatedUser = await userService.updateUser(userId, userData);

      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }

      res.status(200).json({
        message: "User updated successfully",
        data: updatedUser,
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  // Delete a user
  async deleteUser(req, res) {
    try {
      const userId = req.params.id;
      const deletedRows = await userService.deleteUser(userId);

      if (deletedRows === 0) {
        return res.status(404).json({ message: "User not found" });
      }

      res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new UserController();
