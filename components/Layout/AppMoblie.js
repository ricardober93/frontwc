export default function AppMoblie({ children }) {
    return (
        <main>
            { children}
            <style jsx> {`
            main {
                margin-left: 2em;
                }
            `} </style>
        </main>
    )
}
