import IconPaths from "../../utils/iconPaths"
import Icon from "../Icon/Icon";
import "./button.scss";

const Button = (props) => {
    const { text, icon, onClick } = props;

    return (
        <button className="btn-btn" onClick={() => onClick()}>
            <div className="btn-btn-content">
                {icon && (<Icon path={icon} />)}
                {text}
            </div>
        </button>
    )

}

export default Button;