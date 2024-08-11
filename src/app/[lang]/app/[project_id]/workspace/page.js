"use client"
import Board from "@/components/Board";
import getTexts from "./texts";
import Tools from "@/components/Tools";

import '@xyflow/react/dist/style.css';
import useFlow from "@/hooks/useFlow";
import TableNode from "@/components/Nodes/TableNode";
import RelationEdge from "@/components/Edges/RelationEdge";

const defaultInitialTableData = [
  {
    columnName: '',
    type: ''
  },

]

export default function Page({params}) {
  const langSet = getTexts(params.lang)
  const {first_table, second_table} = langSet
  
  const initialNodes = [
    {
      id: '1',
      data: { name: first_table, tableData: defaultInitialTableData },
      position: { x: -300, y: -300 },
      type: 'table',
      dragHandle: '.custom-drag-handle',
    },
    {
      id: '2',
      data: { name: second_table, tableData: defaultInitialTableData },
      position: { x: 300, y: 300 },
      type: 'table',
      dragHandle: '.custom-drag-handle',
    }
    
  ];
  const { 
    nodes,
    edges,
    createNewTable,
    onConnect,
    onEdgesChange,
    onNodesChange,
    onConnectStart,
    onConnectEnd,
    setNodes,
    setEdges
  } = useFlow(
    {
      initialTables:initialNodes
    }
  )

  const edgeTypes = {
    relation: RelationEdge
  };
  const nodeTypes = {
    table: TableNode 
  };

  return (
    <div className="w-screen max-w-screen h-full flex flex-col ">
      <div className="px-8">
        <Tools langSet={langSet} onCreateNewTable={createNewTable}/>
      </div>
      <Board
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        onConnectStart={onConnectStart}
        onConnectEnd={onConnectEnd}
      />
    </div>
  );
}