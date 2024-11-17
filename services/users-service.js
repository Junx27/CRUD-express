const userRepo = require("../repositories/users-repository");

class UserService {
  // Mendapatkan semua data pengguna
  async fetchAllData() {
    return await userRepo.getAllData();
  }

  // Menambahkan pengguna baru
  async addUser(data) {
    if (!data.first_name || !data.last_name || !data.age) {
      throw new Error(
        "Fields 'first_name', 'last_name', and 'age' are required"
      );
    }
    return await userRepo.createData(data);
  }

  // Mendapatkan pengguna berdasarkan ID
  async getUserById(id) {
    return await userRepo.getById(id);
  }

  // Memperbarui pengguna berdasarkan ID
  async updateUser(id, data) {
    if (!data.first_name && !data.last_name && !data.age) {
      throw new Error(
        "At least one field (first_name, last_name, or age) is required to update"
      );
    }
    return await userRepo.updateData(id, data);
  }

  // Menghapus pengguna berdasarkan ID
  async deleteUser(id) {
    return await userRepo.deleteData(id);
  }
}

module.exports = new UserService();
