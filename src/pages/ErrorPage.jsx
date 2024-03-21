import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";

export default function ErrorPage(){
    return(
        <>
        <NavigationBar/>
        <h1>Something went wrong!</h1>
        </>
    )
}