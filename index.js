const fileManager = require('./fileManager');
const readline = require('readline-sync')
const path = require('path');
const { constants } = require('buffer');

async function main() {
    const baseDir = path.join(__dirname, 'my_files');

    fileManager.createDirectory(baseDir)

    while(true) {

        console.log('1 - Criar Arquivo');
        console.log('2 - Listar Arquivos');
        console.log('3 - Ler Arquivo');
        console.log('4 - Escrever Arquivo!');
        console.log('5 - Deletar Arquivo');
        console.log('S - Sair');

        const choice = readline.question('O que deseja fazer? ');

        try {
            switch(choice.toLocaleUpperCase()) {

                case '1':
                    const fileName = readline.question('Nome do arquivo: ');
                    const fileContent = readline.question('Digite o conteúdo do novo arquivo (ou deixe em branco) ');
                    
                    const createFilePath = path.join(baseDir, fileName);
                    const fileMessage = await fileManager.createdFile(createFilePath, fileContent);
                    console.log(fileMessage);
                    break;
    
                case '2': 
                    const files = await fileManager.listFiles(baseDir);
                    console.log('Lista de arquivos: ', files);
                    break;  
    
                case '3':
                    const readFileName = readline.question('Nome do arquivo com extensão: ');
                    const readFilePath = path.join(baseDir, readFileName);
                    const content = await fileManager.readFile(readFilePath);
                    console.log("Conteúdo: ", content);
                    break;
            
                case '4':
                    const writeFileName = readline.question('Digite o nome do arquivo: ');
                    const writeFilePath = path.join(baseDir, writeFileName);
                    const newContent = readline.question('Digite o conteúdo a ser escrito: ');

                    await fileManager.writeFile(writeFilePath, newContent);
                    console.log('Arquivo escrito com sucesso!')
                    break;
    
                case '5':
                    const deleteFileName = readline.question('Informe o nome do arquivo: ');
                    const deleteFilePath = path.join(baseDir, deleteFileName);
                    const deleteFileMessage = await fileManager.deleteFile(deleteFilePath);
                    console.log(deleteFileMessage);
                    break;
            
                case 'S':
                    return;
    
                default:
                    console.log('Opção inválida!');
                    break;
            };
        } catch (err) {
            console.log(err)
        }; 
    };
};

main();