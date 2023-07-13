export default function NavBar({title, bootstrap_icon_name}: { title: string, bootstrap_icon_name?: string }) {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><i className={`bi ${bootstrap_icon_name}`}/>{title}</a>
            </div>
        </nav>
    )
}