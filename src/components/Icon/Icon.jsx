const Icon = (props) => {
    const { width = "22", height = "22", path } = props;

    return (
        <svg width={width} height={height} viewBox="0 0 1024 1024">
            <path d={path}></path>
        </svg>
    );
}

export default Icon;