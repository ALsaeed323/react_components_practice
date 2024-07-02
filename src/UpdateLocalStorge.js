import {useEffect } from 'react';


export default function UpdateLocalstorge(value) {

    useEffect (()=>{
        console.log(value);
    },[value]);
}
