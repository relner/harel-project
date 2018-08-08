let initVaribles = {
    blueButton: null,
    whiteButton: null,
    formWrapper: null,
    myCheckBox: null,
    radiobuttons: null,
    bodyWrapper: null,

    init: function(){
        this.blueButton = $get('blueButton');
        this.whiteButton = $get('whiteButton');
        this.formWrapper = $get('formWrapper');
        this.myCheckBox = $get('myCheckBox');
        this.radiobuttons = $get('.radiobutton');
        this.bodyWrapper = $get('bodyWrapper');
    }
}

let functionManager = {

    init: function(){
        initVaribles.init();
        this.initListeners();
        
    },

    initListeners: function(){
        initVaribles.blueButton.addEventListener('click', this.openClosePrimarySectionBB, false);
        initVaribles.whiteButton.addEventListener('click', this.openClosePrimarySectionWB, false)

        initVaribles.myCheckBox.addEventListener('click', this.selectCheckBox, false);
        
        for (let index = 0; index < initVaribles.radiobuttons.length; index++) {
            initVaribles.radiobuttons[index].addEventListener('click', this.selectRadioButton, false);
        }
    },

    openClosePrimarySectionBB: function(){
        initVaribles.blueButton.classList.toggle('open');
        initVaribles.formWrapper.classList.toggle('open');
    },

    openClosePrimarySectionWB: function(){
        initVaribles.whiteButton.classList.toggle('open');
        initVaribles.bodyWrapper.classList.toggle('open');
    },

    selectCheckBox: function(){
        initVaribles.myCheckBox.classList.toggle('selected');
    },

    selectRadioButton: function(event){
        for (let index = 0; index < initVaribles.radiobuttons.length; index++) {
            initVaribles.radiobuttons[index].classList.remove('selected');
        }
        event.srcElement.classList.add('selected');
    }
}


window.onload = () => functionManager.init();

let $get = (selector) => {
    if(selector.indexOf('.', 0) !== -1){
        return document.getElementsByClassName(selector.replace('.', ''));
    }
    else {
        return document.getElementById(selector);
    }
}