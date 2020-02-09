import React, { Dispatch, SetStateAction, ChangeEvent } from 'react';

const Editor = ({ setDocInnerHTML }: { setDocInnerHTML: Dispatch<SetStateAction<string>> }) => {
  return (
    <div
      style={{
        width: 'calc(100vw - 15rem)',
        maxHeight: 'calc(100vh - 4rem)',
        overflowY: 'scroll',
        padding: '2rem',
        outline: '0'
      }}
      spellCheck={false}
      onInput={(e: ChangeEvent<HTMLDivElement>) => setDocInnerHTML(e.target.innerHTML)}
      contentEditable
    ></div>
  )
}

export default Editor;