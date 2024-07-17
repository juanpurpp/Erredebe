import { useCallback } from 'react';
import { Handle, Position } from '@xyflow/react';

const handleStyle = { left: 10 };

function TableNode({ data, isConnectable }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="rounded-md bg-gray-200 overflow-hidden border border-slate-200 ">
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
      />
      <div className='bg-slate-50  p-1 flex flex-col justify-center items-center '>
        <h3 className='text-sm text-slate-700 my-1'>Table name</h3>
        <div className='no-drag'>
          <div className='flex flex-row justify-start items-center text-xs p-1 space-x-1 border border-slate-200'>
            <textarea id="column" placeholder='Column name' name="column" onChange={onChange} className="bg-slate-50 resize-x" />
            <textarea id="column" placeholder='Column name' name="column" onChange={onChange} className="bg-slate-50 resize-x w-min" />
          </div>
        </div>
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        style={{left:50}}
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="b"
        isConnectable={isConnectable}
      />
    </div>
  );
}

export default TableNode;
