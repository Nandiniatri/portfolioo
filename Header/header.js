import './header.css';

export class Header {
    constructor() {
    } 

    renderHeaderData() {
        const header = `
        <div class="main-header-Container">
            <div class="main-header-div1">
                <a href="#"><h1>Nandini Atri</h1></a> 
            </div>
            <a href="#id" id="menu-icon"><i style="font-size:30px" class="fa">&#xf0c9;</i></a> 

            <div class="main-header-div2">
                <nav>
                    <a href="#home">HOME</a>
                    <a href="#services">SERVICES</a>
                    <a href="#skillid">SKILLS</a>
                    <a href="#projectid">PROJECTS</a>
                    <a href="./File/Nandini's Resume.pdf" download target="_blank">RESUME</a>
                    <a href="#contactid">CONTACT</a> 
                </nav> 

                <div class="main-header-div3">
                    <a href="#contactid"><button>CONTACT</button></a>
                </div>
            </div>
        </div>`;

        document.getElementById('app').innerHTML = header;
    }
}

const header = new Header();
header.renderHeaderData();

