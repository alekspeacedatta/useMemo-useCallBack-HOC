import React from "react";
function WithAuthProtection<P>(WrappedComponent: React.ComponentType<P>){
    return function WithAuthProtectionComponent ({isLoggedIn, ...props}: P & {isLoggedIn : boolean}) {
        if(!isLoggedIn){
            return <h2>Please Log In</h2>
        }
        return <WrappedComponent {...(props as P) } />
    }
}
export default WithAuthProtection;