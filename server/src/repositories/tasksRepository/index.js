const db = global.db;

const getAllTasks = () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM tasks';
        db.query(query, (err, result) => {
            if(err) {
                reject(err);
            } else {
                resolve(result);
            }
        })
    })
};

const createTask = (title, description) => {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO tasks (title, description) VALUE (?, ?)';
        db.query(query, [title, description], (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        })
    })
}

module.exports = {
    getAllTasks,
    createTask
}