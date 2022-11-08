const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="components/sw-footer/shadow.css">
    <nav>
        <main>
            <section>
                <div>
                    <h5>Donors</h5>
                    <ul class="donors">
                        <li><a href="https://github.com/thonly"><img src="https://github.com/thonly.png?size=100"></a></li>
                        <li><a href="https://github.com/panhiathao"><img src="https://github.com/panhiathao.png?size=100"></a></li>
                        <li><a href="https://github.com/chengsieuly"><img src="https://github.com/chengsieuly.png?size=100"></a></li>
                        <li><a href="https://github.com/lykimche"><img src="https://github.com/lykimche.png?size=100"></a></li>
                    </ul>
                </div>
                <div>
                    <h5>Sponsors</h5>
                    <ul class="donors">
                        <li><a href="https://github.com/heartbank"><img src="https://github.com/heartbank.png?size=100"></a></li>
                        <li><a href="https://github.com/siliconwat"><img src="https://github.com/siliconwat.png?size=100"></a></li>
                        <li><a href="https://github.com/thonlymetaverse"><img src="https://github.com/thonlymetaverse.png?size=100"></a></li>
                        <li><a href="https://github.com/nhiakou"><img src="https://github.com/nhiakou.png?size=100"></a></li>
                    </ul>
                </div>
            </section>
            <section>
                <div>
                    <h5>Donate</h5>
                    <ul>
                        <li><a href="https://heartbank.fund">HeartBank</a></li>
                        <li><a href="https://github.com/sponsors/333eco">GitHub</a></li>
                    </ul>
                </div>
            </section>
            <section>
                <div>
                    <h5>Connect</h5>
                    <ul>
                        <li><a href="https://talk.siliconwat.org">Silicon Wat</a></li>
                    </ul>
                </div>
                <div>
                    <h5>Contact</h5>
                    <ul>
                        <li><a href="mailto:lab@333.eco">lab@333.eco</a></li>
                    </ul>
                </div>
            </section>
        </main>
        <footer>
            <small><a href="https://github.com/333eco">333™ Lab</a> &copy; 2023</small>
        </footer>
    </nav>
`;

export default template;