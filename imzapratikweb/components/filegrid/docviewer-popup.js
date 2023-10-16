import React, { useState } from 'react';
import { EditorState, ContentState } from 'draft-js';
import dynamic from 'next/dynamic';
import { ReactGrid} from "@silevis/reactgrid";
import "@silevis/reactgrid/styles.css";

const Editor = dynamic(
  () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
  { ssr: false }
);
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const getPeople = () => [
  { name: "Thomas", surname: "Goldman" }
];

const getColumns = () => [
  { columnId: 'name', width: 200 },
  { columnId: 'surname', width: 200 },
];

const headerRow = {
  rowId: 'header',
  cells: [
    { type: 'header', text: 'Name' },
    { type: 'header', text: 'Surname' },
  ],
};

const getRows = (people) => [
  headerRow,
  ...people.map((person, idx) => ({
    rowId: idx,
    cells: [
      { type: 'text', text: person.name },
      { type: 'text', text: person.surname },
    ],
  })),
];

const ControlledEditor = () => {
  const defaultText = 'Text';
  const contentState = ContentState.createFromText(defaultText);
  const [editorState, setEditorState] = useState(EditorState.createWithContent(contentState));

  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  const people = getPeople();
  const rows = getRows(people);
  const columns = getColumns();

  return (
    <>
      <Editor
        editorState={editorState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
        onEditorStateChange={onEditorStateChange}
      />
     <ReactGrid rows={rows} columns={columns}  />
    </>
  );
};

export default ControlledEditor;
