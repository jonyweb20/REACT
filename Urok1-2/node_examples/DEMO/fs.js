const fs = require('fs');
const path = require('path');


    const testDR = fs.mkdir(path.join(__dirname, 'testDR'), (err) => {
        try {
            if (fs.existsSync('testDR')) {
               console.log('file exists')
            }
        } catch (err) {
            console.error(err)
        }
    });


const filePathDR = path.join(__dirname, 'testDR', 'exampleText.txt');
fs.writeFile(filePathDR, 'Первый текст внесенный через Node', err => {
    if (err) {
        throw err;
    }
    console.log('Текст внесен')
})
const filePathDR2 = path.join(__dirname, 'testDR', 'exampleFileText.txt');
fs.writeFile(filePathDR2, 'Второй текст внесенный через Node', err => {
    if (err) {
        throw err;
    }
    console.log('Текст внесен')
})

fs.appendFile(filePathDR, '\nHello n', (err) => {
    if (err) throw `Не удалось внести текст ${err}`;
    console.log('Файл создан')
});

   const data = fs.readFile('exampleFileText.txt', 'utf8', err => {
        if (err) throw err;
    });
    const datafile =  fs.readFile('exampleText.txt', 'utf8', err => {
            if (err) throw err;
        });


    const filePathDR3 = path.join(__dirname, 'testDR', 'exampleAkkFile.txt');
    fs.appendFile(filePathDR3, `${data} + \n${datafile}` , err => {
        if (err) throw `Не удалось внести текст ${err}`;
        console.log('Файл создан')
    })

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
