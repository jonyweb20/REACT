const fs = require('fs');
const path = require('path');


    fs.mkdir(path.join(__dirname, 'testDR'), (err) => {
        try {
            if (fs.existsSync('testDR')) {
               console.log('file exists')
            }
        } catch (err) {
            console.error(err)
        }
    });


const filePathDR = path.join(__dirname, 'testDR', 'exampleText.txt');
fs.writeFile(filePathDR, 'Первый текст внесенный посредством Node ', err => {
    if (err) {
        throw err;
    }
    console.log('Текст первый внесен')
})
const filePathDR2 = path.join(__dirname, 'testDR', 'exampleFileText.txt');
fs.writeFile(filePathDR2, 'Второй текст внесенный через Node ', err => {
    if (err) {
        throw err;
    }
    console.log('Текст второй внесен')
})
fs.appendFile(filePathDR, '\nHello n', (err) => {
    if (err) throw `Не удалось внести текст ${err}`;
    console.log('Файл третий внесен')
});


const filePathDR3 = path.join(__dirname, 'testDR', 'exampleAkkFile.txt');
console.log('Файл exampleAkkFile создан')
   fs.readFile(filePathDR2, 'utf8',(err, data) => {
       if (err) throw err;
       console.log('Файл exampleFileText считан')
       fs.writeFile(filePathDR3, `${data}`, err => {
           if (err) throw `Не удалось внести текст ${err}`;
           console.log('Файл exampleFileText внесен в exampleAkkFile')
       })
       fs.readFile(filePathDR, 'utf8',(err, data) => {
           if (err) throw err;
           fs.appendFile(filePathDR3, `\n${data}`, err => {
               if (err) throw `Не удалось внести текст ${err}`;
               console.log('Файл exampleText внесен в exampleAkkFile')
           })
       });
   });


const filePathDR4 = path.join(__dirname, 'testDR', 'exampleEndFile.txt');
console.log('Файл exampleEndFile создан')
fs.readFile(filePathDR3, 'utf8', (err, text) => {
    let arrWord = text.split(' ');
let newArrWord = [...new Set(arrWord)]
    fs.writeFile(filePathDR4, `${newArrWord}`, err => {
        if (err) throw `Не удалось внести текст ${err}`;
        console.log('Данные в exampleEndFile занесены')
    })
} )

/*fs.unlink(filePathDR, err=>{
    if (err) throw `Не удалось удалить файл ${err}`;
    console.log('Файл exampleText удален')
})
fs.unlink(filePathDR2, err=>{
    if (err) throw `Не удалось удалить файл ${err}`;
    console.log('Файл exampleFileText удален')
})
fs.unlink(filePathDR3, err=>{
    if (err) throw `Не удалось удалить файл ${err}`;
    console.log('Файл exampleAkkFile удален')
})*/










/*const datafile =  fs.readFile(filePathDR, 'utf8', (err, data) => {
            if (err) throw err;
return data
        });*/


  /* const filePathDR3 = path.join(__dirname, 'testDR', 'exampleAkkFile.txt');
    fs.writeFile(filePathDR3, `${dataf} ` , err => {
        if (err) throw `Не удалось внести текст ${err}`;
        console.log('Файл создан')
    })*/

/*
const filePath = path.join(__dirname, 'test', 'text.txt');
/!*fs.writeFile(filePath, 'Hello Node', (err) => {
    if(err) throw `Не удалось создать файл ${err}`;
    console.log('Файл создан')
});*!/
fs.appendFile(filePath, '\nHello again', (err) => {
    if (err) throw `Не удалось создать файл ${err}`;
    console.log('Файл создан')
});

fs.readFile(filePath, 'utf-8', (err, content)=> {
    if (err) throw `Не удалось прочитать файл ${err}`;
    console.log(content);
});*/
