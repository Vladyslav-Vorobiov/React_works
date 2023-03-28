import Loader from "../components/Loader";

const withLoader = (WrappedComponent, isLoading) => {
    return (props) => {
        return (
            <>
                {isLoading ? <Loader/> : <WrappedComponent {...props}/>}
            </>
        );
    };
};

export default withLoader;