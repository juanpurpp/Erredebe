import {   useRef, } from 'react';
import { Handle,   Position, } from '@xyflow/react';
import useTableData from '@/hooks/useTableData';
import SelectInput from '../SelectInput';

import { useReactFlow } from '@xyflow/react';
import { LuRows, LuPlus, LuMinusCircle} from "react-icons/lu";
import { Resizable } from 're-resizable';
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

function TableNode({ id,data, isConnectable }) {
  const {tableData, setColumnData, addColumn, deleteColumn} = useTableData()
  const {updateNode} = useReactFlow()
  const handleNewRow = () =>{
    addColumn()
  }
  const colRef = useRef(null)
  return (
    <div  className="rounded-md bg-slate-50  border border-slate-200  overflow-hidden z-0">
      <div className='bg-slate-50 p-1 flex flex-col justify-center items-center'>
        
        <div className='w-full grid grid-cols-3 items-center custom-drag-handle'>
          {/* add new row to table button */}
          <button onClick={handleNewRow} className='w-fit flex flex-row justify-start items-center rounded-md bg-zinc-100 border border-zinc-200 hover:bg-zinc-200 hover:border-indigo-100 active:bg-zinc-300 p-0.5'>
            <LuRows className='text-slate-500'/>
            <LuPlus className='text-slate-500'/>
          </button>
          <h1 className='e'>{data.name}</h1>
        </div>
        <table className='table-auto w-full '>
          <thead className='text-slate-500 '>
            <tr className='my-1'>
              <th></th>
              <th style={{width: colRef.current?.offsetWidth}} className='text-xs font-light text-center align-center'>
                <Resizable
                  onResize={()=>updateNode(id)}
                  handleClasses={
                    {
                      left: 'hidden',
                      topLeft: 'hidden',
                      bottomLeft: 'hidden',
                      top: 'hidden',
                      topRight: 'hidden',
                      bottom: 'hidden',
                      bottomRight: 'hidden',
                    }
                  } 
                  minWidth={100}
                  minHeight={15}
                  maxHeight={15}
                  className='border-r border-slate-400 h-full'
                >
                  <div ref={colRef} className='w-full'>
                    Column name
                  </div>
                </Resizable>
              </th>


              <th className='w-fit max-w-32 text-xs font-light'>Type</th>
            </tr>
            
          </thead>
          <tbody className='text-xs custom-drag-handle'>
            {
              tableData.map((data, index) => (
                <tr key={index} className='text-xs text-slate-700'>
                  <td className='content-center'>
                    <button
                      className='h-full flex justify-center items-center group'
                      onClick={ () => deleteColumn(index)}
                    >
                      <LuMinusCircle className='text-slate-300 w-4 h-4 align-middle group-hover:text-red-400 group-active:text-rose-500 '></LuMinusCircle>
                    </button>
                  </td>
                  <td>
                    <input
                      placeholder='Column name'
                      onChange={(e) => setColumnData(index, {columnName: e.target.value, type: data.type})}
                      value={data.columnName}
                      style={{width:colRef.current?.offsetWidth}}
                      className='bg-slate-50 rounded-lg border border-slate-200 w-full px-1 py-0.5 font-light focus:border-indigo-400 outline-none min-w-0'
                    />
                  </td>
                  <td>
                    <SelectInput
                      options={availableOptions}
                      value={data.type}
                      onValueChange={(value) => setColumnData(index, {columnName: data.columnName, type: value})}
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
