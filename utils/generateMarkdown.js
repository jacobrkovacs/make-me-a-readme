// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  console.log(data)
  if(data[8].license[0] === 'MIT'){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if(data[8].license[0] === 'Apache'){
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else{
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if(data[8].license[0] === 'MIT'){
    return "https://opensource.org/licenses/MIT"
  } else if(data[8].license[0] === 'Apache'){
    return "https://opensource.org/licenses/Apache-2.0"
  } else{
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if(data[8].license[0] === 'Unlicensed') {
    return ""
  } else {
    return "## License"
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const generateMarkdown = `
# ${data[0].title} ${renderLicenseBadge(data)}\n
## Description
${data[1].description}\n
## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Credits](#credits)
  - [Questions](#questions)
  - [License](#license)\n
## Installation
${data[2].installation}\n
## Usage
${data[3].usage}\n
## Contribution
${data[4].contribute}\n
## Credits
${data[5].credit}\n
## Questions
If you have any questions, feel free to reach out at ${data[7].email} or on my GitHub account at https://github.com/${data[6].github}\n
${renderLicenseSection(data)}
${renderLicenseLink(data)}
`;
return generateMarkdown;
}

module.exports = 
generateMarkdown
