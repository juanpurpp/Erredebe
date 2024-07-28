import { BaseEdge, getSmoothStepPath, useEdges, useNodes, useReactFlow } from '@xyflow/react';
import { useEffect, useState } from 'react';

export default function RelationEdge({ id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, markerStart, markerEnd }) {
  const edges = useEdges();

  const [edgePath] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition
  });
  return (
    <>
      <BaseEdge id={id} path={edgePath} markerEnd={markerEnd} markerStart={markerStart} />
    </>
  );
}
