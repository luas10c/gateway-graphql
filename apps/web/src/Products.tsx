import { gql, useQuery } from "@apollo/client";

const GET_PRODUCTS_QUERY = gql``;

const Products = () => {
  const { data } = useQuery(GET_PRODUCTS_QUERY);

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Products;
