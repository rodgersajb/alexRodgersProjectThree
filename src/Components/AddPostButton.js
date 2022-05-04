import "./AddPostButton.scss";

function AddPostButton(props) {
    return (
        <button
            className="AddPostButton"
            onClick={(event) => {
                event.preventDefault();
                props.onClick();
            }}
        >
            +
        </button>
    );
}

export default AddPostButton;
