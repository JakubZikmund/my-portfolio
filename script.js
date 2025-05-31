// Language data
const translations = {
    en: {
        nav: {
            about: 'About',
            portfolio: 'Portfolio',
            contact: 'Contact'
        },
        hero: {
            name: 'Jakub Zikmund',
            subtitle: 'IT Student & Developer from Pilsen',
            cta: 'Portfolio',
            cv: "Download CV",
            projectsLabel: "Projects",
            technologyLabel: "Technologies",
            commitLabel: "Commits"
        },
        about: {
            title: 'About Me',
            paragraphs: [
                {
                    title: 'Hello!',
                    content: 'I am a student of information technology from Pilsen, who has already set up a business at the age of 18 and is trying to gain real experience as soon as possible. I\'m a curious and listening person who was attracted by technology and the possibility to create something of my own in this sci-fi environment.'
                },
                {
                    title: 'My IT background:',
                    content: 'My first project was to create a WordPress website for a small company called INBYT. I\'m glad for this experience because it made me realize how boring I find website development :). After that, we chose a sub-field in high school - I chose “software development”, where we are currently learning Java from a person who is in the business himself and knows how to pass on practical knowledge, which opened the door to a world I\'ve come to like much more than websites. My biggest experience so far are two medium-sized web applications for company called IMONT, which you can find as my portfolio projects. Thanks to them, I went through the entire development process - from design to deploying the applications in Docker containers within the company network.'
                },
                {
                    title: 'Where am I heading?',
                    content: 'Although web application development has moved me forward a lot, I would like to move to developing standalone programs - I am currently interested in C# and Java. My professional goal is to become a team leader and architecture designer, not just staying with the role of a classic programmer, but aiming higher. I know that such a position requires diligence and systematic building of experience, so I have set up this portfolio page to track my level and progress.'
                }
            ],
            technologyLabel: "Technologies",
            certificationLabel: "Certifications" 
        },
        portfolio: {
            title: 'Portfolio',
            subtitle: 'My projects and work',
            projects: [
                {
                    title: 'Employee vacation system',
                    description: 'Web application for employee leave management with requests, approvals, interactive calendar, and user management.',
                    tech: ['ReactJS', 'Redux','TypeScript', 'MongoDB', 'Docker']
                },
                {
                    title: 'IT Helpdesk',
                    description: 'Web application for creating, sharing and prioritizing requests with live chat support for each request.',
                    tech: ['React', 'Redux', 'TypeScript', 'MongoDB', 'Docker', 'Socket IO' ]
                },
                {
                    title: 'Data import from Upgates to Notion database',
                    description: 'Automated import of e-shop orders from Upgates into a Notion database.',
                    tech: ['Javascript']
                },
                {
                    title: 'Hope To See: Google Cloud Backend',
                    description: 'Setting up Google Cloud to analyze images, generate a description from which an MP3 file is created by reading it.',
                    tech: ['Javascript', 'Gemini', 'Google Cloud Platform']
                },
                {
                    title: 'Virus spread simulation',
                    description: 'Simple website simulating virus spread in the Czech Republic using the SIR model.',
                    tech: ['Javascript', 'GeoJSON']
                },
                {
                    title: 'INBYT website',
                    description: 'WordPress website built with Divi Builder by Elegant Themes.',
                    tech: ['WordPress', 'Elegant Themes']
                }
            ]
        },
        contact: {
            title: 'Contact',
            Github: 'Github',
            GithubSubtitle: 'View my code',
            linkedIn: 'LinkedIn',
            linkedInSubtitle: 'Connect with me!',
            contactInfo: 'Contact info',
        },
        footer: {
            copyright: '© 2025 Jakub Zikmund. All rights reserved.'
        },
        terminal: {
            commands: [
                'Welcome on my page! 🚀',
                'IT Student from Pilsen, passionate developer',
                'Building something I can be proud of.',
                'work@jakubzikmund.eu',
                '+420 606 531 045'
            ]
        }
    },
    cs: {
        nav: {
            about: 'O mně',
            portfolio: 'Portfolio',
            contact: 'Kontakt'
        },
        hero: {
            name: 'Jakub Zikmund',
            subtitle: 'IT Student & Developer z Plzně',
            cta: 'Portfolio',
            cv: "Stáhnout Životopis",
            projectsLabel: "Projektů",
            technologyLabel: "Technologií",
            commitLabel: "Commitů"
        },
        about: {
            title: 'O mně',
            paragraphs: [
                {
                    title: 'Zdravím!',
                    content: 'Jsem student informačních technologií z Plzně, který si už v osmnácti založil živnost a snaží se co nejdříve získat reálnou zkušenost. Jsem zvídavý a naslouchavý člověk, kterého oslovily technologie a možnost tvořit v tomto sci-fi prostředí něco vlastního.'
                },
                {
                    title: 'Můj IT background:',
                    content: 'Mým prvním projektem bylo vytvoření WordPressových webových stránek pro malou firmu INBYT. Jsem rád za tuto zkušenost, protože jsem si uvědomil, jak moc nudný je pro mě vývoj webových stránek :). Následně jsme si na střední škole vybírali podobor – já jsem si vybral „vývoj softwaru“, kde se aktuálně učíme Javu od člověka, který sám v oboru podniká a umí praktické znalosti předávat, což mi otevřelo dveře do světa, který se mi začal líbit mnohem více než weby. Moje největší dosavadní zkušenost jsou dvě středně velké webové aplikace pro firmu IMONT, které najdete jako moje projekty v portfoliu. Díky nim jsem prošel celým procesem vývoje – od návrhu až po deploy aplikací v Docker kontejnerech v rámci firemní sítě.'
                },
                {
                    title: 'Kam směřuju?',
                    content: 'Ač mě vývoj webových aplikací posunul hodně dopředu, chtěl bych se přesunout k vývoji samostatných programů – aktuálně mě zajímají C# a Java. Mým profesním cílem je stát se team leaderem a návrhářem architektury, nezůstat jen u role klasického programátora, ale mířit výš. Vím, že na takovou pozici je třeba píle a systematické budování zkušeností, proto jsem si založil tuto stránku s portfoliem, která bude sledovat mou úroveň a pokrok.'
                }
            ],
            technologyLabel: "Technologie",
            certificationLabel: "Certifikace" 
        },
        portfolio: {
            title: 'Portfolio',
            subtitle: 'Moje projekty a práce',
            projects: [
                {
                    title: 'Správa zaměstnaneckých dovolených',
                    description: 'Webová aplikace pro správu zaměstnaneckých dovolených s žádostmi, schvalováním, interaktivním kalendářem a správou uživatelů.',
                    tech: ['ReactJS', 'Redux','TypeScript', 'MongoDB', 'JWT', 'Docker']
                },
                {
                    title: 'IT Helpdesk',
                    description: 'Webová aplikace pro vytváření, sdílení a prioritizaci požadavků s podporou živého chatu u každého požadavku.',
                    tech: ['React', 'Redux', 'TypeScript', 'MongoDB', 'JWT', 'Docker', 'Socket IO' ]
                },
                {
                    title: 'Import dat z Upgates do Notion',
                    description: 'Automatizovaný import objednávek z e-shopu Upgates do databáze v Notionu.',
                    tech: ['Javascript']
                },
                {
                    title: 'Hope To See: Google Cloud Backend',
                    description: 'Nastavení Google Cloudu pro analýzu obrázků, generování popisu, ze kterého vzejde přečtením MP3 soubor.',
                    tech: ['Javascript', 'Gemini', 'Google Cloud Platform']
                },
                {
                    title: 'Simulace šíření viru',
                    description: 'Jednoduchý web simulující šíření viru v ČR pomocí SIR modelu.',
                    tech: ['Javascript', 'GeoJSON']
                },
                {
                    title: 'Webová stránka INBYT',
                    description: 'WordPress web vytvořený pomocí Divi Builderu od Elegant Themes.',
                    tech: ['WordPress', 'Elegant Themes']
                }
            ]
        },
        contact: {
            title: 'Kontakt',
            GithubSubtitle: 'Můj kód',
            linkedInSubtitle: 'Pojďme se spojit!',
            contactInfo: 'Kontaktní údaje',
        },
        footer: {
            copyright: '© 2024 Jakub Zikmund. Všechna práva vyhrazena.'
        },
        terminal: {
            commands: [
                'Vítejte na mé stránce! 🚀',
                'IT Student z Plzně, nadšený vývojář',
                'Budování a rozvíjení toho, co mi dává smysl.',
                'work@jakubzikmund.eu',
                '+420 606 531 045',
            ]
        }
    }
};

