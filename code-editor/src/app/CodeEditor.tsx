import React, { useEffect, useRef } from 'react';
import CodeMirror from 'codemirror';
import 'codemirror/mode/python/python';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/clike/clike';
import 'codemirror/mode/go/go';
import 'codemirror/mode/php/php';
import 'codemirror/mode/swift/swift';
import 'codemirror/mode/rust/rust';
import 'codemirror/lib/codemirror.css';

interface CodeEditorProps {
  language: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ language, value, onChange, className }) => {
  const editorRef = useRef<CodeMirror.Editor | null>();

  useEffect(() => {
    if (editorRef.current === null) {
      const editor = CodeMirror(editorRef.current, {
        mode: language,
        theme: 'material',
        lineNumbers: true,
        tabSize: 2,
        indentUnit: 2,
        smartIndent: true,
        value,
      });

      editor.current.on('change', (editor:any) => {
        onChange(editor.getValue());
      });
      editor.current.toTextArea();
    };
  }, [language, value, onChange]);

  return <textarea name="code" id="text" className={className} ref={editorRef}>{value}</textarea>;
};

export default CodeEditor;
