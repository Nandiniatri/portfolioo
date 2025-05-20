// import './experience.css';

// export class Experience {
//     constructor() { }

//     renderExperienceData() {
//         const experienceTpl = `
//         <div class="experience-Main-Container">
//             <div class="experience-Main-Div1">
//                 <img src="https://pxdraft.com/themeforest/krinky/assets/img/aboutme-banner.png" alt="About Me Banner" />
//             </div>
//             <div class="experience-Main-Div2">
//                 <h1>I'm a Front-end Developer.</h1>

// <p>
//     I’m <strong>Nandini Atri</strong>, a dedicated and creative Front-end Developer with hands-on skills in 
//     <strong style="color:#FF651C;">HTML</strong>, <strong style="color:#FF651C;">CSS</strong>, <strong style="color:#FF651C;">JavaScript</strong>, and <strong style="color:#FF651C;">React.js</strong>. <br><br>
//     I love bringing ideas to life through clean, responsive, and interactive user interfaces. My goal is to build seamless web experiences that leave a lasting impression.<br><br>
//     I’m open to exciting opportunities where I can contribute, learn, and grow as a developer.<br><br>
//     📞 <strong>8791711016</strong><br>
//     📧 <strong>atrinandini8@gmail.com</strong><br><br>
//     Looking forward to connecting with you!<br><br>
//     Best regards,<br>
//     <strong>Nandini Atri</strong>
// </p>

//                 <div class="experience-Main-Div2-InnerDiv">
//                     <div class="div2-inner1">
//                         <a href="#contactid"><button>CONTACT ME</button></a>
//                     </div>
//                     <div class="div2-inner2">
//                         <a href="/Nandini Atri-Frontend-Resume.pdf" download target="_blank">
//                             <button>DOWNLOAD CV</button>
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </div>`;

//         const create = document.createElement('div');
//         create.innerHTML = experienceTpl;
//         const appId = document.getElementById('app');
//         appId.append(create);
//     }
// }

// const experience = new Experience();
// experience.renderExperienceData();


{/* <p>
    Hello,<br><br>
        My name is Nandini Atri, and I am an experienced front-end developer with 1.6 years of professional experience in
        <b id="frontendB">Front-end Technologies</b>. I have a strong foundation in HTML, CSS, JavaScript, and React.js,
        and I have successfully contributed to multiple projects, enhancing user experiences and ensuring responsive design.
        <br><br>
            I am excited to explore any front-end and web development positions available at your company. You can find further
            details about my experience and projects in my attached resume.
            <br><br>
                Please feel free to reach out to me at:<br>
                    Phone: 8791711016<br>
                        Email: atrinandini8@gmail.com<br><br>
                            Thank you for considering my application. I look forward to the opportunity to contribute to your team.<br><br>
                                Best regards,<br>
                                    Nandini Atri
                                </p> */}

import './experience.css';

export class Experience {
    constructor() { }

    renderExperienceData() {
        const experienceTpl = `
        <div class="experience-Main-Container">
            <div class="experience-Main-Div1">
                <img 
                    src="https://pxdraft.com/themeforest/krinky/assets/img/aboutme-banner.png" 
                    alt="About Me Banner" 
                />
            </div>

            <div class="experience-Main-Div2">
                <h1>I'm a Front-end Developer.</h1>

                <p>
                    I’m <strong style="color:#FF651C;">Nandini Atri</strong>, a passionate and creative Front-end Developer with practical experience in 
                    <strong style="color:#FF651C;">HTML</strong>, 
                    <strong style="color:#FF651C;">CSS</strong>, 
                    <strong style="color:#FF651C;">JavaScript</strong>, and 
                    <strong style="color:#FF651C;">React.js</strong>.<br><br>

                    I love crafting responsive, user-friendly, and visually engaging web interfaces. 
                    My aim is to build web experiences that are not only functional but also delightful.<br><br>

                    I'm actively looking for opportunities to grow, learn, and contribute to exciting projects.<br><br>

                    📞 <strong>8791711016</strong><br>
                    📧 <strong>atrinandini8@gmail.com</strong><br><br>

                    Looking forward to connecting with you!<br><br>
                    Best regards,<br>
                    <strong style="color:#FF651C;">Nandini Atri</strong>
                </p>

                <div class="experience-Main-Div2-InnerDiv">
                    <div class="div2-inner1">
                        <a href="#contactid">
                            <button>CONTACT ME</button>
                        </a>
                    </div>
                    <div class="div2-inner2">
                        <a href="/Nandini Atri-Frontend-Resume.pdf" download target="_blank">
                            <button>DOWNLOAD CV</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        `;

        const create = document.createElement('div');
        create.innerHTML = experienceTpl;
        const appId = document.getElementById('app');
        appId.append(create);
    }
}

const experience = new Experience();
experience.renderExperienceData();
