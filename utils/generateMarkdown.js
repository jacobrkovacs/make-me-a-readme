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

module.exports = generateMarkdown;
