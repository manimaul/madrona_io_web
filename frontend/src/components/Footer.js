import React from 'react'

export default class Footer extends React.Component {

    render() {
        return (
            <div className="mad_footer">
                <div className="dark_layer">
                    <div className="container">
                        <p>© {new Date().getFullYear()} Madrona Software</p>
                    </div>
                </div>
            </div>
        );
    }
}