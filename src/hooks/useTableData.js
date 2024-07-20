import { useState } from "react"

const useTableData = () => {
  const [tableData, setTableData] = useState([
    {
      columnName: '',
      type: ''
    },

  ])
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
  return (
    {
      tableData,
      setColumnData,
      maxLength,
      addColumn,
      deleteColumn
    }
  )
}
export default useTableData