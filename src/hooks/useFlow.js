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
  const [isTryingToConnect, setIsTryingToConnect] = useState(false);
  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [],
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [],
  );
  const onConnect = useCallback(
    (connection) => {
      console.log(connection)
      let markerStart
      let markerEnd
      if(connection.sourceHandle.startsWith('left')) markerStart = 'n-left-right'
      if(connection.sourceHandle.startsWith('top')) markerStart = 'n-top-bottom'
      if(connection.sourceHandle.startsWith('right')) markerStart = 'n-right-left'
      if(connection.sourceHandle.startsWith('bottom')) markerStart = 'n-bottom-top'
      if(connection.targetHandle.startsWith('left')) markerEnd = 'one-horizontal'
      if(connection.targetHandle.startsWith('top')) markerEnd = 'one-vertical'
      if(connection.targetHandle.startsWith('right')) markerEnd = 'one-horizontal-from-right'
      if(connection.targetHandle.startsWith('bottom')) markerEnd = 'one-vertical-from-down'
      const edge = { ...connection, type: 'relation', markerStart: markerStart, markerEnd: markerEnd };
      setEdges((eds) => addEdge(edge, eds));
    },
    [setEdges],
  );
  const onConnectStart = () => {
    setIsTryingToConnect(true);
  };
  const onConnectEnd= () => {
    setIsTryingToConnect(false); 
  }
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
    {nodes,edges, createNewTable, onNodesChange, onEdgesChange, onConnect, onConnectStart, onConnectEnd, isTryingToConnect}
  )
}
export default useFlow