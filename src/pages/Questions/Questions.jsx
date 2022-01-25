import './styles.css'

const Questions = () => {
    return(
        <div className="page">
            <h1>Questions</h1>
            <nav>
                <input type="radio" id="test" name="drone" value="test" checked />
                <label for="test">Tipo test</label>
                <input type="radio" id="essay" name="drone" value="essay" checked />
                <label for="essay">Abiertas</label>
            </nav>
        </div>
    )
}

export default Questions