import './home.css'

export class Home{
    constructor(){

    }

    renderHomeData(){
        const homeTpl = `<div class="home-main-container" id="home">
        <div class="home-main-div1">
            <p>👋, MY NAME IS NANDINI ATRI</p>
            <h1>I'm a Front-end Developer |</h1>
            <span>Based in Noida Uttar Pradesh.</span>
            </br> 
            <div class="home-btn-div"><a href="./File/Nandini's Resume.pdf" download target="_blank"><button>LET'S START</button></a></div>
        </div>
        <div class="home-main-div2">
            <img src="https://pxdraft.com/themeforest/krinky/assets/img/home-banner.png"/>
        </div>
        </div>`


        const create = document.createElement('div');
        create.innerHTML = homeTpl;
        const appId = document.getElementById('app');
        appId.append(create);
    }
}

const home = new Home();
home.renderHomeData();

{/* <h1 class="developer"> </h1> */}