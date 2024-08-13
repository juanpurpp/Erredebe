import { useReactFlow } from "@xyflow/react"
import { useEffect, useState } from "react"

//table data is considered the array of columns and types
const defaultInitialTableData = [
  {
    columnName: '',
    type: ''
  },
]
const useTableData = (id, initialTableData) => {
  const {updateNodeData} = useReactFlow()
  const [tableData, setTableData] = useState(initialTableData ?? defaultInitialTableData)
  //Forcing updates of table data to react flow store
  useEffect(() => {
    updateNodeData( id,{tableData})
  }, [tableData, updateNodeData, id])
  const changeTableName = (name) => {
    updateNodeData(id,{ name } )
  }
  const setColumnData = (index, data) => {
    const newData = [...tableData]
    newData[index] = data
    setTableData(newData)
  }
  const addColumn = () => {
    setTableData([...tableData, {columnName: '', type: ''}])
  }
  const deleteColumn = (index) => {
    const newData = [...tableData]
    newData.splice(index, 1)
    setTableData(newData)
  }
  const maxLength = tableData.reduce((acc, curr) => {
    return curr.columnName.length > acc ? curr.columnName.length : acc
  }, 0)
  const setColWidth = (newWidth) => { 
    updateNodeData(id,{colWidth: newWidth})
  }
  return (
    {
      tableData,
      setColumnData,
      maxLength,
      addColumn,
      deleteColumn,
      changeTableName,
      setColWidth
    }
  )
}
export default useTableData