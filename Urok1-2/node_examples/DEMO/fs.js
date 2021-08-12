const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//     if(err) throw `Не удалось создать файл ${err}`; // создать исключение (ошибку)
// });
const filePath = path.join(__dirname, 'test', 'text.txt');
/*fs.writeFile(filePath, 'Hello Node', (err) => {
    if(err) throw `Не удалось создать файл ${err}`;
    console.log('Файл создан')
});*/
fs.appendFile(filePath, '\nHello again', (err) => {
    if (err) throw `Не удалось создать файл ${err}`;
    console.log('Файл создан')
});
fs.readFile(filePath, 'utf-8', (err, content)=> {
    if (err) throw `Не удалось прочитать файл ${err}`;
    console.log(content);
});
