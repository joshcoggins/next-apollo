import { gql, useQuery } from "@apollo/client";
import ErrorMessage from "./ErrorMessage";

export const ALL_USERS_QUERY = gql`
  query allUsers($first: Int!) {
    allUsers(first: $first) {
      id
      firstName
      lastName
      email
      createdAt
      updatedAt
    }
  }
`;

export const allUsersQueryVars = {
  first: 10,
};

export default function UserList() {
  const { loading, error, data } = useQuery(
    ALL_USERS_QUERY,
    {
      variables: allUsersQueryVars,
      // Setting this value to true will make the component rerender when
      // the "networkStatus" changes, so we are able to know if it is fetching
      // more data
      notifyOnNetworkStatusChange: true,
    },
  );
  const allUsers = data?.allUsers || [];

  if (error) return <ErrorMessage message="Error loading users." />;
  if (loading) return <div>Loading</div>;

  return (
    <section>
      <ul>
        {allUsers.map((user: { id: string; firstName: string; lastName: string; email: string }, index: number) => (
          <li key={user.id}>
            <div>
              <span>{index + 1}. </span>
              <a href={`mailto:${user.email}`}>{user.firstName} {user.lastName}</a>
            </div>
          </li>
        ))}
      </ul>
      <style jsx>{`
        section {
          padding-bottom: 20px;
        }
        li {
          display: block;
          margin-bottom: 10px;
        }
        div {
          align-items: center;
          display: flex;
        }
        a {
          font-size: 14px;
          margin-right: 10px;
          text-decoration: none;
          padding-bottom: 0;
          border: 0;
        }
        span {
          font-size: 14px;
          margin-right: 5px;
        }
        ul {
          margin: 0;
          padding: 0;
        }
        button:before {
          align-self: center;
          border-style: solid;
          border-width: 6px 4px 0 4px;
          border-color: #ffffff transparent transparent transparent;
          content: "";
          height: 0;
          margin-right: 5px;
          width: 0;
        }
      `}</style>
    </section>
  );
}