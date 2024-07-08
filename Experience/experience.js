import './experience.css'

export class Experience{
    constructor(){}

    renderExperienceData(){ 
        const experienceTpl = `<div class="experience-Main-Container">
        <div class="experience-Main-Div1">
            <img src="https://pxdraft.com/themeforest/krinky/assets/img/aboutme-banner.png"/>
        </div>
        <div class="experience-Main-Div2">
            <h1>I'm a Front-end Developer.</h1>
            <p>My name is Nandini Atri, and I am a front-end developer. I am a fresher and am currently looking for a job in front-end technology. I have a good understanding of HTML, CSS, JavaScript, and React.js, and I have worked on a few projects.</p>

            <div class="experience-Main-Div2-InnerDiv">
                <div class="div2-inner1">
                    <a href="#contactid"><button>CONTACT ME</button></a>
                </div>
                <div class="div2-inner2">
                    <a href="./File/Nandini's Resume.pdf" download target="_blank"><button>DOWNLOAD CV</button></a>
                </div>
            </div>
        </div>
        </div>`
        
        const create = document.createElement('div');
        create.innerHTML = experienceTpl;
        const appId = document.getElementById('app');
        appId.append(create);
    }
}

const experience = new Experience();
experience.renderExperienceData();