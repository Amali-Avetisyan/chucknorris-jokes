import IconPaths from "../../utils/iconPaths"
import Icon from "../Icon/Icon";
import "./button.scss";

const Button = (props) => {
    const { text, icon } = props;

    return (
        <button className="btn-btn">
            <div className="btn-btn-content">
                {icon && <Icon path={icon} />}
                {text}
            </div>
        </button>
    )

}

export default Button;