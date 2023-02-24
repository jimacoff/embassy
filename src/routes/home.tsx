import { useLoaderData } from "react-router-dom";
import { apiGetProducts } from "../api/products";
import { ProductCard } from "../components/productcard";
import { Link } from "react-router-dom";

export async function loader() {
  const products = await apiGetProducts();
  return { products };
}

export function HomeRoute() {
  const { products } = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  return (
    <div className="m-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <div key={product.id}>
          <Link to={`/product/${product.name}`}>
            <ProductCard
              image={product.image}
              name={product.name}
              price={product.price}
            />
          </Link>
        </div>
      ))}
    </div>
  );
}
