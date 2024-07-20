"use client"
import { useState, useCallback } from 'react';
import {
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
} from '@xyflow/react';
const initialNodes = [
  {
    id: '1',
    data: { name: 'First Table' },
    position: { x: -250, y: -250 },
    type: 'table',
    dragHandle: '.custom-drag-handle',
  },
  {
    id: '2',
    data: { name: 'Table 2' },
    position: { x: 250, y: 250 },
    type: 'table',
    dragHandle: '.custom-drag-handle',
  }
  
];

const initialEdges = [];


const useFlow = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [],
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [],
  );

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [],
  );
  const createNewTable = () => {
    setNodes(nodes.concat({
      id: (nodes.length + 1).toString(),
      data: { name: 'New Table' },
      position: { x: 0, y: 0 },
      type: 'table',
      dragHandle: '.custom-drag-handle',
    }))
  }
  return (
    {nodes,edges, createNewTable, onNodesChange, onEdgesChange, onConnect}
  )
}
export default useFlow