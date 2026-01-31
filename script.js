let filters = {
    brightness:{
        value:100,
        min: 0,
        max: 200,
        unit: "%"
    },
    contrast: {
        value:100,
        min: 0,
        max: 200,
        unit: "%"
    },
    saturation: {
        value:100,
        min: 0,
        max: 200,
        unit: "%"
    },
    hueRotation:{
        value: 0,
        min: 0,
        max: 360,
        unit: "deg"
    },
    blur: {
        value: 0,
        min: 0,
        max: 20,
        unit: "px"
    },
    grayscale: {
        value: 0,
        min: 0,
        max: 100,
        unit: "%"
    },
    sepia: {
        value: 0,
        min: 0,
        max: 100,
        unit: "%"
    },
    opacity: {
        value: 100,
        min: 0,
        max: 100,
        unit: "%"
    },
    invert: {
        value:0,
        min: 0,
        max: 100,
        unit: "%"
    },
};

const imageCanvas = document.querySelector("#image-canvas");
const imgInp = document.querySelector("#image-input");
const canvasCTX = imageCanvas.getContext("2d");
const resetButton = document.querySelector("#reset-btn");
const downloadButton = document.querySelector("#download-btn")
const presetsContainers = document.querySelector(".Presets")
    let  file = null;
    let image = null;

const filtersContainer = document.querySelector(".filters");

/*disabled features*/
resetButton.disabled = true; 
downloadButton.disabled = true; 
filtersContainer.classList.add("disabled"); 
presetsContainers.classList.add("disabled"); 

function updateSliderFill(slider) { // i changed this
    const min = slider.min;
    const max = slider.max;
    const val = slider.value;

    const percent = ((val - min) / (max - min)) * 100;

    slider.style.background = `linear-gradient(
        to right,
        #ff6b6b ${percent}%,
        #444 ${percent}%
    )`;
}

function createFilterElement(name, unit="%", value, min, max) {
    const div = document.createElement("div");
    div.classList.add("filter");

    const p = document.createElement("p");
    p.innerText = name;

    const input = document.createElement("input");
    input.type = "range";
    input.min = min;
    input.max = max;
    input.value = value;
    input.id = name;

    updateSliderFill(input); // i changed this

    input.addEventListener("input", () => {
        filters[name].value = input.value;
        updateSliderFill(input); // i changed this
        applyFilters();
    });

    div.appendChild(p);
    div.appendChild(input);

    return div;
}


function createFilters(){
    Object.keys(filters).forEach(key => {
        const filterElement = createFilterElement(key, filters[ key ].unit, filters[ key ].value, filters[ key ].min , filters[ key ].max );
        
        filtersContainer.appendChild(filterElement)
    });
}
createFilters();

imgInp.addEventListener("change", (event) => {
    const file = event.target.files[0];
    const imgPLaceHolder = document.querySelector(".placeholder");
    imageCanvas.style.display = "block";
    imgPLaceHolder.style.display = "none";


    const img = new Image();
    img.src = URL.createObjectURL(file);

    img.onload = () => {

        image = img;
        imageCanvas.width = img.width;
        imageCanvas.height = img.height;

        canvasCTX.drawImage(img , 0 , 0);
    resetButton.disabled = false;
    downloadButton.disabled = false;
    filtersContainer.classList.remove("disabled");
    presetsContainers.classList.remove("disabled");
    }                           


})

function applyFilters() {
    if (!image) return;

    canvasCTX.clearRect(0, 0, imageCanvas.width, imageCanvas.height);

    canvasCTX.filter = `
        brightness(${filters.brightness.value}${filters.brightness.unit})
        contrast(${filters.contrast.value}${filters.contrast.unit})
        saturate(${filters.saturation.value}${filters.saturation.unit})
        hue-rotate(${filters.hueRotation.value}${filters.hueRotation.unit})
        blur(${filters.blur.value}${filters.blur.unit})
        grayscale(${filters.grayscale.value}${filters.grayscale.unit})
        sepia(${filters.sepia.value}${filters.sepia.unit})
        opacity(${filters.opacity.value}${filters.opacity.unit})
        invert(${filters.invert.value}${filters.invert.unit})
    `.trim();

    canvasCTX.drawImage(image, 0, 0);
}

