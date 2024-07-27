const accordionList = [
    
    {
        id:0,
        title:"Data Sharing & Exploring Using Augmented Reality (A.R.)",
        journal: "Mukt Shabd UGC, Care Journal · Jun 4, 2020",
        link: "https://drive.google.com/file/d/1A38fdH8oGjCayLYYaXoBgi_NtkfbaXpj/view",
        abstract: "This survey paper is on data sharing and data exploring using AR.. We have done a literature survey of four papers. This paper consist of the workflow and the module description of the application as well as the literature survey of all the papers that we have referred. Data sharing and exploring application can be developed using the process of AR. The focus is mainly to design a application to save documentation papers in offices, and other sectors. Mainly, this application can be used in government sectors which uses large number of documentation paper for multiple scheme related choices."
    },
    {
        id:1,
        title:"Origami Inspired Rovers to Boost Mars Explanation",
        abstract: "Origami robots have unique characteristic property to re-configure themselves and serve formultiple purpose during their use. Such potential in newgeneration rovers can be favourable for a wide variety of applications including research in Space technology. They can be the intelligent assistants for the astronauts, even adapt themselves into unique environment of space and explore rough terrains. Self assembly from 2D shapes to 3D structures after the landing makes them special, even reduces the payload and area to carry. Being artificially intelligent they no more require any human interference or help in any working conditions.",
        journal: "Mukt Shabd UGC, Care Journal · Jun 4, 2020",
        link: "https://drive.google.com/file/d/1zzSJJbP9K0KU4gWgG7a6zBQ2Un8r6-Nb/view"
    },
    
]

const pricingList = [
    {
        id:0,
        title:'Single',
        webDesign:250,
        uiDesign:250,
        logoDesign:100,
        photography:300,
        videoEditing:200,
        socialMarketing:150,
    },
    {
        id:1,
        title:'Multiple',
        webDesign:240,
        uiDesign:240,
        logoDesign:90,
        photography:280,
        videoEditing:190,
        socialMarketing:120,
    },
    {
        id:2,
        title:'Day Based',
        webDesign:50,
        uiDesign:50,
        logoDesign:10,
        photography:100,
        videoEditing:70,
        socialMarketing:25,
    },
]

const portfolioList = [
    {
        id:0,
        imgSrc:'assets/images/portfolio-img-1.jpg',
        category:'Web Development',
        title:'Rules Engine',
        intro: 'A Rules Engine for Kiosk Lending for setting up rules and verifying for loan approval from bank',
        startDate:'15/12/2020',
        endDate:'15/03/2021',
    },
    {
        id:1,
        imgSrc:'assets/images/portfolio-img-1.jpg',
        category:'Web Development',
        title:'G9 Gems',
        intro: 'A inventory management system and a authentic certifdicate generator for precious gems for a Jewellery Shop.',
        startDate:'15/12/2020',
        endDate:'15/03/2021',
    },
    
    {
        id:2,
        imgSrc:'assets/images/portfolio-img-1.jpg',
        category:'Web Development',
        title:'Grin Armer',
        intro: 'An E-comerce platform and a Inventory Management Software for a Mushroom Selling business',
        startDate:'15/12/2020',
        endDate:'15/03/2021',
    },

    {
        id:3,
        imgSrc:'assets/images/portfolio-img-1.jpg',
        category:'Web Development',
        title:'Grin Armer',
        intro: 'An E-comerce platform and a Inventory Management Software for a Mushroom Selling business',
        startDate:'15/12/2020',
        endDate:'15/03/2021',
    },
    
    {
        id:4,
        imgSrc:'assets/images/portfolio-img-1.jpg',
        category:'Web Development',
        title:'Bloodbank Management System',
        intro: 'A fully enquiped E platform for performing tests and maintaining bloodbank machinary and inventory',
        startDate:'15/12/2020',
        endDate:'15/03/2021',
    },

    {
        id:5,
        imgSrc:'assets/images/portfolio-img-1.jpg',
        category:'Web Development',
        title:'Ignite',
        intro: 'A E-Learning platform for a online teaching company with features such as daily quiz, content sharing and conducting online tests for more than 500 students.',
        startDate:'15/12/2020',
        endDate:'15/03/2021',
    },
    
    
    {
        id:6,
        imgSrc:'assets/images/portfolio-img-2.jpg',
        category:'Android Development',
        intro: 'A smart app to stream line the garbage collection process for a local council and have a overview stats via nextlevel insigtfull dashboard.',
        title:'Smart Collector',
        startDate:'08/02/2023',
        endDate:'25/03/2023',
    },

    
    {
        id:7,
        imgSrc:'assets/images/portfolio-img-2.jpg',
        category:'Android Development',
        intro: 'A Augmented Reality application to streamline the process of sharing data via a QR code turning into a wall full of Pdfs, images and videos.',
        title:'Buzinga',
        startDate:'08/02/2023',
        endDate:'25/03/2023',
    },

    
    {
        id:8,
        imgSrc:'assets/images/portfolio-img-2.jpg',
        category:'Android Development',
        intro: 'A next level Chating application inspired by the UI of Apple Watch and with bubble heads as chat person.',
        title:'Bubble Chat',
        startDate:'08/02/2023',
        endDate:'25/03/2023',
    },

    {
        id:9,
        imgSrc:'assets/images/portfolio-img-3.jpg',
        category:'Cyber Security',
        intro: 'Created and executed a proof of concept (POC) for the Spectre vulnerability (CVE-2017-5753 and CVE-2017-5715).',
        title:'Practical Implementation and Testing of Spectre Attack',
        startDate:'15/01/2023',
        endDate:'28/02/2023',
    },

    {
        id:10,
        imgSrc:'assets/images/portfolio-img-3.jpg',
        category:'Cyber Security',
        intro: 'Identified and analyzed specific network vulnerabilities and threats, assessing their impact and potential risks.',
        title:'Network Vulnerabilities and Threats Analysis',
        startDate:'15/01/2023',
        endDate:'28/02/2023',
    },

    {
        id:11,
        imgSrc:'assets/images/portfolio-img-3.jpg',
        category:'Cyber Security',
        intro: 'Utilized the CICIDS2017 dataset to identify and segregate network traffic.Applied supervised and unsupervised machine learning algorithms using Python and R',
        title:'Traffic Segregation Using Machine Learning on CICIDS2017 Dataset',
        startDate:'15/01/2023',
        endDate:'28/02/2023',
    },

    {
        id:12,
        imgSrc:'assets/images/portfolio-img-3.jpg',
        category:'Cyber Security',
        intro: 'Investigated critical industry management issues, including potential cyberattacks, incident response techniques, and security solutions, within IoT networks.Conducted seccurity investigations on IoT networks, addressing future cybersecurity issues, supported by the ISO 27035 standard.',
        title:'Cybersecurity Management and Incident Response in IoT Networks',
        startDate:'15/01/2023',
        endDate:'28/02/2023',
    },
    
    {
        id:13,
        imgSrc:'assets/images/portfolio-img-3.jpg',
        category:'AI & ML',
        intro: 'Investigated critical industry management issues, including potential cyberattacks, incident response techniques, and security solutions, within IoT networks.Conducted seccurity investigations on IoT networks, addressing future cybersecurity issues, supported by the ISO 27035 standard.',
        title:'Cybersecurity Management and Incident Response in IoT Networks',
        startDate:'15/01/2023',
        endDate:'28/02/2023',
    },
]

