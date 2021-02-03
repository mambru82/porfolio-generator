const fs = require('fs');
const generatePage = require('./src/page-template.js')

const profileDataArgs = process.argv.slice(2);

const [name, github]= profileDataArgs;


fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw err;

    console.log('Portfolio complete! Check out index.html to see the output!');
});
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
