const db = require("../db/db");

class UserRepository {
  // Mendapatkan semua data pengguna
  async getAllData() {
    return await db("users").select("*");
  }

  // Menambahkan data pengguna baru
  async createData(data) {
    return await db("users").insert(data).returning("*");
  }

  // Mendapatkan pengguna berdasarkan ID
  async getById(id) {
    return await db("users").where({ id }).first();
  }

  // Memperbarui data pengguna berdasarkan ID
  async updateData(id, data) {
    return await db("users").where({ id }).update(data).returning("*");
  }

  // Menghapus pengguna berdasarkan ID
  async deleteData(id) {
    return await db("users").where({ id }).del().returning("*");
  }
}

module.exports = new UserRepository();
