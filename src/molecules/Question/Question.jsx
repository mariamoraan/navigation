import './styles.css'
const Question = () => {
    return(
        <div className="question">
            <h1 className="sub-title">Pregunta</h1>
            <h1>¿Cuánto son 1 + 5 ?</h1>
            <h1 className="sub-title">Repuesta</h1>
            <p>6</p>
            <h1 className="sub-title">Opciones</h1>
            <ul>
                <li>3</li>
                <li>24</li>
                <li>8</li>
                <li>2</li>
            </ul>
        </div>
    )
}

export default Question