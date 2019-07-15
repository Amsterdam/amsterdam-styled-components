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
    message:
      "Does the component have an existing parent? If so, what's its name? (Leave empty if not applicable)",
  },
  {
    type: 'confirm',
    name: 'story',
    message: 'Do you want to add a story to it?',
  },
  {
    type: 'confirm',
    name: 'composed',
    message: 'Is this a composed component?',
  },
]
