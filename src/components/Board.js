import {
  ReactFlow,
  Controls,
  Background,
} from '@xyflow/react'

function Flow({ nodes, onNodesChange, edges, onEdgesChange, onConnect, nodeTypes, edgeTypes, onConnectStart, onConnectEnd }) {

  return (
    <div className='w-full h-full'>
      {nLeftRight}
      {nTopBottom}
      {nRightLeft}
      {nBottomTop}
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

const nLeftRight = (
  <svg
    style={{ position: 'absolute', top: 0, left: 0 }}
  >
    <defs>
      <marker
        id="n-left-right"
        viewBox="0 0 20 20"
        markerHeight={10}
        markerWidth={10}
        refX={10}
        refY={10}
      >
        <g transform="rotate(0 10 10)" fill="none" stroke="#334155" strokeWidth={2}>
          <path transform="translate(10 5)" d="M-10 5L10 -5" />
          <path transform="translate(10 10)" d="M-10 0L10 0" />
          <path transform="translate(10 15)" d="M-10 -5L10 5" />
        </g>
      </marker>
    </defs>

  </svg>
)

const nTopBottom = (
  <svg
    style={{ position: 'absolute', top: 0, left: 0, }}
  >
    <defs>
      <marker
        id="n-top-bottom"
        viewBox="0 0 20 20"
        markerHeight={10}
        markerWidth={10}
        refX={10}
        refY={10}

      >
        <g transform="rotate(90 10 10)" fill="none" stroke="#334155" strokeWidth={2}>
          <path transform="translate(10 5)" d="M-10 5L10 -5" />
          <path transform="translate(10 10)" d="M-10 0L10 0" />
          <path transform="translate(10 15)" d="M-10 -5L10 5" />
        </g>
      </marker>
    </defs>

  </svg>
)

const nRightLeft = (
  <svg
    style={{ position: 'absolute', top: 0, left: 0, }}
  >
    <defs>
      <marker
        id="n-right-left"
        viewBox="0 0 20 20"
        markerHeight={10}
        markerWidth={10}
        refX={10}
        refY={10}

      >
        <g transform="rotate(180 10 10)" fill="none" stroke="#334155" strokeWidth={2}>
          <path transform="translate(10 5)" d="M-10 5L10 -5" />
          <path transform="translate(10 10)" d="M-10 0L10 0" />
          <path transform="translate(10 15)" d="M-10 -5L10 5" />
        </g>
      </marker>
    </defs>

  </svg>
)

const nBottomTop = (
  <svg
    style={{ position: 'absolute', top: 0, left: 0, }}
  >
    <defs>
      <marker
        id="n-bottom-top"
        viewBox="0 0 20 20"
        markerHeight={10}
        markerWidth={10}
        refX={10}
        refY={10}

      >
        <g transform="rotate(-90 10 10)" fill="none" stroke="#334155" strokeWidth={2}>
          <path transform="translate(10 5)" d="M-10 5L10 -5" />
          <path transform="translate(10 10)" d="M-10 0L10 0" />
          <path transform="translate(10 15)" d="M-10 -5L10 5" />
        </g>
      </marker>
    </defs>

  </svg>
)