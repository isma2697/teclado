class Teclado{
    constructor(){
        this.keys = document.querySelectorAll('.keys');
        this.spaceKey = document.querySelector('.space_key');
        this.shift_left = document.querySelector('.shift_left');
        this.shift_right = document.querySelector('.shift_right');
        this.alt_key = document.querySelector('.alt_key');
        this.caps_lock_key = document.querySelector('.caps_lock_key');
        this.toggle_circle = document.querySelector('.toggle_circle');
        this.night_mode = document.querySelector('.night_mode');
        this.body = document.querySelector('body');
        this.text_input = document.querySelector('.text');
        this.change_color = document.querySelector('.change_light_color');
        this.colors_input = document.querySelector('.colors_input');
        this.keyboard_lights = document.querySelector('.keyboard_lights');
        this.keyboard_wrapp = document.querySelector('.keyboard_wrapp');
        this.arrayShift={'º':'ª','1':'!','2':'"','3':'·','4':'$','5':'%','6':'&','7':'/','8':'(','9':')','0':'=','\'':'?','¡':'¿','`':'^','+':'*','ç':'Ç',',':';','.':':','-':'_','<':'>'};
        this.arrayAlt ={'1':'|','2':'@','3':'#','4':'~','5':'€','6':'¬','7':'{','8':'[','9':']','0':'}'};
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
                    console.log("hola"+e.code);
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
                },100)
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
            this.keyboard_lights.style.transition = "all 1s";
        }
        , 1000);
    }
    



    mousedown(){
        for(let i = 0; i < this.keys.length; i++) {
            this.keys[i].addEventListener('mousedown',(e) => {
                const theKey = this.keys[i].getAttribute('keyname');
                const idKey = this.keys[i].getAttribute('id');
                console.log(e.target);
                
                
                if(!(theKey == 'Caps Lock')) {
                    this.keys[i].classList.add('active');
                    console.log(idKey);
                    console.log(this.keys[i].getAttribute('keyname'));
                    if (!(theKey == 'Shift'|| theKey == 'Ctrl' || theKey == 'Alt' || theKey == 'Win' || theKey == 'Backspace' || theKey == 'Tab' || theKey == 'Enter'|| theKey =='Fn')) {

                        if(this.caps_lock_key.classList.contains('active')) {
                            this.text_input.value += theKey.toUpperCase();
                        } 
                        else if(this.shift_left.classList.contains('active') || this.shift_right.classList.contains('active')) {
                            if (this.arrayShift[theKey]) {
                                this.text_input.value += this.arrayShift[theKey];
                            } else {    
                                this.text_input.value += theKey;
                            }
                        }
                        else if(this.alt_key.classList.contains('active')) {
                            if (this.arrayAlt[theKey]) {
                                this.text_input.value += this.arrayAlt[theKey];
                            } else {    
                                this.text_input.value += theKey;
                            }
                        }
                        else {
                            this.text_input.value += theKey.toLowerCase();
                        }



                            
                    } 
                }

                if(theKey == 'Backspace') {
                    this.text_input.value = this.text_input.value.slice(0, -1);
                }
                if(theKey == 'Tab') {
                    this.text_input.value += '    ';
                } 
                if(theKey == 'Caps Lock') {
                    this.caps_lock_key.classList.toggle('active');
                }
                if(idKey == 'space_key') {
                    this.text_input.value += ' ';
                }
               
            }) 
        }
    }

    mouseup(){
        for(let i = 0; i < this.keys.length; i++) {
            this.keys[i].addEventListener('mouseup',() => {
                if(!(this.keys[i].getAttribute('keyname') == 'Caps Lock')) {
                    this.keys[i].classList.remove('active')
                }
            })
        }
    }

    
}

const teclado = new Teclado();
teclado.init();










