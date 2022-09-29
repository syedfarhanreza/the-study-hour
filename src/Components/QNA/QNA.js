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
                        State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.
                    </p>
                </div>
                <div>
                    <h4>
                        3. What can useEffect do except data load?
                    </h4>
                    <p>

                    </p>
                </div>
            </div>

        </div>
    );
};

export default QNA;