// Current language - default to English
let currentLanguage = 'en';


// Terminal state
let terminalIndex = 0;
let typingText = '';
let isTyping = false;
let terminalTimeout;

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    updateContent();
    startTerminalLoop();
});

// Terminal infinite loop
function startTerminalLoop() {
    clearTimeout(terminalTimeout);
    terminalIndex = 0;
    typingText = '';
    isTyping = false;
    typeNextCommand();
}

function typeNextCommand() {
    if (isTyping) return;
    
    const commands = translations[currentLanguage].terminal.commands;
    const command = commands[terminalIndex];
    
    if (!command) {
        // Restart the loop
        terminalIndex = 0;
        terminalTimeout = setTimeout(() => {
            typeNextCommand();
        }, 2000);
        return;
    }
    
    isTyping = true;
    typingText = '';
    const typingElement = document.getElementById('typing-text');
    
    function typeChar() {
        if (typingText.length < command.length) {
            typingText += command.charAt(typingText.length);
            typingElement.textContent = typingText;
            terminalTimeout = setTimeout(typeChar, 50);
        } else {
            isTyping = false;
            terminalIndex++;
            terminalTimeout = setTimeout(() => {
                typeNextCommand();
            }, 2000);
        }
    }
    
    typeChar();
}


// Add ripple animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes rippleExpand {
        0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
        }
        100% {
            transform: translate(-50%, -50%) scale(3);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);


