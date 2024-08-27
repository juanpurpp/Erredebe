'use client'

import { ReactFlowProvider } from "@xyflow/react"

const layout = ({children}) => {
  return (
    <ReactFlowProvider>
      {children}
    </ReactFlowProvider>
  )
}
export default layout