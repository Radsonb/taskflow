const tasksRepository = require('../../repositories/tasksRepository');

const getAllTasks = async (req, res) => {
    try {
        const tasks = await tasksRepository.getAllTasks();
        res.status(200).json(tasks);
    } catch (err) {
        res.status(500).json({ message: "Erro ao buscar tarefas", error: err })
    }
}

const createTask = async (req, res) => {
    const { title, description } = req.body;

    try {
        const result = await this.tasksRepository.createTask(title, description);
        res.status(201).json({ message: 'Tarefa criada com sucesso!', taskId: result.insertId });
    } catch(err) {
        res.status(500).json({ message: 'Erro ao criar tarefa', error: err })
    }
}

module.exports = {
    getAllTasks,
    createTask
}