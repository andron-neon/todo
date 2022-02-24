import React from 'react';

type RatingPropsType = {
    value: number
}

export function Rating(props: RatingPropsType) {
    if (props.value === 1) {
        return (
            <div>
                <Stars selected={true}/>
                <Stars selected={false}/>
                <Stars selected={false}/>
            </div>
        );
    }
    if (props.value === 2) {
        return (
            <div>
                <Stars selected={true}/>
                <Stars selected={true}/>
                <Stars selected={false}/>
            </div>
        );
    }
    if (props.value === 3) {
        return (
            <div>
                <Stars selected={true}/>
                <Stars selected={true}/>
                <Stars selected={true}/>
            </div>
        );
    }
    return (
        <div>
            <p>можно поставить только 1 2 3, дальше хрен Вам!!!))</p>
        </div>
    );
}

type StarsPropsType = {
    selected: boolean
}

function Stars(props: StarsPropsType) {
    if (!props.selected) {
        return <span>star </span>
    } else {
        return <span><b>star</b> </span>
    }
}
