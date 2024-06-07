import { useState } from 'react'
import './App.css'
import ReactMarkdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';

const defaultText = `
# Heading Level 1

## Heading Level 2

This is a [link to the React website](https://reactjs.org).

Here is some inline code: \`<div></div>\`.

\`\`\`
function greet() {
  console.log("Hello, world!");
}
\`\`\`

- This is a list item.

> This is a blockquote.

![React Logo](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)

**This is bold text.**
`;



function App() {
  const [markdownText, setMarkdownText] = useState<string>(defaultText)

  return (
    <>
    <h1 className='title'>Markdown Previewer</h1>
      <div className='boxes-container'>
        <textarea  id="editor" value={markdownText} onChange={(e) => setMarkdownText(e.target.value)}></textarea >
        <div id="preview">
        <ReactMarkdown remarkPlugins={[remarkBreaks]}>{markdownText}</ReactMarkdown>
        </div>
      </div>
    </>
  )
}

export default App
