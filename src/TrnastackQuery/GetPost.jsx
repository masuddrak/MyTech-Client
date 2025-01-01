

import React, { useCallback, useState } from 'react'
import useGetData from './useGetData'


export default function GetPost() {
    const { data, isLoading } = useGetData()
      const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        setCount(c => c + 1);
    }, []); // Empty array means 'increment' does not depend on any values

    if (isLoading) return <h2 className='text-2xl'>loading</h2>
  console.log(count)
  
    return (
        <div>
                <button onClick={increment}>Increment {count}</button>;

            {
                data.map(post => <div key={post._id}>{post.name}</div>)
            }
        </div>
    )
}
