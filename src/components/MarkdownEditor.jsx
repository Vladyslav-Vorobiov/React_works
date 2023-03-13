import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';

import {useEffect, useRef} from 'react';

function MarkdownEditor(props) {

    const editorEl = useRef(null);

    useEffect(() => {
        const editor = new Editor({
            el: editorEl.current,
            hideModeSwitch: true,
        });

        editor.addHook("change", props.onContentChange);
    }, [props]);

    return <div id="editor" ref={editorEl}></div>;
}

export default MarkdownEditor;