import Topbar from "~/containers/topbar";
import ListResult from "~/containers/list-result";
import { getOriginURL } from "~/utils";

const Items = (props) => {
  const data = props.data || {};

  return (
    <div>
      <Topbar searchValue={props.search || ""}/>
      <ListResult items={data.items || []}/>
    </div>
  );
};


export async function getServerSideProps({ query }) {
  let result = {};

  try {
    const origin = getOriginURL();
    const res = await fetch(`${origin}/api/items?q=${query.search}`);
    const data = await res.json();

    result = { search: query.search, data};
  } catch(err) {
    console.error(err);

    result.error = err;
  }

  return {
    props: result,
  }
}

export default Items;
