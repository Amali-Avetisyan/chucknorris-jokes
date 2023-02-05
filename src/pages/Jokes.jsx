import Button from "../components/Button/Button";
import IconPaths from "../utils/iconPaths";
import "../pages/jokes.scss"

const Jokes = () => {

    return (
        <div className="container">
            <div className="joke-container">
                <p> Some Joke</p>
            </div>

            <div className="buttons">
                <Button text="Refresh" icon={IconPaths["rotate-right"]} />
                <Button text="Refresh" icon={IconPaths["rotate-right"]} />
                <Button text="Refresh" icon={IconPaths["rotate-right"]} />
            </div>
        </div>
    );

}


export default Jokes;