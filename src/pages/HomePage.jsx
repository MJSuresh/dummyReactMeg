import { Link, useNavigate } from "react-router-dom";

export default function HomePage(){
    const navigator = useNavigate();
    function navigateToProducts(){
        navigator('/products');
    }
    return(
        <>
        <h1>This is Home Page</h1>
        <p>Go to <Link to='/products'>Products</Link></p>
        <button onClick={navigateToProducts}>To Products</button>
        </>
    )
}