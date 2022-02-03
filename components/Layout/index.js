import { ApolloProvider } from "@apollo/client";
import client from '../../apollo/appolo-client';
import { Footer } from '../Footer';
import { Header } from "../Header";

const Layout = ({ children }) => (
   <ApolloProvider client={client}>
      <Header />
      <main className="main">{children}</main>
      <Footer />
   </ApolloProvider>
);

export { Layout };