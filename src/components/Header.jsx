import "./Header.css"

const name = "Bernardo"

function Header() {
  return (
      <div className="Header">
            <div className="HeaderLeft">
              <h1>Logo</h1>
            </div>
            <div className="HeaderRight">
              <ul>
                <li><a>Home</a></li>
                <li><a>Produtos</a></li>
                <li><a>Sobre</a></li>
                <li><a>Suporte</a></li>
              </ul>
            </div>
      </div>
  )
}

export default Header
