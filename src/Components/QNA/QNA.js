import React from 'react';
import './QNA.css'

const QNA = () => {
    return (
        <div className='qna-container'>
            <h2>Questions and Answers</h2>
            <div className='questions'>
                <div>
                    <h4>
                        1. How does react work?
                    </h4>
                    <p>
                        ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.
                    </p>
                </div>
                <div>
                    <h4>
                        2. Differences between props and state.
                    </h4>
                    <p>
                    Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.
                    </p>
                </div>
                <div>
                    <h4>
                        3. What can useEffect do except data load?
                    </h4>
                        <ul>
                            <li>Running once on mount: fetch API data</li>
                            <li>Running on state change: validating input field</li>
                            <li>Running on state change: live filtering</li>
                            <li>Running on state change: trigger animation on new array value</li>
                            <li>Running on props change: update paragraph list on fetched API data update</li>
                            <li>Running on props change: updating fetched API data to get BTC updated price</li>
                        </ul>
                </div>
            </div>

        </div>
    );
};

export default QNA;