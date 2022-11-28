// typing animation 
var typed = new Typed(".typing",{
    strings:["build things for the web.","love to read.","like to edit videos, photos.","enjoy playing online games."],
    typeSpeed:100,
    BackSpeed:40,
    loop:true
})

// Aside 
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
    for(let i=0; i<totalNavList; i++)
    {
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function() {
            removeBackSection();
            for(let j=0; j<totalNavList; j++)
            {
                if(navList[j].querySelector("a").classList.contains("active"))
                {
                    addBackSection(j);
                //    allSection[j].classList.add("back-section");
                }
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active")
            showSection(this);
            if (window.innerWidth < 1200)
            {
                asideSectionTogglerBtn();
            }
        })
    }
    function removeBackSection()
    {
        for(let i=0; i<totalSection; i++)
        {
            allSection[i].classList.remove("back-section");
            }
        }
        function addBackSection(num)
        {
            allSection[num].classList.add("back-section");
        }

    function showSection(element)
    {
        for(let i=0; i<totalSection; i++)
        {
            allSection[i].classList.remove("active");
        }
        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active")
    }
    function updateNav(element)
    {
        for(let i=0; i<totalNavList; i++)
        {
            navList[i].querySelector("a").classList.remove("active");
            const target = element.getAttribute("href").split("#")[1];
            if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
            {
                navList[i].querySelector("a").classList.add("active");
            }
        }
    }
    document.querySelector(".hire-me").addEventListener("click", function()
    {
        const sectionIndex = this.getAttribute("data-section-index");
        // console.log(sectionIndex)
        showSection(this);
        updateNav(this);
        removeBackSection();
        addBackSection(sectionIndex);
    })
    const navTogglerBtn = document.querySelector(".nav-toggler"),
          aside = document.querySelector(".aside");
          navTogglerBtn.addEventListener("click", () =>
          {
            asideSectionTogglerBtn();
          })
          function asideSectionTogglerBtn()
          {
            aside.classList.toggle("open");
            navTogglerBtn.classList.toggle("open");
            for(let i=0; i<totalSection; i++ )
            {
                allSection[i].classList.toggle("open");
            }
          }


// filter btn animation 
let mixer = mixitup('.row1', {
    selectors: {
        target: '.portfolio-item',
    },
    animation: {
        duration: 500,
    }
});

// display overlay section starts here
const prt_section = document.querySelector(".portfolio");
const zoom_icons = document.querySelectorAll(".zoom-icon");
const modal_overlay = document.querySelector(".modal-overlay");
const images = document.querySelectorAll(".images img");
const prev_btn = document.querySelector(".prev-btn");
const next_btn = document.querySelector(".next-btn");

let currentIndex = 0;

zoom_icons.forEach((icn, i) => 
icn.addEventListener("click", () => {
    prt_section.classList.add("open");
    document.body.classList.add("stopScrolling");
    currentIndex = i;
    changeImage(currentIndex);
})
);

modal_overlay.addEventListener("click", () => {
prt_section.classList.remove("open");
document.body.classList.add("stopScrolling");
});

// for future if I add image to overlay here here here
prev_btn.addEventListener("click", () => {
    if (currentIndex === 0) {
        currentIndex = 9;
    } else {
    currentIndex--;
    }
    changeImage(currentIndex);
});

next_btn.addEventListener("click", () => {
    if (currentIndex === 9) {
        currentIndex = 0;
    } else {
    currentIndex++;
    }
    changeImage(currentIndex);
});

function changeImage(index) {
    images.forEach((img) => img.classList.remove("showImage"));
    images[index].classList.add("showImage");
}