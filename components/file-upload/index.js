import React from 'react';
import FileInput from '../shared/FileInput';

export default function FileUpload() {
  return (
    <>
      <div className="flex flex-col">
        <FileInput
          onChange={() => {}}
          name="File input"
          inputFileName="Input File Name"
        ></FileInput>
      </div>
    </>
  );
}

