// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
  
  ## Description

  ${data.description}


  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  * [Contributing](#contributing)

  * [Issues](#Issue)

  * [Questions](#questions)


  ## Installation

  To install ${data.installation}

  ## Usage

  ${data.usage}

  ## Contributing

  Contribution can be made by ${data.contribution}

  ## Issues
  
  Issues can be reported by ${data.report}

  ## Questions

  For any comments, questions, or concerns, please contact me directly at ${data.email}.
  You can find my work here --> [${data.username}](https://github.com/${data.github}).
  
  `;
  }
  
  module.exports = generateMarkdown;
  