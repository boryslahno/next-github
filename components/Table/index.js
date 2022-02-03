import { useContext } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useTable } from './hooks/useTable';
import { SearchToolbar } from '../SearchToolbar';
import { RepositoriesContext } from '../../context'

const Table = () => {

   const { repositories } = useContext(RepositoriesContext);
   const [
      repos,
      loading,
      columns,
      filterLanguageHandler,
      searchText,
      changeSearchTextHandler,
      filterInitialState,
   ] = useTable(repositories);


   return (
      <DataGrid
         columns={columns}
         rows={repos}
         filterMode="server"
         initialState={{
            filter: {
               filterModel: {
                  items: [{ columnField: 'primaryLanguage', operatorValue: 'is', value: filterInitialState }],
               },
            },
         }}
         pageSize={6}
         rowsPerPageOptions={[6]}
         autoHeight
         disableSelectionOnClick
         onFilterModelChange={filterLanguageHandler}
         loading={loading}
         components={
            {
               Toolbar: SearchToolbar
            }
         }
         componentsProps={{
            toolbar: {
               searchText,
               changeSearchTextHandler
            }
         }}
      />
   )
}

export { Table };