// Scroll to section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Language toggle
function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'cs' : 'en';
    document.querySelector('.lang-toggle').innerHTML = currentLanguage === 'en' ? '<img src="public/cz_flag.png" alt="CS" style="border-radius: 4px;">' : '<img src="public/en_flag.png" alt="EN" style="border-radius: 4px;">';
    updateContent();
    
    // Restart terminal loop with new language
    startTerminalLoop();
}

// Update content based on current language
function updateContent() {
    const t = translations[currentLanguage];
    
    // Update navigation
    document.querySelectorAll('.nav-link').forEach((link, index) => {
        const sections = ['about', 'portfolio', 'contact'];
        link.textContent = t.nav[sections[index]];
    });
    
    // Update hero section
    document.querySelector('.hero-name').textContent = t.hero.name;
    document.querySelector('.hero-subtitle').innerHTML = `<span class="code-brackets">&lt;</span>${t.hero.subtitle}<span class="code-brackets">/&gt;</span>`;
    document.querySelector('.hero-cta .button-text').innerHTML = `<span class="code-brackets">{</span> ${t.hero.cta} <span class="code-brackets">}</span>`;
    document.querySelector('.projects-label').innerHTML = t.hero.projectsLabel;
    document.querySelector('.technologies-label').innerHTML = t.hero.technologyLabel;
    document.querySelector('.commits-label').innerHTML = t.hero.commitLabel;
    
    // Update about section
    document.querySelector('#about .section-title').textContent = t.about.title;
    const aboutParagraphs = document.querySelectorAll('.about-paragraph');
    
    aboutParagraphs.forEach((paragraph, index) => {
        if (t.about.paragraphs[index]) {
            const h3 = paragraph.querySelector('h3');
            const p = paragraph.querySelector('p');
            if (h3 && p) {
                h3.textContent = t.about.paragraphs[index].title;
                p.textContent = t.about.paragraphs[index].content;
            }
        }
    });

    document.querySelector('.tech-label').textContent = t.about.technologyLabel;
    document.querySelector('.cert-label').textContent = t.about.certificationLabel;
    
    // Update portfolio section
    document.querySelector('#portfolio .section-title').textContent = t.portfolio.title;
    document.querySelector('#portfolio .section-subtitle').textContent = t.portfolio.subtitle;
    
    const projectWindows = document.querySelectorAll('.project-window');
    projectWindows.forEach((window, index) => {
        if (t.portfolio.projects[index]) {
            const project = t.portfolio.projects[index];
            
            
            // Update project info
            window.querySelector('.project-info h3').textContent = project.title;
            window.querySelector('.project-info p').textContent = project.description;
            
            const techStack = window.querySelector('.tech-stack');
            techStack.innerHTML = '';
            project.tech.forEach(tech => {
                const techTag = document.createElement('span');
                techTag.className = 'tech-tag';
                techTag.textContent = tech;
                techStack.appendChild(techTag);
            });
        }
    });
    
    // Update contact section
    document.querySelector('#contact .section-title').textContent = t.contact.title;
    
    document.querySelector('.info-contact').textContent = t.contact.contactInfo;
    document.querySelector('.linkedin-subtext').textContent = t.contact.linkedInSubtitle;
    document.querySelector('.github-subtext').textContent = t.contact.GithubSubtitle;

    // Update footer
    document.querySelector('.footer p').textContent = t.footer.copyright;
}

// Performance optimization: throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(function() {
    // Additional scroll-based animations can be added here
}, 16)); // ~60fps