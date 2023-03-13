import React from 'react';
import MarkdownEditor from './components/MarkdownEditor';

function App() {
    const alertInfo = () => console.log('Some changes has happened in editor...');

    return (
        <div className="App">
            <MarkdownEditor onContentChange={alertInfo}/>
        </div>
    );
}

export default App;
