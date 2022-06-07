import { useMemo } from "react";

function Footer () {
    const year = useMemo(() => {
        return new Date().getFullYear()
    }, [])

    return (
        <footer className="page-footer blue-grey darken-2">
            <div className="footer-copyright">
                <div className="container">
                    © { year } E-commerce project. Lirioblanko
                    <a className="grey-text text-lighten-4 right" href="https://github.com/lirioblanko/e-commerce-react-app">Repo</a>
                </div>
            </div>
        </footer>
    )
}

export { Footer }
