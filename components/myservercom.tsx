import React from 'react'

const MyServerComponent = async () =>  {
  
    console.log('getting from the darkside');
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const repo1 = await res.json()
    let cmdList = [{ name: repo1.html_url}, { name: repo1.description }]
  
  return (
    <div>
      <ul>
        { cmdList.map(x => <li key={x.name}>{x.name}</li>)}
      </ul>
    </div>
    )
  }
  
  export default MyServerComponent