import { useState } from "react"

const useTableData = () => {
  const [tableData, setTableData] = useState([
    {
      columnName: 'Column name',
      type: 'id'
    },

  ])
  const setColumnData = (index, data) => {
    const newData = [...tableData]
    newData[index] = data
    setTableData(newData)
  }
  const maxLength = tableData.reduce((acc, curr) => {
    return curr.columnName.length > acc ? curr.columnName.length : acc
  }, 0)
  return (
    {
      tableData,
      setColumnData,
      maxLength
    }
  )
}
export default useTableData