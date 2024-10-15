import './experience.css'

export class Experience {
    constructor() { }

    renderExperienceData() {
        const experienceTpl = `<div class="experience-Main-Container">
        <div class="experience-Main-Div1">
            <img src="https://pxdraft.com/themeforest/krinky/assets/img/aboutme-banner.png"/>
        </div>
        <div class="experience-Main-Div2">
            <h1>I'm a Front-end Developer.</h1>
            <p>Hello,

My name is Nandini Atri, and I am an experienced front-end developer with 1.5 years of professional experience in front-end technologies. I have a strong foundation in HTML, CSS, JavaScript, and React.js, and I have successfully contributed to multiple projects, enhancing user experiences and ensuring responsive design.

I am excited to explore any front-end and web development positions available at your company. You can find further details about my experience and projects in my attached resume.
<br>
Please feel free to reach out to me at:
<br>
Phone: 8791711016  <br>
Email: atrinandini8@gmail.com
<br>
Thank you for considering my application. I look forward to the opportunity to contribute to your team.
<br>
Best regards,  
<br>
Nandini Atri</p>

            <div class="experience-Main-Div2-InnerDiv">
                <div class="div2-inner1">
                    <a href="#contactid"><button>CONTACT ME</button></a>
                </div>
                <div class="div2-inner2">
                    <a href="./File/Nandini.pdf" download target="_blank"><button>DOWNLOAD CV</button></a>
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