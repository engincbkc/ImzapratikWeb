import React, { useEffect, useState } from 'react';
import { EditorState, ContentState } from 'draft-js';
import mammoth from "mammoth";
import dynamic from 'next/dynamic';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const Editor = dynamic(
    () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
    { ssr: false }
  );


function DocContent({file}) {

    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [error, setError] = useState(null);
 
    console.log("file content",file);

    const readDocumentFile = async() => {
        console.log()
       
        const reader = new FileReader();
        reader.onload = async (event) => {
          const fileContent = event.target.result;
          const result = await mammoth.extractRawText({ arrayBuffer: fileContent });
          console.log(result);
          setEditorState(EditorState.createWithContent(ContentState.createFromText(result.value)));
        };

        reader.onerror = (error) => {
          console.error('Dosya okuma hatası:', error);
          error = 'Dosya okuma hatası:'+ error
          setEditorState(EditorState.createWithContent(ContentState.createFromText(error)));
          setError(error);
        };

        reader.readAsArrayBuffer(file);
    }


    useEffect(() => { 
        readDocumentFile();

    },[file])



    const onEditorStateChange = (newEditorState) => {
        setEditorState(newEditorState);
      };
    return (
        <div>
            {/* TODO: Her Viewer'ın kendine ait popup'ı olmalı. PDF için üst kısma custom toolbar gelebilir. -Engin Ç */}
            <div style={{ backgroundColor: '#fefefe', borderRadius: '8px', padding: '20px', maxHeight: '500px', overflowY: 'auto' }}>
                <Editor
                   editorState={editorState}
                   wrapperClassName="wrapper-class"
                   editorClassName="editor-class"
                   toolbarClassName="toolbar-class"
                   onEditorStateChange={onEditorStateChange}
                   editorStyle={{ 
                      backgroundColor: '#fefefe', 
                      color: '#000000', 
                      border: '1px solid #ddd', 
                      borderRadius: '4px', 
                      padding: '10px', 
                      minHeight: '200px' 
                    }}
                />
               </div>
        </div>
    );
}

export default DocContent;