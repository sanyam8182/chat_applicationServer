import pool from "../db.js";

const getUsers = async (req, res) => {
  try {
    const { username } = req.body;

    const results = await pool.query(
      "SELECT * FROM users WHERE username != $1",
      [username]
    );
    const users = [];
    results.rows.forEach((item) => {
      users.push(item);
    });
    res.status(201).json({ users });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getUser = async (req, res) => {
  try {
    const { username } = req.body;

    const results = await pool.query(
      "SELECT * FROM users WHERE username = $1",
      [username]
    );
    var user = {};
    if (results.rows.length != 0) {
      user = results.rows[0];
    }
    res.status(201).json({ user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

export { getUsers, getUser };
