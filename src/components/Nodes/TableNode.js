//keep

import { useCallback, useEffect, useRef, useState, } from 'react';
import { Handle, Position, useConnection, useEdges, useReactFlow, useUpdateNodeInternals, } from '@xyflow/react';
import useTableData from '@/hooks/useTableData';
import SelectInput from '@/components/SelectInput';

import { LuRows, LuPlus, LuMinusCircle } from "react-icons/lu";
import { Resizable } from 're-resizable';
const availableOptions = [
  { label: 'id', value: 'id' },
  { label: 'uuid', value: 'uuid' },
  { label: 'string', value: 'string' },
  { label: 'number', value: 'number' },
  { label: 'boolean', value: 'boolean' },
  { label: 'date', value: 'date' },
  { label: 'timestamp', value: 'timestamp' },
  { label: 'json', value: 'json' },
  { label: 'array', value: 'array' },

]

function TableNode({ id, data, isConnectable, positionAbsoluteX, positionAbsoluteY }) {
  const { tableData, setColumnData, addColumn, deleteColumn } = useTableData()
  const {setEdges} = useReactFlow()
  const updateNodeInternals = useUpdateNodeInternals()
  const edges = useEdges()
  
  const edgesToThisNode = edges.filter(edge => edge.target === id)
  const edgesFromThisNode = edges.filter(edge => edge.source === id)
  const takenHandle = (index) => edgesFromThisNode.some(edge=>edge.sourceHandle.endsWith(index))

  const handleNewRow = () => addColumn()
  const handleRemoveRow = (index) => {
    deleteColumn(index)
    let newEdges = edges.filter(edge => edge.sourceHandle !== 'right-' + index && edge.sourceHandle !== 'left-' + index)
    newEdges = newEdges.map((edge) => parseInt(edge.sourceHandle.split('-')[1]) >= index ? {...edge, sourceHandle: edge.sourceHandle.replace(index+1, index)} : edge)
    setEdges(newEdges)
    updateNodeInternals(id)
  }
  const connection = useConnection()
  const colRef = useRef(null)
  const itemsRef = useRef([]);
  const [colWidth, setColWidth] = useState(120)
  const isConnectingFromThis = connection.fromNode?.id != id
  const edgesToThisNodeBottom = edgesToThisNode.filter(edge => edge.targetHandle.startsWith('bottom')).concat(connection.inProgress && isConnectingFromThis ?[{ toPosition: 'bottom' }]:[] )
  const edgesToThisNodeTop = edgesToThisNode.filter(edge => edge.targetHandle.startsWith('top')).concat(connection.inProgress && isConnectingFromThis != id ?[{ toPosition: 'top' }]:[])
  const edgesToThisNodeLeft = edgesToThisNode.filter(edge => edge.targetHandle.startsWith('left')).concat(connection.inProgress && isConnectingFromThis != id ?[{ toPosition: 'left' }]:[])
  const edgesToThisNodeRight = edgesToThisNode.filter(edge => edge.targetHandle.startsWith('right')).concat( connection.inProgress && isConnectingFromThis != id ?[{ toPosition: 'right' }]:[])
  const calculateRelativePosition = useCallback((edgesNumber,index) => (parseInt((1 / (1 + edgesNumber)) * 100) + (parseInt((1 / (1 + edgesNumber)) * 100) * index)) + "%" , [])
  useEffect(() => {
    updateNodeInternals(id)
  }, [edgesToThisNode.length, connection.inProgress, id, updateNodeInternals])

  return (
    <div className="rounded-lg bg-slate-50  border border-slate-200  overflow-hidden z-0">
      <div className='bg-slate-50 p-1 flex flex-col justify-center items-center'>

        <div className='w-full grid grid-cols-3 items-center custom-drag-handle'>
          {/* add new row to table button */}
          <button onClick={handleNewRow} className='w-fit flex flex-row justify-start items-center rounded-md bg-zinc-100 border border-zinc-200 hover:bg-zinc-200 hover:border-indigo-100 active:bg-zinc-300 p-0.5'>
            <LuRows className='text-slate-500' />
            <LuPlus className='text-slate-500' />
          </button>
          <h1 className='e'>{data.name}</h1>
        </div>
        <table className='table-auto w-full '>
          <thead className='text-slate-500 '>
            <tr className='my-1'>
              <th></th>
              <th style={{ width: colRef.current?.offsetWidth }} className='text-xs font-light text-center align-center'>
                <Resizable
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
                  minWidth={120}
                  minHeight={15}
                  maxHeight={15}
                  size={{ width: colWidth }}
                  onResizeStop={(e, direction, ref, d) => {
                    setColWidth(colWidth + d.width)
                  }}
                  className='border-r border-slate-400 h-full'
                >
                  <div ref={colRef} className='w-full  custom-drag-handle'>
                    Column name
                  </div>
                </Resizable>
              </th>


              <th className='w-fit max-w-32 text-xs font-light  custom-drag-handle'>Type</th>
            </tr>

          </thead>
          <tbody className='text-xs custom-drag-handle'>
            {
              tableData.map((data, index) => (
                <tr ref={el => itemsRef.current[index] = el} key={index} className='text-xs text-slate-700'>
                  <td className='content-center'>
                    <Handle
                      type="souce"
                      position={Position.Left}
                      id={'left-' + index}
                      style={
                        { 
                          top: 59 + (index * (itemsRef.current[index]?.offsetHeight ?? 0)),
                          left: -5,
                          opacity: takenHandle(index) ? 0.1 : 1,
                          visibility: connection.inProgress ? 'hidden' : 'visible',
                        }
                      }
                      isConnectableStart={!takenHandle(index)}
                      isConnectableEnd={false}

                    />
                    <Handle
                      type="source"
                      position={Position.Right}
                      id={'right-' + index}
                      style={
                        {
                          top: 59 + (index * (itemsRef.current[index]?.offsetHeight ?? 0)),
                          right: -5,
                          opacity: takenHandle(index) ? 0.1 : 1,
                          visibility: connection.inProgress ? 'hidden' : 'visible',
                        }
                      }
                      isConnectableStart={!takenHandle(index)}
                      isConnectableEnd={false}

                    />
                    <button
                      className='h-full flex justify-center items-center group'
                      onClick={()=>handleRemoveRow(index)}
                    >
                      <LuMinusCircle className='text-slate-300 w-4 h-4 align-middle group-hover:text-red-400 group-active:text-rose-500 '></LuMinusCircle>
                    </button>
                  </td>
                  <td>
                    <input
                      placeholder='Column name'
                      onChange={(e) => setColumnData(index, { columnName: e.target.value, type: data.type })}
                      value={data.columnName}
                      style={{ width: colRef.current?.offsetWidth }}
                      className='bg-slate-50 rounded-lg border border-slate-200 w-full px-1 py-0.5 font-light focus:border-indigo-400 outline-none min-w-0'
                    />
                  </td>
                  <td>
                    <SelectInput
                      options={availableOptions}
                      value={data.type}
                      onValueChange={(value) => setColumnData(index, { columnName: data.columnName, type: value })}
                      placeholder={"Write or select type"}
                    />
                  </td>
                </tr>
              ))
            }

          </tbody>
        </table>

      </div>
      {/* Ghost Handle */}

      <>
          {
            edgesToThisNodeBottom.map((edge, index) => (
              <Handle
                key={index}
                type="target"
                position={Position.Bottom}
                style={{
                  bottom: -10, //distance from node
                  left: calculateRelativePosition(edgesToThisNodeBottom.length, index), //calculates the position of the handle and the distribution
                  width: 10,
                  height: 10,
                  backgroundColor: '#e0e7ff',
                  cursor: 'none',
                  opacity: connection.inProgress ? 1 : 0,
                }}
                className='cursor-none hover:border hover:border-blue-400 '
                id={'bottom-' + index}
                isConnectableEnd={edge.source ? false : true}
                isConnectableStart={false}
                onConnect={() => console.log('connected')}
              />
            ))
          }

          {
            edgesToThisNodeTop.map((edge, index) => (
              <Handle
                key={index}
                type="target"
                position={Position.Top}
                style={{
                  top: -10,
                  left: calculateRelativePosition(edgesToThisNodeTop.length,index),
                  width: 10,
                  height: 10,
                  backgroundColor: '#e0e7ff',
                  cursor: 'none',
                  opacity: connection.inProgress ? 1 : 0,
                }}
                className='cursor-none hover:border hover:border-blue-400 '
                id={'top-' + index}
                isConnectableEnd={edge.source ? false : true}
                isConnectableStart={false}
                onConnect={() => console.log('connected')}
              />
            ))
          }

          {
            edgesToThisNodeLeft.map((edge, index) => (
              <Handle
                key={index}
                type="target"
                position={Position.Left}
                style={{
                  left: -10,
                  top: calculateRelativePosition(edgesToThisNodeLeft.length,index),
                  width: 10,
                  height: 10,
                  backgroundColor: '#e0e7ff',
                  cursor: 'none',
                  opacity: connection.inProgress ? 1 : 0,
                }}
                className='cursor-none hover:border hover:border-blue-400 '
                id={'left-' + index}
                isConnectableEnd={edge.source ? false : true}
                isConnectableStart={false}
                onConnect={() => console.log('connected')}
              />
            ))
          }

          {
            edgesToThisNodeRight.map((edge, index) => (
              <Handle
                key={index}
                type="target"
                position={Position.Right}
                style={{
                  right: -10,
                  top: calculateRelativePosition(edgesToThisNodeRight.length, index),
                  width: 10,
                  height: 10,
                  backgroundColor: '#e0e7ff',
                  cursor: 'none',
                  opacity: connection.inProgress ? 1 : 0,
                }}
                className='cursor-none hover:border hover:border-blue-400 '
                id={'right-' + index}
                isConnectableEnd={edge.source ? false : true}
                isConnectableStart={false}
                onConnect={() => console.log('connected')}
              />
            ))
          }
        </>
    </div>
  );
}
export default TableNode;
