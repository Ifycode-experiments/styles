import fs from 'fs';
import { extname } from 'path';

 //change dir from root to dist/modules
 process.chdir('./dist/modules');
 const distModulesDir = process.cwd();

 //return all files in the dist/modules
 const distModulesFiles = fs.readdirSync(distModulesDir, (err, files) => {
    if (err) {
      throw err;
    }

    return files;
});

//filter .js extension files
const filterFiles = distModulesFiles.filter(file => {
  return extname(file) === '.js';
});

//delete .js extension files
try {
  filterFiles.map(file => {
    return fs.unlinkSync(file)
  });
} catch (err) {
  console.log(err);
}