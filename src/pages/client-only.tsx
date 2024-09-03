/* eslint-disable @next/next/no-html-link-for-pages */
import App from "../components/App";
import InfoBox from "../components/InfoBox";
import Header from "../components/Header";
import UserList from "../components/UserList";

const ClientOnlyPage = (props: any) => (
  <App>
    <Header />
    <InfoBox>
      ℹ️ This page shows how to use Apollo only in the client. If you{" "}
      <a href="/client-only">reload</a> this page, you will see a loader since
      Apollo didn&apos;t fetch any data on the server. This is useful when the page
      doesn&apos;t have SEO requirements or blocking data fetching requirements.
    </InfoBox>
    <UserList />
  </App>
);

export default ClientOnlyPage;