import Topbar from "~/containers/topbar";
import ListResult from "~/containers/list-result";
import { getOriginURL } from "~/utils";

const Items = (props) => {
  return (
    <div>
      <Topbar />
      <ListResult />
    </div>
  );
};


export async function getServerSideProps({ query, req }) {
  const origin = getOriginURL();
  const res = await fetch(`${origin}/api/items?q=${query.search}`);
  const data = await res.json();

  return {
    props: { data },
  }
}

export default Items;
