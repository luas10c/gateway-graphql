import { gql, useQuery } from "@apollo/client";

const GET_PAYMENTS_QUERY = gql`
  query {
    payments {
      id
      description
      price
    }
  }
`;

const Home = () => {
  const { data } = useQuery(GET_PAYMENTS_QUERY);

  return (
    <div>
      <h4>Home</h4>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Home;
