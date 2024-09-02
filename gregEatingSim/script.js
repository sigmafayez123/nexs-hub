        document.addEventListener('keydown', function(event) {
            var myDiv = document.getElementById('myDiv');
            var currentLeft = parseInt(window.getComputedStyle(myDiv).left);
            var currentTop = parseInt(window.getComputedStyle(myDiv).top);

            switch(event.key) {
                case 'ArrowLeft': 
                    myDiv.style.left = (currentLeft - 50) + 'px';
                    break;
                case 'ArrowRight': 
                    myDiv.style.left = (currentLeft + 50) + 'px';
                    break;
                case 'ArrowUp': 
                    myDiv.style.top = (currentTop - 50) + 'px';
                    break;
                case 'ArrowDown': 
                    myDiv.style.top = (currentTop + 50) + 'px';
                    break;
            }

            if (isColliding(myDiv, div2)) {
                add()
            }

            if (isColliding(myDiv, div3)) {
                add1()
            }

            if (isColliding(myDiv, div4)) {
                add2()
            }

            if (isColliding(myDiv, div5)) {
                add3()
            }

            function add() {
                document.getElementById('number').innerHTML = +1 
                document.getElementById('div2').style.display = "none";
            }

            function add1() {
                document.getElementById('number').innerHTML = +1 
                document.getElementById('div3').style.display = "none";
            }

            function add2() {
                document.getElementById('number').innerHTML = +1 
                document.getElementById('div4').style.display = "none";
            }

            function add3() {
                document.getElementById('number').innerHTML = +1 
                document.getElementById('div5').style.display = "none";
            }
        });

            
        function isColliding(div1, div2) {
            var rect1 = div1.getBoundingClientRect();
            var rect2 = div2.getBoundingClientRect();

            return !(rect1.right < rect2.left || 
                    rect1.left > rect2.right || 
                    rect1.bottom < rect2.top || 
                    rect1.top > rect2.bottom);
        }

        function isColliding(div1, div3) {
            var rect1 = div1.getBoundingClientRect();
            var rect2 = div2.getBoundingClientRect();

            return !(rect1.right < rect2.left || 
                    rect1.left > rect2.right || 
                    rect1.bottom < rect2.top || 
                    rect1.top > rect2.bottom);
        }

        function isColliding(div1, div4) {
            var rect1 = div1.getBoundingClientRect();
            var rect2 = div2.getBoundingClientRect();

            return !(rect1.right < rect2.left || 
                    rect1.left > rect2.right || 
                    rect1.bottom < rect2.top || 
                    rect1.top > rect2.bottom);
        }

        function isColliding(div1, div5) {
            var rect1 = div1.getBoundingClientRect();
            var rect2 = div2.getBoundingClientRect();

            return !(rect1.right < rect2.left || 
                    rect1.left > rect2.right || 
                    rect1.bottom < rect2.top || 
                    rect1.top > rect2.bottom);
        }
