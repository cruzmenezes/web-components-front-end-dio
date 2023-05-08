class cardNews extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardleft = document.createElement("div");
        cardleft.setAttribute("class", "card_left");

        const autor = document.createElement("span");
        autor.textContent = "By" + (this.getAttribute("autor") || " Anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("contet")

        cardleft.appendChild(autor);
        cardleft.appendChild(linkTitle);
        cardleft.appendChild(newsContent);


        const cardright = document.createElement("div");
        cardright.setAttribute("class", "card_right");

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "/src/components/image/Astronauta.jpg";
        newsImage.alt = "Foto da Notícia";
        cardright.appendChild(newsImage);

        componentRoot.appendChild(cardleft);
        componentRoot.appendChild(cardright);

        return componentRoot;
    }


    style() {
        const style = document.createElement("style");
        style.textContent = `

            .card {
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            
            }
            
            .card_left {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 10px;
            
            }
            
            .card {
                box-shadow: 9px 6px 13px -3px rgba(0, 0, 0, 0.54);
                -webkit-box-shadow: 9px 6px 13px -3px rgba(0, 0, 0, 0.54);
                -moz-box-shadow: 9px 6px 13px -3px rgba(0, 0, 0, 0.54);
            
            }
            
            .card_left>a {
                margin-top: 10px;
                font-size: 35px;
                color: rgb(19, 16, 16);
                text-decoration: none;
                font-weight: 500;
            }
            
            .card_left>p {
                color: rgb(154, 150, 150);
            }
            
            .card_left>span {
                font-weight: 400;
                color: rgb(38, 37, 37);
            }
            
            
            img {
                width: 250px;
                height: 250px;
            }

        `;

        return style;


    }


}

customElements.define("card-news", cardNews);
