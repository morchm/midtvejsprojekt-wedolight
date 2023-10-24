import Header from "./Header";
import About from "./content/About/page";

import 'bootstrap/dist/css/bootstrap.css'



export default function Home() {

  async function onClose() {
    "use server"
    console.log("Modal has closed")
  }

  async function onOk() {
    "use server"
    console.log("Ok was clicked")
  }


  return (
   <>
    <Header/>
    <About/>
   </>
  )
}
