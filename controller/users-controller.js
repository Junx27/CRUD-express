const userService = require("../services/users-service");

class UserController {
  // Mendapatkan semua data pengguna
  async getAllData(req, res) {
    try {
      const data = await userService.fetchAllData();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Membuat pengguna baru
  async createData(req, res) {
    try {
      const newData = await userService.addUser(req.body);
      res
        .status(201)
        .json({ message: "User created successfully", data: newData });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  // Mendapatkan data pengguna berdasarkan ID
  async getUserById(req, res) {
    try {
      const user = await userService.getUserById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Memperbarui data pengguna
  async updateData(req, res) {
    try {
      const updatedData = await userService.updateUser(req.params.id, req.body);
      if (!updatedData) {
        return res.status(404).json({ message: "User not found" });
      }
      res
        .status(200)
        .json({ message: "User updated successfully", data: updatedData });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  // Menghapus pengguna berdasarkan ID
  async deleteData(req, res) {
    try {
      const rowsDeleted = await userService.deleteUser(req.params.id);
      if (rowsDeleted === 0) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new UserController();
