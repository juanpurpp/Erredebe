"use client"
import { useState, useCallback } from 'react';
import {
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
} from '@xyflow/react';

const initialEdges = [];


const useFlow = ({initialTables}) => {
  const [nodes, setNodes] = useState(initialTables);
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
      position: { x: (nodes.length*10 ), y:  (nodes.length*10 ) },
      type: 'table',
      dragHandle: '.custom-drag-handle',
    }))
  }
  return (
    {nodes,edges, createNewTable, onNodesChange, onEdgesChange, onConnect}
  )
}
export default useFlow