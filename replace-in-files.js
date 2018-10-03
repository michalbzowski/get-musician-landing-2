const replaceInFiles = require('replace-in-files');
 
const options = {
  // See more: https://www.npmjs.com/package/globby
  // Single file or glob
  files: __dirname + '/dist/index.html',
   
 
  // See more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
  // Replacement
  from: /{BUILD_TIMESTAMP}/g,  // string or regex
  to:  Date.now().toString(), // string or fn  (fn: carrying last argument - path to replaced file)
 
 
  // See more: https://www.npmjs.com/package/glob
  optionsForFiles: { // default
    "ignore": [
      "**/node_modules/**"
    ]
  }
 
};

console.info('Machcak');
replaceInFiles(options) .then(function(changedFiles)  {
  console.log('Modified files:', changedFiles);
}).catch(error => {
  console.error('Error occurred:', error);
});
console.info('Machcak');