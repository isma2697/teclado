class Teclado{
    constructor(){
        this.keys = document.querySelectorAll('.keys');
        this.spaceKey = document.querySelector('.space_key');
        this.shift_left = document.querySelector('.shift_left');
        this.shift_right = document.querySelector('.shift_right');
        this.caps_lock_key = document.querySelector('.caps_lock_key');
        this.toggle_circle = document.querySelector('.toggle_circle');
        this.night_mode = document.querySelector('.night_mode');
        this.body = document.querySelector('body');
        this.text_input = document.querySelector('.text');
        this.change_color = document.querySelector('.change_light_color');
        this.colors_input = document.querySelector('.colors_input');
        this.keyboard_lights = document.querySelector('.keyboard_lights');
        this.keyboard_wrapp = document.querySelector('.keyboard_wrapp');
    }

    init(){
        this.setKeyNames();
        this.keyDown();
        this.keyUp();
        this.nightMode();
        this.changeColor();
        this.randomColor();
        this.mousedown();
        this.mouseup();

    }

    setKeyNames(){
        for(let i = 0; i < this.keys.length; i++) {
            // console.log(this.keys[i]);
            this.keys[i].setAttribute('keyname', this.keys[i].innerText);
            this.keys[i].setAttribute('lowerCaseName', this.keys[i].innerText.toLowerCase());
        }
    }

    keyDown(){
        window.addEventListener('keydown', (e) => {
            for(let i = 0; i < this.keys.length; i++) {
                if(e.key == this.keys[i].getAttribute('keyname' ) || e.key == this.keys[i].getAttribute('lowerCaseName')) {
                    console.log(typeof(e));
                    this.keys[i].classList.add('active')
                    console.log(this.keys[i].getAttribute('keyname'));
                }
                if(e.code == 'Space') {
                    this.spaceKey.classList.add('active')
                }
                if(e.code == 'ShiftLeft') {
                    this.shift_right.classList.remove('active')
                }
                if(e.code == 'ShiftRight') {
                    this.shift_left.classList.remove('active')
                }
                if(e.code == 'CapsLock') {
                    this.caps_lock_key.classList.toggle('active');
                }
            }
        })
    }

    keyUp(){
        window.addEventListener('keyup', (e) => {
            for(let i = 0; i < this.keys.length; i++) {
                if(e.key == this.keys[i].getAttribute('keyname' ) || e.key == this.keys[i].getAttribute('lowerCaseName')) {
                    this.keys[i].classList.remove('active')
                    this.keys[i].classList.add('remove')
                }
                if(e.code == 'Space') {
                    this.spaceKey.classList.remove('active');
                    this.spaceKey.classList.add('remove');
                }
                if(e.code == 'ShiftLeft') {
                    this.shift_right.classList.remove('active')
                    this.shift_right.classList.remove('remove')
                }
                if(e.code == 'ShiftRight') {
                    this.shift_left.classList.remove('active')
                    this.shift_left.classList.remove('remove')
                }
                setTimeout(()=> {
                    this.keys[i].classList.remove('remove')
                },200)
            }
        })
    }

    nightMode(){
        this.night_mode.addEventListener('click',() => {
            this.toggle_circle.classList.toggle('active');
            this.body.classList.toggle('active');
            this.night_mode.classList.toggle('active');
            this.keyboard_wrapp.classList.toggle('active');
            this.text_input.classList.toggle('active');
            this.change_color.classList.toggle('active');
            for(let i = 0; i < this.keys.length; i++) {
                this.keys[i].classList.toggle('keys_night')
            }
        })
    }

    changeColor(){
        this.colors_input.addEventListener('input',() => {
            for(let i = 0; i < this.keys.length; i++) {
                this.keys[i].style.color = this.colors_input.value
            }
            this.keyboard_lights.style.background = this.colors_input.value;
        })
    }

    randomColor(){
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }
        getRandomInt(0, 255);
        setInterval(() => {
            let randomColor = getRandomInt(0,16777215).toString(16);
            this.keyboard_lights.style.background = "#" + randomColor;
            //con transition
            this.keyboard_lights.style.transition = "all 1s";
        }
        , 1000);
    }

    // lo mismo pero pulsando con el click en la tecla y no con el teclado 

    

    mousedown(){
        window.addEventListener('mousedown', (e) => {
            for(let i = 0; i < this.keys.length; i++) {
                if(e.key == this.keys[i].getAttribute('keyname' ) || e.key == this.keys[i].getAttribute('lowerCaseName')) {
                    this.keys[i].classList.add('active')
                    console.log(this.keys[i].getAttribute('keyname'));
                }
                if(e.code == 'Space') {
                    this.spaceKey.classList.add('active')
                }
                if(e.code == 'ShiftLeft') {
                    this.shift_right.classList.remove('active')
                }
                if(e.code == 'ShiftRight') {
                    this.shift_left.classList.remove('active')
                }
                if(e.code == 'CapsLock') {
                    this.caps_lock_key.classList.toggle('active');
                }
            }
        })
    }

    mouseup(){
        window.addEventListener('mouseup', (e) => {
            for(let i = 0; i < this.keys.length; i++) {
                if(e.key == this.keys[i].getAttribute('keyname' ) || e.key == this.keys[i].getAttribute('lowerCaseName')) {
                    this.keys[i].classList.remove('active')
                    this.keys[i].classList.add('remove')
                }
                if(e.code == 'Space') {
                    this.spaceKey.classList.remove('active');
                    this.spaceKey.classList.add('remove');
                }
                if(e.code == 'ShiftLeft') {
                    this.shift_right.classList.remove('active')
                    this.shift_right.classList.remove('remove')
                }
                if(e.code == 'ShiftRight') {
                    this.shift_left.classList.remove('active')
                    this.shift_left.classList.remove('remove')
                }
                setTimeout(()=> {
                    this.keys[i].classList.remove('remove')
                },200)
            }
        })
    }



    

  





}

const teclado = new Teclado();
teclado.init();










