import React, { useEffect, useState } from 'react';
import RetroHitCounter from 'react-retro-hit-counter';

export default function HitCounter() {
    const [hits, setHits] = useState(undefined);

    useEffect(() => {
        // Don't count hits on localhost
        // if (process.env.NODE_ENV !== 'production') {
        //     return;
        // }
        // Invoke the function by making a request.
        // Update the URL to match the format of your platform.
        fetch(`/.netlify/functions/register-hit?slug=home`)
            .then((res) => res.json())
            .then((json) => {
                if (typeof json.hits === 'number') {
                    setHits(json.hits);
                }
            });
    }, []);

    if (typeof hits === 'undefined') {
        return null;
    }

    return <RetroHitCounter hits={hits} />;
}
