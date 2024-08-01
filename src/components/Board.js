import {
  ReactFlow,
  Controls,
  Background,
} from '@xyflow/react'

function Flow({ nodes, onNodesChange, edges, onEdgesChange, onConnect, nodeTypes, edgeTypes, onConnectStart, onConnectEnd }) {

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
        {oneHorizontal}
        {oneVertical}
        {nLeftRight}
        {nTopBottom}
        {nRightLeft}
        {nBottomTop}
        {oneVerticalFromDown}
        {oneHorizontalFromRight}
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
        refX={20}
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
        refX={0}
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
const oneHorizontal = (
  <svg
    style={{ position: 'absolute', top: 0, left: 0, }}
  >
    <defs>
      <marker
        id="one-horizontal"
        viewBox="0 0 20 20"
        markerHeight={12}
        markerWidth={12}
        refX={20}
        refY={10}

      >
        <g transform="rotate(0 10 10)" fill="none" stroke="#334155" strokeWidth={2}>
          <path
            transform="translate(10 10)"
            fill="none"
            stroke="#334155"
            strokeWidth={2}
            d="M0 -10L0 10"
          />
        </g>
      </marker>
    </defs>

  </svg>
)
const oneVertical = (
  <svg
    style={{ position: 'absolute', top: 0, left: 0, }}
  >
    <defs>
      <marker
        id="one-vertical"
        viewBox="0 0 20 20"
        markerHeight={15}
        markerWidth={15}
        refX={10}
        refY={20}

      >
        <g transform="rotate(90 10 10)" fill="none" stroke="#334155" strokeWidth={2}>
          <path
            transform="translate(10 10)"
            fill="none"
            stroke="#334155"
            strokeWidth={2}
            d="M0 -10L0 10"
          />
        </g>
      </marker>
    </defs>

  </svg>
)

const oneVerticalFromDown = (
  <svg
    style={{ position: 'absolute', top: 0, left: 0, }}
  >
    <defs>
      <marker
        id="one-vertical-from-down"
        viewBox="0 0 20 20"
        markerHeight={15}
        markerWidth={15}
        refX={10}
        refY={0}

      >
        <g transform="rotate(90 10 10)" fill="none" stroke="#334155" strokeWidth={2}>
          <path
            transform="translate(10 10)"
            fill="none"
            stroke="#334155"
            strokeWidth={2}
            d="M0 -10L0 10"
          />
        </g>
      </marker>
    </defs>

  </svg>
)

const oneHorizontalFromRight = (
  <svg
    style={{ position: 'absolute', top: 0, left: 0, }}
  >
    <defs>
      <marker
        id="one-horizontal-from-right"
        viewBox="0 0 20 20"
        markerHeight={12}
        markerWidth={12}
        refX={0}
        refY={10}

      >
        <g transform="rotate(0 10 10)" fill="none" stroke="#334155" strokeWidth={2}>
          <path
            transform="translate(10 10)"
            fill="none"
            stroke="#334155"
            strokeWidth={2}
            d="M0 -10L0 10"
          />
        </g>
      </marker>
    </defs>

  </svg>
)