const Header = (props) => {
    return (
        <div className="modal-header">
            <h5 className="modal-title">{props.children}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                    onClick={props.toggle}>
            </button>
        </div>
    );
};

export default Header;