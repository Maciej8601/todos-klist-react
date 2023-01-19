import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone }) => (
    tasks.length > 0 && (
        <div className="buttons">
            <button
                onClick={toggleHideDone}
                className={`buttons__button`}
            >
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button
                className={`${!tasks.every(({ done }) => done) ?
                    "buttons__button" : " buttons__button--disabled"}`}
                disabled={tasks.every(({ done }) => done)}>
                Ukończ wszystkie
            </button>
        </div>
    )
);

export default Buttons;