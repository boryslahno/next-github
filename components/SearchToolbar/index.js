import { Input, Box, InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const SearchToolbar = ({ searchText, changeSearchTextHandler }) => (
   <Box
      mt={1}
      ml={1}
   >
      <Input
         placeholder="Search by name..."
         startAdornment={
            <InputAdornment position='start'>
               <SearchIcon />
            </InputAdornment>
         }
         value={searchText}
         onChange={changeSearchTextHandler}
      />
   </Box>
);

export { SearchToolbar };