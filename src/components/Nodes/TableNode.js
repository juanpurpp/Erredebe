import { useCallback, useRef, useState } from 'react';
import { Handle, NodeResizeControl, NodeResizer, Position } from '@xyflow/react';
import useTableData from '@/hooks/useTableData';
import Select from 'react-tailwindcss-select';
import SelectInput from '../SelectInput';

const handleStyle = { left: 10 };

const availableOptions = [
  {label: 'id', value: 'id'},
  {label: 'uuid', value: 'uuid'},
  {label: 'string', value: 'string'},
  {label: 'number', value: 'number'},
  {label: 'boolean', value: 'boolean'},
  {label: 'date', value: 'date'},
  {label: 'timestamp', value: 'timestamp'},
  {label: 'json', value: 'json'},
  {label: 'array', value: 'array'},

]

function TableNode({ data, isConnectable, selected }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);
  const [width, setWidth] = useState(15)
  const col_1_ref = useRef(null)
  const handleDrag = (event) => {
    console.log(event)
  }
  const containerRef = useRef(null);
  const {tableData, setColumnData, maxLength} = useTableData()

  return (
    <div ref={containerRef} className="rounded-md bg-slate-50  border border-slate-200 w-full h-full min-w-fit min-h-fit overflow-hidden z-0">
      <NodeResizeControl
        color="#ff0071"
        isVisible={selected}
        minHeight={containerRef.current?.offsetHeight}
        maxHeight={containerRef.current?.offsetHeight}
        minWidth={containerRef.current?.offsetWidth} 
      >
        <ResizeIcon />
      </NodeResizeControl>
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
      />
      <div  className='bg-slate-50 p-1 flex flex-col justify-center items-center mr-6'>
        
        <h3 className='text-lg text-slate-700 my-1 '>{data.name}</h3>
        <table className='table-auto w-full '>
          <thead className='text-slate-500 '>
            <tr className='my-1'>
              <th style={{width: (maxLength)+'ch'}} className='min-w-32 text-xs font-light'>Column name</th>
              <th className='w-fit text-xs font-light'>Type</th>
            </tr>
            
          </thead>
          <tbody className='text-xs'>
            {
              tableData.map((data, index) => (
                <tr key={index} className='text-xs text-slate-700'>
                  <td>
                    <input
                      placeholder='Column name'
                      ref={col_1_ref}
                      onChange={(e) => setColumnData(index, {columnName: e.target.value, type: data.type})}
                      value={data.columnName}
                      className='bg-slate-50 rounded-lg border border-slate-200 w-full px-1 py-0.5 font-light focus:border-indigo-400 outline-none'
                    />
                  </td>
                  <td>
                    <SelectInput
                      options={availableOptions}
                    />
                  </td>
                </tr>
              ))
            }
            
          </tbody>
        </table>
   
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
function ResizeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="#010122"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ position: 'absolute', right: 2, bottom: 2}}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <polyline points="16 20 20 20 20 16" />
      <line x1="14" y1="14" x2="20" y2="20" />
      <polyline points="8 4 4 4 4 8" />
      <line x1="4" y1="4" x2="10" y2="10" />
    </svg>
  );
}
export default TableNode;
