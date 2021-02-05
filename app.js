const inquirer = require('inquirer');

const promptUser = () => {
    return inquirer.prompt([
      {
          type: 'input',
          name: 'name',
          message: 'What is your name (Required)',
          validate: nameInput => {
              if (nameInput) {
                  return true
              } else {
                  console.log('Please enter your name!');
                  return false;
              }
          }
      },
      {
          type: 'input',
          name: 'github',
          message: 'Enter your GitHub Username (Required)',
          validate: userNameInput => {
              if (userNameInput) {
                  return true
              } else {
                  console.log('Please enter your github username!')
              }
          }
      },
      {
          type: 'input',
          name: 'about',
          message: 'Provide some information about yourself:'
      }
    ])
}

const promptProject = portfolioData => {
    //if there's no 'projects' array property, create one
    if (!portfolioData.projects) {
        portfolioData.projects = [];
    }
    console.log(`
    ==============================
    Add a New Project
    ==============================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project? (Required)',
            validate: projectNameInput => {
                if (projectNameInput) {
                    return true
                } else {
                    console.log ('Please enter a valid project name!')
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: projectDescriptionInput => {
                if(projectDescriptionInput) {
                    return true
                } else {
                    console.log ('Please enter a valid project description!')
                }
            }
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices:['Javascript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project. (Required)',
            validate: linkInput => {
                if(linkInput) {
                    return true
                } else {
                    console.log ('Please enter a link to your project!')
                }
            }
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
        }
    ])
    .then(projectData => {
        portfolioData.projects.push(projectData);
        if (projectData.confirmAddProject) {
            return promptProject(portfolioData);
        } else {
            return portfolioData;
        }
    })

};

promptUser()
    .then(promptProject)
    .then(portfolioData => {
        console.log(portfolioData);
    });
// const fs = require('fs');
// const generatePage = require('./src/page-template.js')

// const pageHTML= generatePage(name, github);


// fs.writeFile('./index.html', pageHTML, err => {
//     if (err) throw err;

//     console.log('Portfolio complete! Check out index.html to see the output!');
// });


// const printProfileData = profileDataArr => {
//     for (let i = 0; i< profileDataArr.length; i++) {
//         console.log(profileDataArr[i]);
//     }   
//     profileDataArr.forEach((profileItem) => {console.log(profileItem)});
// }


// printProfileData(profileDataArgs);
// var three = 'three: declared outside the block';

// if(true===true) {
//     three = 'three: changed inside the block';
//     console.log(three);
// }

// console.log(three);

// let four = 'four: outside the block';

// if(true===true) {
//     four = 'four: inside the block';
//     console.log(four);
// }

// console.log(four);
