import Topbar from "~/containers/topbar";
import ProductDetail from "~/containers/product-detail";
import { getOriginURL } from "~/utils";

const ProductPage = (props) => {
  console.log("DETAILS:", props.data);

  return (
    <div>
      <Topbar />
      <ProductDetail {...props.data.item}/>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  let result = {};

  try {
    const origin = getOriginURL();
    const res = await fetch(`${origin}/api/items/${params.id}`);
    const data = await res.json();

    result = { data };
  } catch (err) {
    console.error(err);

    result.error = err;
  }

  return {
    props: result,
  }
}

export default ProductPage;
