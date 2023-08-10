function generateMarkdown(data) {
  return `
  # ${data.title}\n\n
  ## ${data.description}\n\n
  ## Table of Contents\n
    - [Installation](#installation)\n
    - [Usage](#usage)\n
    - [Contribution](#contribution)
    - [Credits](#credits)\n
    - [License](#license)\n\n
  ## ${data.installation}\n\n
  ## ${data.usage}\n\n
  ## ${data.credits}\n\n
  ## ${data.license}\n\n

`;
}