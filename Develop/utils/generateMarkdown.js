// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// Credit to https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba for badge links
function renderLicenseBadge(license) {
    switch (license) {
    case 'Apache':
      response = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'Creative Commons':
      response = '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)';
      break;
    case 'MIT':
      response = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'Mozilla':
      response = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
      break;
    default:
      response = '';
      break;
    }
  return response;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'Apache':
      response = 'https://www.apache.org/licenses/LICENSE-2.0';
      break;
    case 'Creative Commons':
      response = 'https://creativecommons.org/publicdomain/zero/1.0/';
      break;
    case 'MIT':
      response = 'https://opensource.org/licenses/MIT';
      break;
    case 'Mozilla':
      response = 'https://www.mozilla.org/en-US/MPL/';
      break;
    default:
      response = '';
      break;
    }
  return response;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    response = ''
  } else {
    response = renderLicenseBadge(license) + '\n' + renderLicenseLink(license)
  }
  console.log(response)
}
renderLicenseSection();
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Title:
  ${data.title}
  
  ## Description:
  ${data.description}

  ### License: 
  ${data.license}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  

  ### Table of Contents: 
  [Description](#description) <br />
  [Installation](#installlation-instructions) <br />
  [Usage](#usage-information) <br />
  [Contributing](#contributing) <br />
  [Tests](#tests) <br />
  [Questions](#questions) <br />


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
