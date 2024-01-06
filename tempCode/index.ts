import { PDFDocument } from 'pdf-lib'
import { readFileSync,readdirSync,statSync } from 'fs-extra'
import XLSX from 'xlsx';

interface INFO{
    文件: string
    页数: number
}
async function parse(dirName:string){
    const fileList=readdirSync(`${dirName}/`)
    const fileInfoList=<Array<INFO>>[]
    for (const name of fileList) {
        if(!name.endsWith('.pdf'))
            continue
        const tempDir=`${dirName}/`+name
        const existingPdfBytes = readFileSync(tempDir)
        const fileInfo = statSync(tempDir)
        // console.log(fileInfo)
        // console.log(fileInfo.isDirectory())
        // console.log(fileInfo.isFile())
        const pdfDoc = await PDFDocument.load(existingPdfBytes)
        // const viewerPrefs = pdfDoc.catalog.getOrCreateViewerPreferences()
        const page = pdfDoc.getPageCount()
        // console.log('NumCopies:', viewerPrefs.getNumCopies())
        // console.log('getCreationDate:', pdfDoc.getCreationDate())
        // console.log(name,'总页数', pdfDoc.getPageCount())
        const temp={'文件':name,'页数':page}
        fileInfoList.push(temp)
        // console.log('PrintPageRange:', viewerPrefs.getPrintPageRange())
    }
    formExcle(fileInfoList,dirName)
}
function formExcle(data:any,dirList:string){
    let jsonWorkSheet = XLSX.utils.json_to_sheet(data);
    let workBook = {
    SheetNames: ['jsonWorkSheet'],
    Sheets: {
        'jsonWorkSheet': jsonWorkSheet,
    }
    };
    // 将workBook写入文件
    XLSX.writeFile(workBook, `${dirList}/${dirList}_page_list.xlsx`);
}
function parseDir(){
    const dirList=readdirSync(`.`)
    for (const item of dirList) {
        const fileInfo = statSync(item)
        if(fileInfo.isDirectory()){
            const fileDir=item
            parse(fileDir)
        }
    }
}
parseDir()