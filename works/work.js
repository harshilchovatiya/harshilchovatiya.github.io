function generateHTML(classname, category, name, link, img, desc, desc1) {
    const html = `
    <div class="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-${classname}">
      <div class="works-item scrolla-element-anim-1 scroll-animate" data-animate="active">
        <div class="image">
          <div class="img">
            <a>
              <img class="lazyload" decoding="async" src="${img}" data-src="${img}" alt="${name}">
              <span class="overlay"></span>
            </a>
          </div>
        </div>
        <div class="desc">
          <span class="category">${category}</span>
          <h5 class="name">
            <a href="">${name}</a>
          </h5>
          <div class="text">
            <p>${desc}</p>
          </div>
          <a href="" class="">See project</a>
        </div>
        <div class="lazyload bg-img" data-bg="../images/pat-2.png"> </div>
      </div>
    </div>
  `;
    return html;
}

const names = ['Brandly', "W.I.F Infotech", "CricAt - Live Score & Update 2023", "Instagram Clone", "YouTube Clone", "Quotes (Api)", "Todo App (Api)", "Wallpaper App"];



var items = [{
        classname: "appdevelopment",
        category: "App Development",
        name: names[0],
        link: "../portfolio/item/all/index.html?name=${names[0]}",
        img: "../wp-content/uploads/2021/11/brandly.jpg",
        desc: "Redesign the Brandly app it a base like festivel post maker.",
        desc1: "Brandly - Festival Poster Maker is a business poster maker app that helps individuals, entrepreneurs, and companies to design Daily Post, Ads Banners, Festival Poster, Digital Post, Marketing Post, Business Poster, Branding Post, Business Marketing Content, Festival Design, Festival Graphic Design, Festival Images, Social Media Post, Digital post, Digital Card, Political Election Publicity, Ads Banner, New Service Introduction, Festival Photo Frame, Greeting, Festive Card, graphics design concept & ideas for digital marketing to promote business.",
        desc2: `With this festival poster maker with a photo app, you can create amazing marketing posts, festival images, business posters, marketing festival images, social media posts, festival posts, daily posts, business marketing, business promotion, banner banavo, festival post for 365 days, digital post, digital post, adbanao, digital advertisements such as Instagram ads, Instagram stories, Facebook ads, and more. Download it & get ready to share it with the world.
        Photo Maker, Videos Maker, Social Media Post Maker, Business Card Maker: Your One-Stop App For Everything “Free Marketing”`,
        desc3: `Features:
        FREE business card maker: Easily create eye-catchy and professional-looking business cards using 100+ custom templates.
        Marketing images & videos: The attention span of digital users is less than 5 seconds. Attract and engage them meaningfully with thousands of downloadable marketing images & videos.`,
        desc4: ` Custom video maker: Fast, easy, and free video
        maker with free templates, layouts, and music. Add
        transitions and animations to make the video more
        engaging and compelling. Easily integrate
        voiceovers, sound effects, or audio tracks. Use the
        app as your free slideshow maker or video collage
        maker.
        <br> Social media post maker: Create impressive
        graphic designs and social media posts for social
        media marketing. It is the easiest Facebook post
        maker and can also be used as an Instagram image
        maker or post maker. Also, create motivational posts
        using the app..`

    },
    {
        classname: "webdevelopment",
        category: "Web Development",
        name: names[1],
        link: 'navigating_link',
        img: "../wp-content/uploads/2021/11/work7.jpg",
        desc: "W.I.F Infotech it's an Information and Services base company i provide the Websiet for their company.",
        desc1: `zf`,
        desc2: `SFsdf`,
        desc3: `zxvx`,
        desc4: `VDVDVdsvvsf`,
    },
    {
        classname: "appdevelopment",
        category: "App Development",
        name: names[2],
        link: "",
        img: "../wp-content/uploads/2021/11/cricat.jpg",
        desc: "CricAt - Live Cricket Scores is here to transform your Live Cricket Experience knowing the fact that Cricket is more than a game to you.",
        desc1: ``,
        desc2: ``,
        desc3: ``,
        desc4: ``,
    },
    {
        classname: "appdevelopment",
        category: "App Development",
        name: names[3],
        img: "../wp-content/uploads/2021/11/ig_clone.png",
        desc: "Instagram Clone - Woring live post, like, Comments, Folowing, Flowers all thing are working",
        link: "../wp-content/uploads/2021/11/work1.jpg",
        desc1: ``,
        desc2: ``,
        desc3: ``,
        desc4: ``,
    },
    {
        classname: "webdesign",
        category: "Web Design",
        name: names[4],
        img: "../wp-content/uploads/2021/11/single8.jpg",
        desc: "Design Youtube Website",
        link: "../wp-content/uploads/2021/11/single8.jpg",
        desc1: ``,
        desc2: ``,
        desc3: ``,
        desc4: ``,
    },
    {

        classname: "webdevelopment",
        name: names[5],
        category: "Web Developing",
        img: "../wp-content/uploads/2021/11/quotes.png",
        desc: "Quotes generator through api and you can also heare the quotes (text to speech) and also shere this Quotes, and copy to clipbord its working.",
        link: "",
        desc1: ``,
        desc2: ``,
        desc3: ``,
        desc4: ``,

    },
    {
        classname: "appdevelopment",
        name: names[6],
        category: "App Development",
        img: "../wp-content/uploads/2021/11/todo.jpg",
        desc: "Todo task creator and get helping in daily life to work todo task and reminde to complate task",
        link: "",
        desc1: ``,
        desc2: ``,
        desc3: ``,
        desc4: ``,
    },
    {
        classname: "appdevelopment",
        name: names[7],
        category: "App Development",
        img: "../wp-content/uploads/2021/11/wallpaper.jpg",
        desc: "Wallpaper app through the pealxe data function of this app is set wallpaper on lock screen, home screen & both screen, also save in the gallary and shere with your friends",
        link: "nextpage.html?name=John",
        desc1: ``,
        desc2: ``,
        desc3: ``,
        desc4: ``,
    }

];



items.forEach(item => {
    // des= descron.find(desc);
    item.link = `../portfolio/item/all/index.html?name=${item.name}
    &img=../../${item.img}
    &desc1=${item.desc1}
    &desc2=${item.desc2}
    &desc3=${item.desc3}
    &desc4=${item.desc4}
    &otherimg=/../${item.img},/../${item.img},/../${item.img}
    &link=http://www.example.com`;
});


let html = "";
for (let i = 0; i < items.length; i++) {
    html += generateHTML(items[i].classname, items[i].category, items[i].name, items[i].link, items[i].img, items[i].desc, );
}

document.getElementById("write").innerHTML = html;


// document.getElementById('name-link').addEventListener('click', function (event) {
//     event.preventDefault(); // Prevent the browser from following the link immediately

//     var name = this.getAttribute('href').split('=')[1]; // Extract the name from the href attribute

//     window.location.href = 'nextpage.html?name=' + name; // Redirect to the next page with the name passed as a URL parameter         
// });