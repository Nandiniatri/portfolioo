import './project.css'

export class Project {
    constructor() { }

    renderProjectData() {
        const projectTpl = `<div id="projectid">
            <h1>LATEST PROJECTS</h1>
            
            <div class="project-main-div">

              <div class="project-grid"> 
                <div class="projectinfo">
                    <img src="https://sdmntprwestus.oaiusercontent.com/files/00000000-8f44-6230-8873-9c19d29452a6/raw?se=2025-05-20T10%3A28%3A42Z&sp=r&sv=2024-08-04&sr=b&scid=d4ff3bef-24d6-50e1-aec6-6e6c1586b448&skoid=61180a4f-34a9-42b7-b76d-9ca47d89946d&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-20T00%3A32%3A18Z&ske=2025-05-21T00%3A32%3A18Z&sks=b&skv=2024-08-04&sig=3YNUjjgbFgS1b0sX7MtMWCZfyE%2BYwjVigG6ssR6L4dc%3D"/>
                </div>
                <div class="projectinfo">
                    <h4>FlixBox</h4>
                    <p>This project is a cartoon animation-based website that showcases proper animated videos. It features interactive elements and dynamic content, providing users with an engaging animation experience. The main focus of the website is visual storytelling and fun animations, designed to entertain viewers.</p>
                    <div class="project-All-Btns-Div">
                        <a target="_blank" href="https://flixid-website.netlify.app/"><button>VIEW PROJECT</button></a>
                        <a target="_blank" href="https://github.com/Nandiniatri/Flix.Id"><button>VIEW IN GITHUB</button></a>
                    </div>
                </div>
            </div>

            <!-- Stanza Living Clone Project -->
            <div class="project-grid"> 
                <div class="projectinfo">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG6L1EOKMX_TAKWdRxihIkgXYojtfrsTZQyv2AdaflV0bX-LEgn4jTm0i-5jaBgly2al8&usqp=CAU"/>
                </div>
                <div class="projectinfo">
                    <h4>Stanza Living Clone</h4>
                    <p>Move-in to Fully Furnished, Hassle free PG at Zero Brokerage & One Month Security Deposit. Private & Sharing Furnished Rooms for Students & Working Professional with WiFi, Food...</p>
                    <div class="project-All-Btns-Div">
                        <a target="_blank" href="https://stanzaliving-copy.netlify.app/"><button>VIEW PROJECT</button></a>
                        <a target="_blank" href="https://github.com/Nandiniatri/PG-Finder-Clone"><button>VIEW IN GITHUB</button></a>
                    </div>
                </div>
            </div>

            <!-- Macstore Replica Project -->
            <div class="project-grid"> 
                <div class="projectinfo">
                    <img src="https://d2oto3d7z6t29c.cloudfront.net/entries/transformed/75/f5/457769_3eb498eb5da94f4fbcb44a65e4ecc8d9.jpg"/>
                </div>
                <div class="projectinfo">
                    <h4>Macstore Replica</h4> 
                    <p>Apple Website Clone – A responsive and visually stunning replica of Apple's official website. Designed to showcase the latest products, services, and innovations, this clone includes a sleek user interface and smooth navigation, providing a premium browsing experience similar to Apple's original site.</p>
                    <div class="project-All-Btns-Div">
                        <a target="_blank" href="https://macstore-replica.netlify.app/"><button>VIEW PROJECT</button></a>
                        <a target="_blank" href="https://github.com/Nandiniatri/Apple-Clone-"><button>VIEW IN GITHUB</button></a>
                    </div>
                </div>
            </div>

            <!-- Doccure Clone Project -->
            <div class="project-grid"> 
                <div class="projectinfo">
                    <img src="https://sdmntprwestus2.oaiusercontent.com/files/00000000-ca50-61f8-a487-49d502e3e56e/raw?se=2025-05-20T10%3A36%3A54Z&sp=r&sv=2024-08-04&sr=b&scid=d8c01db9-7fbc-5708-997c-c50b1f190d3d&skoid=61180a4f-34a9-42b7-b76d-9ca47d89946d&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-20T00%3A30%3A09Z&ske=2025-05-21T00%3A30%3A09Z&sks=b&skv=2024-08-04&sig=gqz5012rr9f6I3MkQsFg4LNpFslTA36sHT4y5pKUWAE%3D"/>
                </div>
                <div class="projectinfo">
                    <h4>Doccure Clone</h4> 
                    <p>Doccure – Doctor Appointment Booking Template is an appointment management and patient management template. We provide a simple and easy booking online system.</p>
                    <div class="project-All-Btns-Div">
                        <a target="_blank" href="https://react-doccure-clone.netlify.app/"><button>VIEW PROJECT</button></a>
                        <a target="_blank" href="https://github.com/Nandiniatri/React-Doccure-Website"><button>VIEW IN GITHUB</button></a>
                    </div>
                </div>
            </div>

            <!-- Pinterest Clone Project -->
            <div class="project-grid"> 
                <div class="projectinfo">
                    <img src="https://miro.medium.com/v2/resize:fit:960/0*qMSoOn1GSLx1dNMx"/>
                </div>
                <div class="projectinfo">
                    <h4>Pinterest Clone</h4>
                    <p>Pinterest is a visual discovery engine for finding ideas like recipes, home and style inspiration, and more. You'll always find ideas to spark inspiration. When you discover Pins you love, save them to boards to keep your ideas organized and easy to find.</p>
                    <div class="project-All-Btns-Div">
                        <a target="_blank" href="https://pinterest-clone-nandini.netlify.app/"><button>VIEW PROJECT</button></a>
                        <a target="_blank" href="https://github.com/Nandiniatri/Pinterest-Clone"><button>VIEW IN GITHUB</button></a>
                    </div>
                </div>
            </div>

          
        </div>
    </div>
</div>`;

        const create = document.createElement('div');
        create.innerHTML = projectTpl;
        create.setAttribute('id', 'project')
        const appId = document.getElementById('app');
        appId.append(create);
    }
}

const project = new Project();
project.renderProjectData();

