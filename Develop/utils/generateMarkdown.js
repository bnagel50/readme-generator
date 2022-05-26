// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  return `
  # Title:
  ${data.title}
  
  ## Description:
  ${data.description}

  ### This application is covered under the license: 
  ${data.license}

  ### Table of Contents: 
  [Description](#description)
  [Installation](#installlation-instructions) 
  [Usage](#usage-information)
  [Contributing](#contributing)
  [Tests](#tests)
  [Questions](#questions)


  ### Installation Instructions: 
  ${data.installation}

  ### Usage Information: 
  ${data.usage}

  

  ### Contributing: 
  ${data.contributing}

  ### Tests: 
  ${data.tests}

  ### Questions: 
  ${data.questions}
  ### Reach me at ${data.email} with any questions
  ### Check out the rest of my repos at ${data.github}`
};

module.exports = generateMarkdown;
