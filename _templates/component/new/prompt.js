module.exports = [
  {
    type: 'input',
    name: 'name',
    message: "What's the name of the component?",
  },
  {
    type: 'input',
    name: 'tag',
    initial: 'div',
    message: 'Which HTML tag would you like to use?',
  },
  {
    type: 'input',
    name: 'parent',
    message: "What is the component's parent? (Leave empty if not applicable)",
  },
  {
    type: 'confirm',
    name: 'story',
    message: 'Do you want to add a story to it?',
  },
]
