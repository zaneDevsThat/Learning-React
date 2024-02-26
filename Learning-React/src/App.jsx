import { LetsImport } from "./importExportComponents/ImpExp"
import { SingleCurly } from "./jsxCurlies/JSXCurlies"
import PackingList from "./conditionalRender/CondRend1"
{/*import myImage from "./assets/pogi-papa.jpg"*/}

function App() {
  return (
    <>
      <h1>Hello World!</h1>
      <NestedOne />
      <NestedTwo />
      <LetsImport />
      <PackingList />
      <SingleCurly />
    </>
  )
}

function NestedOne() {
  return <h4>I'm a child! No parenthesis needed since this is just one and on the same line as the return</h4>
}

function NestedTwo() {
  return (
    <>
      <h4>You already need to enclose this in a parenthesis.</h4>
      <p>Simply because you already used multiple lines of code.</p>
      <p>Also, you need to place this in a div or a container just like the one we used to enclose this</p>
    </>
  )
}



export default App