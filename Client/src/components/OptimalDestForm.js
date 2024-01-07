import "../css/OptimalDestFormStyles.css"

function OptimalDestForm(){
    return(
        <div className="form1-container">
            <h1>Outline your trip details</h1>
            <form>
                <input placeholder="Budget"/>
                <input placeholder="Duration"/>
                <input placeholder="Traveling with relatives? (e.g. 1/0 => Yes/No)"/>
            </form>
            <div className="btn-field">
                <button>Submit</button>
            </div>
        </div>
    );
}

export default OptimalDestForm