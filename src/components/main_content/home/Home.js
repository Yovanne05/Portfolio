import React from 'react';

function Home({ children }) {
    return (
        <div className="main">
            <div className="main-content">{children}</div>
        </div>
    );
}

export default Home;
