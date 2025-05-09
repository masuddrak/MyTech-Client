import  { useCallback, useState } from "react";
import useGetData from "./useGetData";
import Loader from "../shared/Loader";

export default function GetPost() {
  const { data, isLoading } = useGetData();
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []); // Empty array means 'increment' does not depend on any values

  if (isLoading) return <h2 className="text-2xl"><Loader></Loader></h2>;

  return (
    <div>
      <button onClick={increment}>Increment {count}</button>;
      {data.map((post) => (
        <div key={post._id}>{post.name}</div>
      ))}
    </div>
  );
}