const clientList = [
    {
        id:0,
        imgSrc:"assets/images/client-1.png",
    },
    {
        id:1,
        imgSrc:"assets/images/client-2.png",
    },
    {
        id:2,
        imgSrc:"assets/images/client-3.png",
    },
    {
        id:3,
        imgSrc:"assets/images/client-4.png",
    },
    {
        id:4,
        imgSrc:"assets/images/client-5.png",
    },
    {
        id:5,
        imgSrc:"assets/images/client-6.png",
    },
    {
        id:6,
        imgSrc:"assets/images/client-7.png",
    },
]

const testimonialList = [
    {
        id:0,
        imgSrc:"assets/review/anup.jpeg",
        name:'Anup Warade',
        position:'CTO at SmartDigital WebNMobile Technologies Pvt. Ltd',
        review: "Deepraj Chouhan always amazed me with his development skills and unique methods to solving problems. He is always punctual, his knowledge is vast and extensive. Deepraj Chauhan is a organized and customer-service oriented perfectionist, has no problem to work hard when necessary. Energetic and broad-minded Intern - that's him! Detail oriented team player. Through the last year, we worked on few projects and I was impressed by his manner of doing a great job. I've constantly felt Deepraj Chauhan was one of the best team mates I have ever had the privilege of working with."

    },
    {
        id:1,
        imgSrc:"assets/review/anirudh.jpeg",
        name:'Aniruddha Kalbande',
        position:'Founder and CEO at Fireblaze AI School',
        review: 'Deepraj is a super talented and an amazing tech person. He is a go-to person for any tech-related queries. He is associated with us Fireblaze Technologies Private Limited for more than a year now, He deals with us in the website technologies end. I recommend Deepraj for with 100% assurance, and wish him all the best for the bright future ahead.'

    },
    {
        id:2,
        imgSrc:"assets/review/amruta.jpeg",
        name:'Dr. Amruta Chopade Chimote',
        position:'Co Founder Codemate IT Services',
        review: 'Deepraj have good knowledge of programming. He is excellent in Data science using python. '
    },
]

const blogList = [
    {
        id:0,
        imgSrc:"assets/images/blog-img-1.jpg",
        title:'Top 10 JavaScript Frameworks to Learn in 2022',
        author:'Daisy Moore',
        date:'27 Sep 2022'
    },
    {
        id:1,
        imgSrc:"assets/images/blog-img-2.jpg",
        title:'Integrate ReactJS into a legacy Dojo application',
        author:'Saumya Daga',
        date:'16 June 2023'
    },
    {
        id:2,
        imgSrc:"assets/images/blog-img-3.jpg",
        title:'Go from Markdown to HTML5 with marked-it',
        author:'Jenifer',
        date:'16 Aug 2022'
    },
    {
        id:3,
        imgSrc:"assets/images/blog-img-4.jpg",
        title:'Bootstrap: Creating Menus, Navbars, and Modals',
        author:'Daisy Moore',
        date:'27 Sep 2022'
    },
    {
        id:4,
        imgSrc:"assets/images/blog-img-5.jpg",
        title:'GDPR and WordPress: Why You Need to be Concerned',
        author:'Saumya Daga',
        date:'16 Aug 2023'
    },
    {
        id:5,
        imgSrc:"assets/images/blog-img-6.jpg",
        title:'Web Based CRM Solutions – All You Need to Know',
        author:'Tarun Gupta',
        date:'16 Aug 2022'
    },
]

const layoutList = [
    {
        id:0,
        url:'/',
        imgSrc:"assets/images/home-1.png",
        title:"Home 1 Layout",
    },
    {
        id:1,
        url:'/home-2',
        imgSrc:"assets/images/home-2.png",
        title:"Home 2 Layout",
    },
    {
        id:2,
        url:'/home-3',
        imgSrc:"assets/images/home-3.png",
        title:"Home 3 Layout",
    },
]

export {
    accordionList,
    pricingList,
    portfolioList, 
    clientList, 
    testimonialList,
    blogList,
    layoutList,
}