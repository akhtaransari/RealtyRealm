import { useEffect } from "react";

export default function Contact() {
    useEffect(() => {
        document.title = 'Contact | RealtyRealm';
    }, []);
    return (
        <>
        <h1>Conatct Page</h1>
        </>
    );
}