import React from 'react';
import './error.scss';

function Error({error}: { error: string }) {
    return (
        <div className="error__container">
            <div className="error">
                <div className="error_info">ERROR</div>
                <div className="error__message">
                    {error}
                </div>
            </div>

        </div>
    );
}

export default Error;