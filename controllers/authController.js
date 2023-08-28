import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import pool from "../db.js";

const register = async (req, res) => {
  try {
    const { username, password, firstname, lastname, email } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    await pool.query(
      "INSERT INTO users (username, password, firstname, lastname, email) VALUES ($1, $2, $3, $4, $5)",
      [username, hashedPassword, firstname, lastname, email]
    );

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: `Registration failed: ${error}` });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const result = await pool.query("SELECT * FROM users WHERE username = $1", [
      username,
    ]);
    const user = result.rows[0];

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: "Authentication failed" });
    }

    const token = jwt.sign({ username: user.username }, "secret_key");

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: `Login failed: ${error}` });
  }
};

export { register, login };