resetButton.addEventListener("click" , () => {
    if(!image) return;
    filters = {
    brightness:{
        value:100,
        min: 0,
        max: 200,
        unit: "%"
    },
    contrast: {
        value:100,
        min: 0,
        max: 200,
        unit: "%"
    },
    saturation: {
        value:100,
        min: 0,
        max: 200,
        unit: "%"
    },
    hueRotation:{
        value: 0,
        min: 0,
        max: 360,
        unit: "deg"
    },
    blur: {
        value: 0,
        min: 0,
        max: 20,
        unit: "px"
    },
    grayscale: {
        value: 0,
        min: 0,
        max: 100,
        unit: "%"
    },
    sepia: {
        value: 0,
        min: 0,
        max: 100,
        unit: "%"
    },
    opacity: {
        value: 100,
        min: 0,
        max: 100,
        unit: "%"
    },
    invert: {
        value:0,
        min: 0,
        max: 100,
        unit: "%"
    },
};
applyFilters();
filtersContainer.innerHTML = "";
createFilters();
})

downloadButton.addEventListener("click" , () =>{
    const link = document.createElement("a");
    link.download = "edited-image.png";
    link.href = imageCanvas.toDataURL();
    link.click();

})

const presets = {
    normal: {
        brightness: 100,
        contrast: 100,
        saturation: 100,
        hueRotation: 0,
        blur: 0,
        grayscale: 0,
        sepia: 0,
        opacity: 100,
        invert: 0
    },

    instaWarm: {
        brightness: 110,
        contrast: 120,
        saturation: 135,
        hueRotation: 5,
        blur: 0,
        grayscale: 0,
        sepia: 12,
        opacity: 100,
        invert: 0
    },

    instaMoody: {
        brightness: 90,
        contrast: 135,
        saturation: 85,
        hueRotation: 350,
        blur: 0,
        grayscale: 0,
        sepia: 8,
        opacity: 100,
        invert: 0
    },

    snapCool: {
        brightness: 95,
        contrast: 110,
        saturation: 90,
        hueRotation: 210,
        blur: 0,
        grayscale: 0,
        sepia: 0,
        opacity: 100,
        invert: 0
    },

    lightroomMatte: {
        brightness: 105,
        contrast: 85,
        saturation: 95,
        hueRotation: 0,
        blur: 0,
        grayscale: 0,
        sepia: 5,
        opacity: 100,
        invert: 0
    },

    blackAndWhite: {
        brightness: 100,
        contrast: 140,
        saturation: 0,
        hueRotation: 0,
        blur: 0,
        grayscale: 100,
        sepia: 0,
        opacity: 100,
        invert: 0
    },

    vintage: {
        brightness: 105,
        contrast: 110,
        saturation: 90,
        hueRotation: 10,
        blur: 0,
        grayscale: 0,
        sepia: 35,
        opacity: 100,
        invert: 0
    },

    dramatic: {
        brightness: 85,
        contrast: 160,
        saturation: 120,
        hueRotation: 0,
        blur: 0,
        grayscale: 0,
        sepia: 0,
        opacity: 100,
        invert: 0
    },

    creamyMoody: {
        brightness: 102,
        contrast: 90,
        saturation: 95,
        hueRotation: 8,
        blur: 0,
        grayscale: 0,
        sepia: 12,
        opacity: 100,
        invert: 0
    },

    honey: {
        brightness: 108,
        contrast: 105,
        saturation: 120,
        hueRotation: 12,
        blur: 0,
        grayscale: 0,
        sepia: 18,
        opacity: 100,
        invert: 0
    },

    brightAndAiry: {
        brightness: 118,
        contrast: 92,
        saturation: 105,
        hueRotation: 0,
        blur: 0,
        grayscale: 0,
        sepia: 6,
        opacity: 100,
        invert: 0
    },

    mutedTones: {
        brightness: 95,
        contrast: 110,
        saturation: 70,
        hueRotation: 0,
        blur: 0,
        grayscale: 0,
        sepia: 8,
        opacity: 100,
        invert: 0
    },
};


Object.keys(presets).forEach(presetName => {
    const presetButton = document.createElement("button");
    presetButton.classList.add("btn");
    presetButton.innerText = presetName;
    presetsContainers.appendChild(presetButton);

    presetButton.addEventListener("click", () => {
            document.querySelectorAll(".Presets .btn").forEach(btn => {
            btn.classList.remove("active");
    }); // i changed this
        presetButton.classList.add("active"); // i changed this

        const preset = presets[presetName];

        Object.keys(preset).forEach(filterName => {
            filters[filterName].value = preset[filterName];
        });

        applyFilters();
        filtersContainer.innerHTML = "";
        createFilters();
    });


});



/*EXP */
function updateSliderFill(slider) {
    const min = slider.min;
    const max = slider.max;
    const val = slider.value;

    const percent = ((val - min) / (max - min)) * 100;

    slider.style.background = `
        linear-gradient(
            to right,
            #ff6b6b ${percent}%,
            #444 ${percent}%
        )
    `;
}