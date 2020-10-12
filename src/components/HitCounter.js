import React, { useEffect, useState } from 'react';
import RetroHitCounter from 'react-retro-hit-counter';

export default function HitCounter() {
    const [hits, setHits] = useState(undefined);

    useEffect(() => {
        // Don't count hits on localhost
        if (process.env.NODE_ENV !== 'production') {
            setHits(999);
            return;
        }
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

    return (
        <RetroHitCounter
            hits={hits}
            withBorder={false}
            withGlow={true}
            minLength={4}
            size={20}
            padding={4}
            digitSpacing={3}
            segmentThickness={2}
            segmentSpacing={0}
            segmentActiveColor="#76FF03"
            segmentInactiveColor="#315324"
            backgroundColor="#222222"
            borderThickness={7}
            glowStrength={0.5}
        />
    );
}
