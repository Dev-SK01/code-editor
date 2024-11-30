// components/OutputPanel.tsx
import React from 'react';

interface OutputPanelProps {
  className?: string;
}

const OutputPanel: React.FC<OutputPanelProps> = ({ className }) => {
  return (
    <div className={className}>
      <h3 className="text-lg font-medium mb-2">Output</h3>
      <p>Code Execution Successful</p>
    </div>
  );
};

export default OutputPanel;