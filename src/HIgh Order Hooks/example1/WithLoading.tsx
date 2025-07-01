import React from "react";
function WithLoading<P>(WrappedComponent: React.ComponentType<P>){
    return function WithLoadingComponent ({isLoading, ...props} : P & {isLoading: boolean}) { 
        if(isLoading){
            return <div>Loading...</div>
        }
        return <WrappedComponent {...(props as P)} />
    }
}
export default WithLoading;