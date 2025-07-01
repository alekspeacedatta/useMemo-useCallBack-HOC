import React from "react";
function WithDate<P>(WrappedComponent: React.ComponentType<P>){
    return function WithDateComponent ({...props} : P ){
        const date = new Date().toISOString().slice(0, 10);
        return (
            <>
                <WrappedComponent {...props as P} date={date} />
            </>
        )
    }
}
export default WithDate;