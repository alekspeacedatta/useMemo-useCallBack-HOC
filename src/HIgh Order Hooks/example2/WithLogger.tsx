function WithLogger<P> (WrappedComponent: React.ComponentType<P>){
    return function WithLoggerComponent ({...props} : P) {
        console.log("Component rendered");
        return <WrappedComponent {...(props as P)}/>
    }
}
export default WithLogger;