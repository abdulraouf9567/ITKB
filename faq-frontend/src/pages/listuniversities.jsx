import {useTable,useSortBy,useGlobalFilter,usePagination} from 'react-table'
import { useMemo,useEffect,useState  } from 'react'
import GlobalFilter from '../components/GlobalFilter'
import ClipLoader from 'react-spinners/ClipLoader';

function ListUniversities(){

  const [dataUrl, setDataUrl] = useState([]);
  const [loadingInProgress, setLoading] = useState(true);


  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch('http://universities.hipolabs.com/search?country=United%20Arab%20Emirates');
        const jsonData = await response.json();
        setDataUrl(jsonData);
        console.log(dataUrl);
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    return;
  }, []); 


  const COLUMNS=[
    {
      Header:'Name',
      accessor:'name'
    },
    {
      Header:'State-Province',
      accessor:'state-province'
    },
    {
      Header:'Domains',
      accessor:'domains'
    },
    {
      Header:'Web_pages',
      accessor:'web_pages'
    },
    {
      Header:'Alpha_two_code',
      accessor:'alpha_two_code'
    },
    {
      Header:'Country',
      accessor:'country'
    }
  ]


  const columns = useMemo(()=>COLUMNS,[])
  const data=useMemo(()=>dataUrl,[dataUrl])

  const tableInstance = useTable({
    columns,
    data
  },useGlobalFilter,useSortBy,usePagination)



  const {getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    SetPageSize,
    state,
    setGlobalFilter,
  }=tableInstance

const {globalFilter}=state
const { pageIndex, pageSize } = state;

  return(
    <>
     {loadingInProgress?(
          <div className="text-center loader-container">
          <ClipLoader color={'#fff'} size={150} />
        </div>
        ):(<div className="container my-5">
        <h1>List Universities</h1>
        <div className='text-center mb-3'>
    <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />

    </div>
        <table className='table table-dark' {...getTableProps()}>
        
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th 
                {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render("Header")} 
                <span>
                  {column.isSorted?(column.isSortedDesc ?'⬇️':'⬆️'):""}
                </span>
                
                </th>

              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
        {
          page.map((row)=>{
            prepareRow(row)
            return(
              <tr {...row.getRowProps()}>
              {
                row.cells.map((cell) =>{
                  return  <td {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </td>
                })
              }
          </tr>
            )
          })
        }
          
        </tbody>
        
        </table>
        <div>
        <span>
          Page{' '} <strong>{pageIndex+1} of {pageOptions.length}</strong>{' '}
          | Go to page:{" "}
              <input
                type="number"
                defaultValue={pageIndex + 1}
                onChange={(e) => {
                  const pageNumber = e.target.value
                    ? Number(e.target.value) - 1
                    : 0;
                  gotoPage(pageNumber);
                }}
                min={1}
                max={pageOptions.length}
                style={{ width: "50px" }}
              />
        </span>
        <button onClick={()=>gotoPage(0)}
        disabled={!canPreviousPage}
        >
          {"<<"}
        </button>
        <button
              
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
              >
                Previous
              </button>
          <button onClick={()=>nextPage()} disabled={!canNextPage}>Next</button>
          <button
                className=""
                onClick={() => gotoPage(pageCount - 1)}
                disabled={!canNextPage}
              >
                {">>"}
              </button>
        </div>
      </div>)}
    
      
    </>
  )
}

export default ListUniversities;