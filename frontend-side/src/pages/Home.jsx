import { useEffect } from "react";

export default function Home() {

    useEffect(() => {
        document.title = 'Home | RealtyRealm';
    }, []);
    

    return (
        <>
            <h1 className="border border-red-500 text-red-500">Home Page</h1>
        </>
    );
}