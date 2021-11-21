const express = require('express');
const exphbs  = require('express-handlebars');
const path = require('path');

// console.log( exphbs );

const app = express();
const port = process.env.PORT || '4400';

app.use(express.static(path.join(__dirname, '/public')));

app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    partialsDir: path.join(__dirname, 'views', 'partials')
}));

app.get('/', (req, res) => { 
    const templateInfo = {};

    const menu = [
        { label: "Home", url: '/' },
        { label: "Portfolio", url: '/#portfolio' }
    ];

    templateInfo['menu'] = menu;

    const skills_section = {
        section_title: 'Skills',
        section_intro: '(Proficiency is shown for every Skill and Technology... even when we know it: proficiency CAN be improved...)',
        left_skills_box: {
            box_icon: 'fas fa-code',
            box_title: 'Web Development',
            skills_entries: [
                {
                    technologies: [
                        { tech: 'HTML', note: '' },
                        { tech: 'CSS3', note: 'SCSS' },
                        { tech: 'JavaScript', note: 'jQuery, ES6, ES7' },
                        { tech: 'Bootstrap', note: '' }  
                    ],
                    proficiency: 'Expert'
                },
                {
                    technologies: [
                        { tech: 'MERN Stack + GraphQL', note: '' } 
                    ],
                    proficiency: 'Proficient'
                },
                {
                    technologies: [
                        { tech: 'PHP, MySQL, WordPress', note: 'Themes creation from scratch, Plugin creation, Gutemberg, Headless CMS, WooCommerce' } 
                    ],
                    proficiency: 'Highly Proficient'
                },
                {
                    technologies: [
                        { tech: 'Shopify eCommerce', note: 'Including Theme Creation and API' } 
                    ],
                    proficiency: 'Fair'
                },
                {
                    technologies: [
                        { tech: 'C# + .NET Technologies', note: 'MVC, .NET Core, Blazor' } 
                    ],
                    proficiency: 'Highly Proficient for C#, Proficient and Improving for .NET Technologies'
                }
            ]
        },
        right_skills_box: {
            box_icon: 'fas fa-globe-americas',
            box_title: 'Miscellaneous',
            skills_entries: [
                {
                    technologies: [
                        { tech: 'Git', note: '' } 
                    ],
                    proficiency: 'Highly Proficient'
                },
                {
                    technologies: [
                        { tech: 'WCAG 2.1', note: 'Accessibility' } 
                    ],
                    proficiency: 'Highly Proficient and Improving'
                },
                {
                    technologies: [
                        { tech: 'SQL', note: 'In general, not tied to any technology or framework' } 
                    ],
                    proficiency: 'Proficient'
                },
                {
                    technologies: [
                        { tech: 'Unity3d', note: 'Videogames programming' } 
                    ],
                    proficiency: 'Proficient to a hobbie level'
                }
            ]
        },
        section_footnote: '**As always, if you need a SPECIFIC skill that is not listed above and you are flexible enough to wait a fair studying time, I do NOT have problems with learning it.'
    };

    templateInfo['skills_section'] = skills_section;

    res.render('home', { 
        data: templateInfo,
        title: 'Full Stack Developer'
    }); 
});

app.listen( port, () => { console.log('Server is Running') } );