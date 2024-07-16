import Folder from "@/components/Folder";
import getTexts from "./texts";
import Link from "next/link";
export default function Page({params}) {
  const folders = ['My workspace', 'Shared with me', 'Starred', 'Trash'];
  const {folders_text, h1} = getTexts(params.lang);
  const currentFolder = 'my workspace';
  const projects = [
    {id: 1, title: 'Project Dashboard', description: 'A comprehensive overview of your project\'s current status.'},
    {id: 2, title: 'User Analytics', description: 'Insights into user behavior and engagement metrics.'},
    {id: 3, title: 'Feature Roadmap', description: 'Planned features and enhancements with timelines.'},
    {id: 4, title: 'Issue Tracker', description: 'A tool for tracking bugs, feedback, and feature requests.'},
    {id: 5, title: 'Team Collaboration', description: 'Tools and platforms for effective team communication.'}
  ];
  return (
    <div className="w-screen max-w-screen h-full flex flex-col sm:flex-row">
      <div className="flex flex-row flex-nowrap items-center sm:flex-col border-r border-slate-200 bg-slate-100 w-full h-24 sm:min-w-64 sm:w-1/6 sm:h-full px-4 py-6 space-x-3 sm:space-x-0 sm:space-y-3 overflow-x-auto sm:overflow-y-auto ">
        <h2 className="sm:w-full h-10 text-slate-700 font-medium p-2 ">{folders_text}</h2>
        {
          folders.map((folder, index) => (
            <div className="w-40 shrink-0 sm:w-full" key={index}>
              <Folder isActive={index==1} folder={folder} />
            </div>
          ))
        }
      </div>
      <div className="flex w-full py-6 h-full flex-col justify-evenly items-center overflow-hidden ">
        <h1 className="font-medium text-xl text-blue-950">{h1 + ' '}<span className="text-blue-800">{currentFolder}</span></h1>
        <div className="flex flex-col sm:flex-row w-full items-center overflow-x-auto">
          {
            projects.map((project, index) => (
              <Link className="flex flex-col justify-end  shrink-0 max-w-96 w-full h-64 border border-slate-200 bg-slate-100 m-4 rounded-lg p-1" key={index} href={`/${params.lang}/app/${project.id}/workspace`} >
                <p className="text-lg text-slate-700 font-medium p-0.5">{project.title}</p>
                <p className="text-sm font-light p-0.5">{project.description}</p>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  );
}