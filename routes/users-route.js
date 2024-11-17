const express = require("express");
const router = express.Router();
const userController = require("../controller/users-controller");

// Mendapatkan semua data pengguna
router.get("/user", userController.getAllData);

// Menambahkan pengguna baru
router.post("/user", userController.createData);

// Mendapatkan pengguna berdasarkan ID
router.get("/user/:id", userController.getUserById);

// Memperbarui data pengguna berdasarkan ID
router.put("/user/:id", userController.updateData);

// Menghapus pengguna berdasarkan ID
router.delete("/user/:id", userController.deleteData);

module.exports = router;
