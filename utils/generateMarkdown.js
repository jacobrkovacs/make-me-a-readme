// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const generateMarkdown = `
# ${data.title}\n
## Description
${data.description}\n
## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Credits](#credits)
  - [Questions](#questions)
  - [License](#license)\n
## Installation
${data.installation}\n
## Usage
${data.usage}\n
## Credits
${data.credit}\n
## Questions
If you have any questions, feel free to reach out at ${data.email} or on my GitHub account at https://github.com/${data.github}\n
## License
${data.license}\n
`;
return generateMarkdown;
}

module.exports = 
generateMarkdown;
renderLicenseBadge;
renderLicenseLink;
renderLicenseSection
