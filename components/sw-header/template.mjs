const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="components/sw-header/shadow.css">
    <header>
        <section>
            <a href="/"><figure>💗</figure></a>
            <a href="/"><h1>333™</h1></a>
        </section>
        <input id="menu-toggle" type="checkbox">
        <label class='menu-button-container' for="menu-toggle">
            <span class='menu-button'></span>
        </label>
        <nav>
            <ul>
                <li>
                    <h3>HeartBank®</h3>
                    <div>
                        <a href="#HeartBank.org"><button>HeartBank.org</button></a>
                        <h4>Micro Wallet</h4>
                        <menu>
                            <li><a>Hard Wallet</a></li>
                            <li><a>Jewelry</a></li>
                        </menu>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <h3>Nhia Kou</h3>
                    <div>
                        <a href="#NhiaKou.org"><button>NhiaKou.org</button></a>
                        <h4>Free Energy</h4>
                        <menu>
                            <li><a>Solar Power</a></li>
                            <li><a>Power Storage</a></li>
                        </menu>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <h3>Silicon Wat</h3>
                    <div>
                        <a href="#SiliconWat.org"><button>SiliconWat.org</button></a>
                        <h4>Free Internet</h4>
                        <menu>
                            <li><a>Micro Drones</a></li>
                            <li><a>Decentralized Network</a></li>
                        </menu>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <h3>THonly™</h3>
                    <div>
                        <a href="#THonly.com"><button>THonly.com</button></a>
                        <h4>Metaverse Gear</h4>
                        <menu>
                            <li><a>AR</a></li>
                            <li><a>VR</a></li>
                        </menu>
                    </div>
                </li>
            </ul>
        </nav>
        <aside>
            <select onchange="this.getRootNode().host.changeLanguage(event)">
                <option value="en">English</option>
                <option value="km" disabled>Khmer</option>
                <option value="es" disabled>Spanish</option>
                <option value="ru" disabled>Russian</option>
                <option value="zh" disabled>Chinese</option>
            </select>
        </aside>
    </header>
`;

export default template;