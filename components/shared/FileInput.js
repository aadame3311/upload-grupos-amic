import React from 'react';
import PaperIcon from './icons/PaperIcon';

export default function FileInput(props) {
  const { onChange, name, inputFileName = '' } = props;
  return (
    <div className="mb-4 mt-4">
      <div className="file-input flex flex-row justify-between md:overflow-y-scroll">
        <label
          htmlFor={name}
          className="cursor-pointer w-full flex flex-row file-label"
        >
          <div className="w-full flex flex-row items-center p-2">
            {inputFileName}
          </div>
          <div className="p-2 bg-gray-300 flex flex-row items-center">
            <PaperIcon className="font-light text-sm" />
            <div className="font-light text-sm">Navegar...</div>
          </div>
        </label>
        <input id={name} name={name} type="file" onChange={onChange} />
      </div>
    </div>
  );
}

