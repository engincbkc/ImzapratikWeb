import Popup from '@/components/popup/index';
import {useState} from 'react';
import DocContent from './doc-content';
import React from 'react';
import {DocTypes} from '../../shared/doc-types'
import PdfContent from './pdf-content';
import ExcelContent from './excel-content';


function MyDocViewer({file=null}) {
    // convert blob to text 
    console.log(file);

    const _fileDefault = {
        type: file ? file.type : DocTypes.nofile,
        size: file ? file.size : 0,
        content: null,
        btyeContent:[],
        source:file
    }

    const [_file, _setFile] = useState(_fileDefault );
    return (
            <>
                {
                    _fileDefault.type == DocTypes.nofile &&
                    <h1> Dosya Bulunamadı.</h1>
                }
                {
                  DocTypes.docx.includes(_fileDefault.type) && 
                    <DocContent file={file}/>
                }
                {
                     DocTypes.pdf.includes(_fileDefault.type) &&
                     <PdfContent file={file}/>
                }
                {
                    DocTypes.excel.includes(_fileDefault.type) &&
                    <ExcelContent file = {file}/>

                }
            </>
    );
}
export default MyDocViewer;