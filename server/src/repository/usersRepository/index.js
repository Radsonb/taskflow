const { db } = require('../../config/db');

const createUser = (username, password, email) => {
	const query = 'INSERT INTO users (username, password, email) VALUES (?, ?, ?)'; const { db } = require('../../config/db');

	return new Promise((resolve, reject) => {
		db.query(query, [username, password, email], (err, results) => {
			if (err) {
				return reject(err);
			};
			resolve(results.insertId);
		});
	});
};

const getAllUsers = () => {
	const query = 'SELECT * FROM users';

	return new Promise((resolve, reject) => {
		db.query(query, [], (err, results) => {
			if (err) {
				return reject(err);
			}
			resolve(results);
		});
	});
};

const updateUser = async (id, username, password, email) => {
	let query = 'UPDATE users SET ';
	const params = [];
	const fieldsToUpdate = [];

	if (username) {
    fieldsToUpdate.push('username = ?');
    params.push(username);
  }

	if (password) {
    fieldsToUpdate.push('password = ?');
    params.push(password);
  }

	if (email) {
    fieldsToUpdate.push('email = ?');
    params.push(email);
  }

	if (fieldsToUpdate.length === 0) {
    return Promise.reject(new Error('Nenhum campo para atualizar.'));
  }

	query += fieldsToUpdate.join(', ') + ' WHERE id = ?';
  params.push(id);

	return new Promise((resolve, reject) => {
		db.query(query, params, (err, results) => {
			if (err) {
				return reject(err);
			};
			resolve({ message: "Usuário atualizado com sucesso"});
		});
	});
};

module.exports = {
	createUser,
	getAllUsers,
	updateUser,
}