import React, { useState, useEffect } from 'react';
import Notes from './Notes';

const Effect = () => {

    const [notes, setNotes] = useState(null);

    return (
        <div>
            {notes &&<Notes notes={notes} />}
        </div>
    )
}

export default Effect;