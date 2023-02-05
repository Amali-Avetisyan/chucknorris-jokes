import Button from "../components/Button/Button"
import IconPaths from "../utils/iconPaths";

const Jokes = () => {

    return (
        <div>
            <div>
                Some Joke
            </div>

            <Button text="Refresh" icon={IconPaths["rotate-right"]} />
        </div>
    )

}


export default Jokes;