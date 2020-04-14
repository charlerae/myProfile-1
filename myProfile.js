window.addEventListener("DOMContentLoaded", event => {
    const addElement = () => {
    
        const nameElement = document.createElement('h1');
        nameElement.setAttribute('id', 'name');
        nameElement.setAttribute('class', 'my-name');
        const name = document.createTextNode('Kristen Chauncey');
        nameElement.appendChild(name);
        document.body.appendChild(nameElement);

        const picOfMe = document.createElement('img');
        picOfMe.setAttribute('id', 'me');
        picOfMe.setAttribute('class', 'my-pic');
        picOfMe.setAttribute('src', '/home/kristen/Desktop/myProfile/me.jpg');
        picOfMe.setAttribute('alt', 'picture of me with red hair and glasses');
        document.body.appendChild(picOfMe);

        const me = document.getElementById('me');
        me.addEventListener('click', function() {
            alert('Hey! Swiper no swiping!')
        })
        const clockDiv = document.createElement("div");
          clockDiv.setAttribute("id", "clock");
        //   document.body.appendChild(clockDiv);
        function pad2(number) {
   
            return (number < 10 ? '0' : '') + number
          
       }

        const time = () => {
            const date = new Date();
            const seconds = date.getSeconds();
            const minutes = date.getMinutes();
            const hours = date.getHours();
            return clockDiv.innerHTML = hours + ":" + pad2(minutes) + ":" + pad2(seconds);
          
        };
      
        const myList = document.createElement('ul');
        myList.setAttribute('id', 'details');
        myList.setAttribute('class', 'my-details');
        document.body.appendChild(myList);
        const detailFunc = () => {
        const detailsArr = [
            "<li>I am a mother and a wife.</li>",
            "<li>I have 10 pets: 3 dogs, 5 cats, a ferret and a dragon.</li>",
            "<li>I am a gamer and an overall uber-nerd.</li>",
            "<li>I am a Capricorn! #MermaidGoat!</li>",
            `<li>I live in Galveston, Texas, and it's currently ${time()} here.</li>`
          ];
          
          const liString = detailsArr.join(" ");
          const listElement = document.getElementById("details");
          listElement.innerHTML = liString;
        }
        const countDown = document.createElement('div');
        countDown.setAttribute('id', 'demo');
        document.body.appendChild(countDown);
        const deadline = new Date("Dec 30, 2020 00:00:00").getTime();
        var x = setInterval(function() { 
            var now = new Date().getTime(); 
            var t = deadline - now; 
            var days = Math.floor(t / (1000 * 60 * 60 * 24)); 
            var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
            var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
            var seconds = Math.floor((t % (1000 * 60)) / 1000); 
            document.getElementById("demo").innerHTML = 'It is ' + days + "d "  
            + hours + "h " + minutes + "m " + seconds + "s " + ' until my 38th birthday!'; 
                if (t < 0) { 
                    clearInterval(x); 
                    document.getElementById("demo").innerHTML = "EXPIRED"; 
                } 
            }, 1000); 

        setInterval(detailFunc, 500);
    }
    addElement();
        // Your Javascript goes here
  });

  
    