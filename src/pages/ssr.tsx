import App from "../components/App";
import InfoBox from "../components/InfoBox";
import Header from "../components/Header";
import UserList, {
  ALL_USERS_QUERY,
  allUsersQueryVars,
} from "../components/UserList";
import { initializeApollo, addApolloState } from "../lib/apolloClient";

const SSRPage = () => (
  <App>
    <Header />
    <InfoBox>ℹ️ This page shows how to use SSR with Apollo.</InfoBox>
    <UserList />
  </App>
);

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ALL_USERS_QUERY,
    variables: allUsersQueryVars,
  });

  return addApolloState(apolloClient, {
    props: {},
  });
}

export default SSRPage;