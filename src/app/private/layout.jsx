import { privateRoutes } from "../lib/utils";
import NavBar from "../ui/NavBar";

export default function PrivateLayout({ children }) {
  const links = privateRoutes

  return (
    <>
      <NavBar links={links}/>
      {children}
    </>
  )
}