const { userRepository } = require('../../repository');

const create = async (req, res) => {
  const { username, password, email } = req.body;

  try {
    const userId = await userRepository.createUser(username, password, email);
    return res.status(201).json({ message: 'Usuário cadastrado com sucesso', userId });
  } catch (err) {
    console.error('Erro ao cadastrar usuário', err);
    res.status(500).json({ message: 'Erro ao cadastrar usuário ' });
  }
}

const list = async (req, res) => {
  try {
    const users = await userRepository.getAllUsers();
    return res.status(200).json(users);
  } catch (err) {
    console.error('Erro ao listar usuários:', err);
    res.status(500).json({ message: 'Erro interno ao listar usuários'});
  }
}

const update = async (req, res) => {
  console.log("log dentro do update");
  
  try{
    const { id } = req.params;
    const { username, password, email } = req.body;

    const result = await userRepository.updateUser(id, username, password, email);
    return res.status(200).json(result);
  } catch (err) {
    console.error('Erro interno ao atualizar usuário', err);
    
    res.status(500).json({ message: 'Erro ao atualizar usuário'})
  }
}

module.exports = {
  create,
  list,
  update
}