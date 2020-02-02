import React from 'react';

const Editor = () => {
  return (
    <div
      style={{
        width: 'calc(100vw - 15rem)',
        height: 'calc(100vh - 4rem)',
        padding: '2rem',
        outline: '0'
      }}
      spellCheck={false}
      dangerouslySetInnerHTML={{ __html: '<b>bold <i>italic</i> <u>words</u></b>' }}
      contentEditable
    ></div>
  )
}

export default Editor;