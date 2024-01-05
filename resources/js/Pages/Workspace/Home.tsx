import {PropsWithChildren, ReactNode, useEffect, useState} from "react";
import {Workspace} from "@/types";

const initialWorkspaces: Workspace[] = [
    {
        id: 1,
        name: "tf-abc",
        status: "applied",
        repo: "workspace-name/tf-abc",
        latestChange: "2 monoths ago"
    },
    {
        id: 2,
        name: "tf-def",
        status: "applied",
        repo: "workspace-name/tf-def",
        latestChange: "4 monoths ago"
    },
    {
        id: 3,
        name: "tf-ghi",
        status: "applied",
        repo: "workspace-name/tf-ghi",
        latestChange: "7 monoths ago"
    },
    {
        id: 4,
        name: "tf-flo",
        status: "applied",
        repo: "workspace-name/tf-flo",
        latestChange: "9 monoths ago"
    },
]

const emptyWorkspace: Workspace[] = []

export default function WorkspaceHome({ children }: PropsWithChildren) {
    const [workspaces, setWorkspaces] = useState<Workspace[]>([]);

    useEffect(() => {
        async function fetchWorkspaces() {
            const spaces = initialWorkspaces;
            setWorkspaces(spaces);
        }

        fetchWorkspaces();
    }, []);

    return (
      <>
          <p className="mb-5 text-sm">
              <span className="text-gray-500 mr-1">
                  workspace-name /
              </span>
              workspaces
          </p>
          <div className="grid grid-cols-6 mb-20">
              <h1 className="col-span-5 text-3xl font-bold">Workspaces</h1>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  + New Workspace
              </button>
          </div>
          { workspaces.length === 0 && <div className="text-center">
              <h2 className="mb-10">Placeholder for subtitle of empty workspace</h2>
              <p>Placeholder for description of workspace</p>
          </div>
          }
          { workspaces.length > 0 && <div>
              <div className="flex flex-col">
                  <div className="-m-1.5 overflow-x-auto">
                      <div className="p-1.5 min-w-full inline-block align-middle">
                          <div className="border rounded-lg overflow-hidden">
                              <table className="min-w-full divide-y divide-gray-200">
                                  <thead className="bg-gray-700">
                                  <tr>
                                      <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-400 uppercase">Workspace Name</th>
                                      <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-400 uppercase">Run Status</th>
                                      <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-400 uppercase">Repo</th>
                                      <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-400 uppercase">Latest Change</th>
                                  </tr>
                                  </thead>
                                  <tbody className="divide-y divide-gray-200">
                                  {workspaces.map((workspace): ReactNode => {
                                      return <tr key={workspace.id}>
                                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{workspace.name}</td>
                                          <td className="px-6 py-4 whitespace-nowrap text-sm">{workspace.status}</td>
                                          <td className="px-6 py-4 whitespace-nowrap text-sm">{workspace.repo}</td>
                                          <td className="px-6 py-4 whitespace-nowrap text-sm">{workspace.latestChange}</td>
                                      </tr>
                                  })}
                                  </tbody>
                              </table>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          }
      </>
    );
}
