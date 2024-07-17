import {
  ReactFlow,
  Controls,
  Background,
} from '@xyflow/react'

function Flow({ nodes, onNodesChange, edges, onEdgesChange, onConnect, nodeTypes }) {

  return (
    <div className='w-full h-full'>
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default Flow;