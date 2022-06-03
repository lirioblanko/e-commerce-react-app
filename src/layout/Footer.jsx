function Footer () {
    return <footer className="page-footer green lighten-1">
        <div className="footer-copyright">
            <div className="container">
                © { new Date().getFullYear()} E-commerce project. Lirioblanko
                <a className="grey-text text-lighten-4 right" href="#">Repo</a>
            </div>
        </div>
    </footer>
}

export { Footer }
