import "./header.css"

function Header(){
    return(
        <header className="site-header">
            <div className="container">
                <div className="header-box">
                    <a className="header-box__logo" href="/public/index.html">Where in the world?</a>
                    <button className="header-box__btn" type="submit">Dark Mode</button>
                </div>
            </div>
        </header>
        );
    };
    
    export default Header;