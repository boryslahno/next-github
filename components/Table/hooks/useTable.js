import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { getGridSingleSelectOperators } from '@mui/x-data-grid';
import { Badge, Chip } from '@mui/material/';
import StarRateIcon from '@mui/icons-material/StarRate';
import { useApolloClient } from '@apollo/client';
import { gql } from '@apollo/client';
import { REPOSITORY_QUERY } from '../../../query/query';
import { getQueryString } from '../../../utils/getQueryString';
import { useDebounce } from '../../../hooks/useDebounce';

export const useTable = repositoriesArray => {

   const router = useRouter();

   const [repositories, setRepositories] = useState(repositoriesArray);
   const [loading, setLoading] = useState(false);
   const [language, setLanguage] = useState(router.query.language || '');
   const [searchText, setSearchText] = useState(router.query.name || '');

   const debounceSearchText = useDebounce(searchText, 600);
   const client = useApolloClient();
   const isFirstRender = useRef(true);

   const columns = [
      { field: 'name', headerName: 'Name', width: 250, filterable: false, hideable: false },
      {
         field: 'stargazerCount',
         headerName: 'Stars',
         width: 100,
         align: 'center',
         filterable: false,
         hideable: false,
         renderCell: ({ row }) =>
            <Badge badgeContent={row.stargazerCount} color="primary" showZero>
               <StarRateIcon color="action" />
            </Badge>
      },
      { field: 'updatedAt', headerName: 'Last Update', width: 300, filterable: false, hideable: false },
      {
         field: 'primaryLanguage',
         headerName: 'Language',
         flex: 1,
         sortable: false,
         hideable: false,
         type: 'singleSelect',
         renderCell: ({ row }) => (<Chip
            label={row.primaryLanguage?.name}
            style={{ 'backgroundColor': row.primaryLanguage?.color, 'color': '#fff' }} />),
         valueOptions: ['CSS', 'JavaScript', 'Ruby', 'TypeScript', 'HTML'],
         filterOperators: getGridSingleSelectOperators().filter(operator => operator.value === 'is'),
      }
   ]

   const searchTextСhangeHandler = event => {
      const searchText = event.target.value;
      router.replace({ query: getQueryString(searchText, language) });
      setSearchText(searchText);
   }

   const filterLanguageChangeHandler = filterModel => {
      const filter = filterModel.items[0].value || '';
      router.replace({ query: getQueryString(searchText, filter) });
      setLanguage(filter);
   }

   const fetchData = async () => {
      try {
         setLoading(true);
         const { data } = await client.query({
            query: REPOSITORY_QUERY,
            variables: {
               queryString: `user:boryslahno is:public language:${language} ${searchText} in:name`,
            }
         })
         setRepositories(data.search.nodes);
      } catch (error) {
         console.log(error.message);
      } finally {
         setLoading(false);
      }
   }

   useEffect(() => {

      if (isFirstRender.current) {
         isFirstRender.current = false;
         return;
      }

      fetchData();
   }, [language, debounceSearchText])

   return [repositories, loading, columns, filterLanguageChangeHandler, searchText, searchTextСhangeHandler, router.query.language || '']
}