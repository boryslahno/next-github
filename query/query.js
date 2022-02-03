import { gql } from '@apollo/client';

const REPOSITORY_FRAGMENTS = gql`
fragment RepositoryFragment on Repository{
   id,
   name,
   updatedAt,
   stargazerCount
   primaryLanguage{
      name,
      color
    }
}
`;

export const REPOSITORY_QUERY = gql`
${REPOSITORY_FRAGMENTS}
query Repositories($queryString:String!){ 
search(query:$queryString, type: REPOSITORY, first:50){
    nodes{
      ...RepositoryFragment
  }
}
}
`;