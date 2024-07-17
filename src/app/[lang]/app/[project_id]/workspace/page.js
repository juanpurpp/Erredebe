"use client"
import Board from "@/components/Board";
import getTexts from "./texts";
import Tools from "@/components/Tools";

import '@xyflow/react/dist/style.css';
import useFlow from "@/hooks/useFlow";
import TableNode from "@/components/Nodes/TableNode";

export default function Page({params}) {
  const {nodes, edges, createNewTable, onConnect, onEdgesChange, onNodesChange} = useFlow()
  const langSet = getTexts(params.lang)

  const nodeTypes = { table: TableNode };


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
      />
    </div>
  );
}