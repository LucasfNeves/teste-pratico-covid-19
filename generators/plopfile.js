module.exports = (plop) => {
  // create your generators here
  plop.setGenerator('basics', {
    description: 'Create a new component',
    prompts: [
      {
        type: 'input', // tipo de recebimento de dados
        name: 'name', // nome da variável que receberá o dado
        message: 'What is your component name?', // mensagem que será exibida ao usuário
      },
    ], // array of inquirer prompts
    actions: [
      {
        type: 'add',
        path: '../src/components/{{name}}/index.tsx',
        templateFile: 'templates/Component.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{name}}/stories.tsx',
        templateFile: 'templates/stories.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{name}}/test.tsx',
        templateFile: 'templates/test.tsx.hbs',
      },
    ], // array of actions
  })
}
