import Head from 'next/head';
import { gql } from '@apollo/client';
import client from '../apollo/appolo-client';
import { Table } from '../components';
import { Container } from '@mui/material'
import { REPOSITORY_QUERY } from '../query/query';
import styles from '../styles/Repositories.module.css';
import { RepositoriesContext } from '../context';

export async function getServerSideProps({ query }) {
   const { language = '', name = '' } = query;
   const { data } = await client.query({
      query: REPOSITORY_QUERY,
      variables: {
         queryString: `user:boryslahno is:public language:${language} ${name} in:name`,
      }
   });

   return {
      props: {
         repositories: data.search.nodes
      }
   }
}

const Repositories = ({ repositories }) => (
   <>
      <Head>
         <title>Your repositories</title>
         <link rel="icon" href="/github.ico" />
      </Head>

      <RepositoriesContext.Provider value={{ repositories }}>
         <Container maxWidth="lg" className={styles.container}>
            <Table />
         </Container>
      </RepositoriesContext.Provider>
   </>
);

export default Repositories;