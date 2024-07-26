import {
  ReactFlow,
  Controls,
  Background,
} from '@xyflow/react'

function Flow({ nodes, onNodesChange, edges, onEdgesChange, onConnect, nodeTypes,edgeTypes, onConnectStart, onConnectEnd }) {

  return (
    <div className='w-full h-full'>
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onConnectStart={onConnectStart}
        onConnectEnd={onConnectEnd}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default Flow;