import react from 'react';

const Scroll = (props) => {
    return(
    <div style={{overflowY: 'scroll', border: '5px solid black', height: '800px', marginTop:'20px'}}>
        {props.children}
    </div>
    )
}


export default Scroll;