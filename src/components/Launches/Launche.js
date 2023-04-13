import React from 'react';

const Launche = ({value}) => {
    return (
        <div>
            <div>
                <p>Mission Name - {value.mission_name}</p>
                <p>Launch Year {value.launch_year}</p>
                <p>Launch Year {value.links.mission_patch_small}</p>

            </div>
        </div>
    );
};

export default Launche;