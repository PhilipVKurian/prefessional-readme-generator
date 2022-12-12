// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    const licenseChoice = `${data.license}`;
    let licenseLink = '';

    switch(licenseChoice){
        case'Apache License 2.0':
            licenseLink = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
            break;
        case'GNU general Public License v 3.0':
            licenseLink = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
            break;
        case 'MIT license':
            licenseLink = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
            break;
        case 'Boost Software License 1.0':
            licenseLink = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
            break;
        case 'GNU AGPLv3':
            licenseLink = '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
            break;
        case 'BSD 3-Clause License':
            licenseLink = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
            break;
    }

    let readMeTemplate =        
`${licenseLink}

#${data.title}

## Description

${data.description}
`;
    let tableOfContents =`## Table Of Contents`;
    if(data.install){
        tableOfContents += `
->[Installation](#Installation)  `;
    }

    tableOfContents +=`
->[Usage](#Usage)  
->[Contribute](#Contribute)  
->[Testing](#Testing)  
->[License](#License)  
->[Contact](#Contact)  
`;
    readMeTemplate += tableOfContents;

    if(data.install){
        readMeTemplate +=`
## Installation  

`;
        readMeTemplate +=`${data.instructions}`;

    };
    readMeTemplate +=`
  
## Usage

${data.usage}

## Contribute

${data.contributing}
    
## Testing

${data.testing}

## License

the project is covered by:  ${data.license}
    
    
## Contact   

GitHub: https://github.com/${data.username}
    
Email: ${data.email}


`

  return readMeTemplate;

}

module.exports = generateMarkdown;
