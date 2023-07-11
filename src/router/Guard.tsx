import {Navigate, Outlet} from "react-router";

export default function Guard({navigate_in_fail, test_function}: {
    navigate_in_fail: string,
    test_function: () => boolean
}) {

    return (test_function() ? <Outlet/> : <Navigate to={navigate_in_fail}/>)
}