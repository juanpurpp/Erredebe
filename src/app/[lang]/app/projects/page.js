"use client"
import Folder from "@/components/Folder";
import getTexts from "./texts";
import Link from "next/link";
import { useMutation, useQuery } from "@tanstack/react-query";
import { addFolder, getFolder, getFolders } from "@/queries/folders";
import AddFolder from "@/components/AddFolder";
import Loading from "@/components/Loading";
import { useEffect, useState } from "react";
import { HiDocumentPlus, } from "react-icons/hi2";
import { HiFolder } from "react-icons/hi";
import NewProjectForm from "@/components/NewProjectForm";
import { createNewProject } from "@/queries/projects";
import { useRouter } from "next/navigation";
import LoadingMessage from "@/components/LoadingMessage";

export default function Page({ params }) {
  const router = useRouter();
  const {
    folders_text,
    add_folder,
    add_folder_placeholder,
    create_new_project,
    h1,
    form_project_name,
    form_project_name_placeholder,
    form_project_description,
    form_project_description_placeholder,
    form_start_from,
    form_empty_project,
    form_starter_project,
    form_name_required,
    form_submit_button,
    creating_new_project,
    redirecting_message
  } = getTexts(params.lang);
  const newProjectFormTexts = {
    form_project_name,
    form_project_name_placeholder,
    form_project_description,
    form_project_description_placeholder,
    form_start_from,
    form_empty_project,
    form_starter_project,
    form_name_required,
    form_submit_button
  }
  const [currentFolder, setCurrentFolder] = useState(null);
  const foldersQuery = useQuery({
    queryKey: ['folders'],
    queryFn: getFolders,
  })
  const addFolderMutation = useMutation({
    mutationFn: addFolder,
    onSuccess: () => foldersQuery.refetch(),
  })

  const folderQuery = useQuery({
    queryKey: ['folder', currentFolder],
    enabled: currentFolder !== null,
    queryFn: ({ signal }) => getFolder({ signal: signal, folderId: currentFolder }),

  })
  const [redirecting, setRedirecting] = useState(false)
  const newProjectMutation = useMutation({
    mutationFn: createNewProject,
    onSuccess: (res) => {
      setRedirecting(true)
      router.push(`/${params.lang}/app/${res.data.id}/workspace`)
    },
  })
  const folders = foldersQuery.data?.data
  const projects = folderQuery.data?.data?.projects
  const onAddFolder = (name) => {
    addFolderMutation.mutate({ name })
  }
  useEffect(
    () => {
      currentFolder === null && folders && setCurrentFolder(folders[0].id)
    }
    , [folders?.length, currentFolder, folders]
  )
  const [isCreatingNewProject, setIsCreatingNewProject] = useState(false)
  const onClickFolder = (id) => {
    setCurrentFolder(id)
  }
  const onCreateNewProject = () => {
    setIsCreatingNewProject(true)
  }
  const onSubmitNewProyect = ({ name, description, selected }) => {
    newProjectMutation.mutate({ name, description, template: selected, lang: params.lang, folderId: currentFolder })
  }
  useEffect(() => {
    setIsCreatingNewProject(false)
  }, [currentFolder])
  return (
    <div className="w-screen max-w-screen h-full flex flex-col sm:flex-row">
      {
        newProjectMutation.isPending || redirecting? ( 
          <LoadingMessage>{redirecting ? redirecting_message : creating_new_project}</LoadingMessage>
        ) : (
          <>
            <div className="flex flex-row flex-nowrap items-center sm:flex-col border-r border-slate-200 bg-slate-100 w-full h-24 sm:min-w-64 sm:w-1/6 sm:h-full px-4 py-6 space-x-3 sm:space-x-0 sm:space-y-3 overflow-x-auto sm:overflow-y-auto ">
              <div className="flex flex-row justify-start items-center w-full">
                <HiFolder className="text-slate-600 w-6 h-6" />
                <h2 className="sm:w-full h-10 text-slate-700 font-medium p-2 text-nowrap">{folders_text}</h2>
              </div>
              {
                foldersQuery.isLoading ? (
                  <Loading />
                ) : (
                  folders.map((folder) => (
                    <div className="w-40 shrink-0 sm:w-full" key={folder.id}>
                      <Folder onClick={() => onClickFolder(folder.id)} isActive={currentFolder === folder.id} folder={folder.name} />
                    </div>
                  ))
                    .concat(
                      addFolderMutation.isPending ? (
                        <div className="w-40 shrink-0 sm:w-full flex justify-center items-center" key={'loading'}>
                          <Loading />
                        </div>
                      ) : []
                    )
                    .concat(
                      <div className="w-40 shrink-0 sm:w-full" key={'concated'}>
                        <AddFolder onAddFolder={onAddFolder} placeholder={add_folder_placeholder}> {add_folder}</AddFolder>
                      </div>
                    )

                )
              }

            </div>
            {
              foldersQuery.isLoading || folderQuery.isLoading ? (
                <div className="flex w-full py-6 h-full flex-col justify-evenly items-center overflow-hidden ">
                  <Loading />
                </div>
              ) : (
                isCreatingNewProject ? (
                  <NewProjectForm onBack={()=>setIsCreatingNewProject(false)} title={create_new_project} texts={newProjectFormTexts} onSubmit={onSubmitNewProyect} />
                ) : (
                  <div className="flex w-full py-6 h-full flex-col justify-evenly items-center overflow-hidden ">
                    <h1 className="font-medium text-xl text-blue-950">{h1 + ' '}<span className="text-blue-800">{folderQuery.data?.data?.name}</span></h1>
                    <div className="flex flex-col sm:flex-row w-full items-center overflow-x-auto">
                      {
                        <button onClick={onCreateNewProject} className="flex flex-row justify-center items-center  space-x-2 shrink-0 max-w-96 w-full h-64 border border-slate-200 bg-slate-100 m-4 rounded-lg text-slate-700">
                          <HiDocumentPlus className="w-8 h-8" />
                          <p>{create_new_project}</p>
                        </button>
                      }
                      {
                        projects?.map((project, index) => (
                          <Link className="flex flex-col justify-end shrink-0 max-w-96 w-full h-64 border border-slate-200 bg-slate-100 m-4 rounded-lg p-1" key={index} href={`/${params.lang}/app/${project.id}/workspace`} >
                            <p className="text-lg text-slate-700 font-medium p-0.5">{project.name}</p>
                            <p className="text-sm font-light p-0.5">{project.description}</p>
                          </Link>
                        ))
                      }

                    </div>
                  </div>
                )
              )
            }
          </>
        )
      }

    </div>
  );
}