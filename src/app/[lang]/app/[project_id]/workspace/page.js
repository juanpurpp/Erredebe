"use client"
import Board from "@/components/Board";
import getTexts from "./texts";
import Tools from "@/components/Tools";

import '@xyflow/react/dist/style.css';
import useFlow from "@/hooks/useFlow";
import TableNode from "@/components/Nodes/TableNode";
import RelationEdge from "@/components/Edges/RelationEdge";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useCallback, useEffect, useState } from "react";
import { getProject, projectChangeName, saveProject } from "@/queries/projects";
import LoadingMessage from "@/components/LoadingMessage";
import { BsFileEarmarkLock2 } from 'react-icons/bs'
import { HiEye, HiMiniPencilSquare, HiOutlinePencilSquare } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import ProjectTitle from "@/components/ProjectTitle";

export default function Page({ params }) {
  const langSet = getTexts(params.lang)
  const { loading_project, forbidden_message } = langSet
  const initialNodes = [];
  const getProjectQuery = useQuery({
    queryFn: ({ signal }) => getProject({ projectId: params.project_id, signal }),
    queryKey: ['project'],
  })

  const projectMutation = useMutation({
    mutationFn: saveProject,
    unSuccess: () => console.log('Saved'),
    onError: (e) => { },
  })
  const mutate = projectMutation.mutate
  const projectMutationMutate = useCallback(
    ({ nodes, edges }) => (!getProjectQuery.isPending) && mutate({ structure: { nodes, edges }, projectId: params.project_id })
    , [params.project_id, getProjectQuery.isPending, mutate])

  const projectChangeNameMutation = useMutation({
    mutationFn: projectChangeName,
    onSuccess: () => getProjectQuery.refetch(),
    onError: (e) => { },
  })
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
      initialTables: initialNodes,
      onStructureChange: projectMutationMutate,
      isOnStructureChangeEnable: !projectMutation.isPending && !getProjectQuery.isPending
    }
  )

  const edgeTypes = {
    relation: RelationEdge
  };
  const nodeTypes = {
    table: TableNode
  };

  useEffect(() => {
    if (getProjectQuery.data?.data) {
      const { nodes, edges } = getProjectQuery.data.data.structure
      setNodes(nodes)
      setEdges(edges)

    }
  }, [getProjectQuery.status, setNodes, setEdges, getProjectQuery.data?.data])
  if (getProjectQuery.error?.response?.status) {
    return (
      <div className="w-screen max-w-screen h-full flex flex-row items-center justify-center space-x-2 text-slate-800">
        <BsFileEarmarkLock2 className="w-24 h-24" />
        <h1 className="text-3xl font-medium">{forbidden_message}</h1>
      </div>
    )
  }
  if (getProjectQuery.isLoading) {
    return <LoadingMessage>{loading_project}</LoadingMessage>
  }
  //console.log('pending mt', projectChangeNameMutation.isPending)
  return (
    <div className="w-screen max-screen h-full flex flex-row justify-start ">
      <div className="w-10 bg-slate-100 border border-slate-200 flex flex-col justify-start items-center -space-y-1 py-2 0">
        <button className="flex flex-col justify-start items-center -space-y-1 hover:bg-slate-300 rounded-md p-1">
          <HiEye className="w-4 h-4 text-slate-500 " />
          <IoIosArrowDown className="w-5 h-5 text-slate-500" />
        </button>
        
      </div>
      <div className="w-full max-w-screen h-full flex flex-col ">
        <div className="border border-slate-200 border-t-slate-100 px-4 py-1.5 overflow-visible">
          <ProjectTitle
            title={getProjectQuery.data?.data?.name}
            onSaveTitle={(newName) => projectChangeNameMutation.mutate({ name: newName, projectId: params.project_id })}
            isLoading={projectChangeNameMutation.isPending}

          />
        </div>
        <div className="px-8">
          <Tools
            langSet={langSet}
            onCreateNewTable={createNewTable}
            isSaving={projectMutation.isPending}
            wasSavedCorrectly={projectMutation.isSuccess}
          />
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
    </div>

  );
}