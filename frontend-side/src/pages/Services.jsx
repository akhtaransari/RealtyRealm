import { useEffect } from "react";

export default function Services() {

    useEffect(() => {
        document.title = 'Services | RealtyRealm';
    }, []);
    return (
        <>
        <h1>Service Page</h1>
        </>
    );
}