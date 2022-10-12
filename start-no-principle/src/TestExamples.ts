import fs from 'fs';
import path from 'path'
import FileStore from './FileStore';

var dirtest = "./testfiles";
var dirpath = path.join(__dirname,  dirtest)
if(!fs.existsSync(dirpath)){
  fs.mkdirSync(dirpath)
}

const fileStore = new FileStore(dirtest)
fileStore.save(1, "hello duy")
fileStore.read(1)
console.log(fileStore.checkCache())