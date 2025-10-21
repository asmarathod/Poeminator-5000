let title, poem, textbox,addBtn;


function setup() {
  noCanvas();
  
 const controls = createDiv().addClass('controls');
 title = createP("Doofenshmirtz Poeminator 5000")
 poem = createDiv('');
  textbox = createInput('')
  //attribute('type','text').parent(controls);
  addBtn = createButton('Add Line').addClass('pinkButton')
    //.parent(controls);
  
  addBtn.mousePressed(() => {
    let userLine = textbox.value().trim();
    if (!userLine) return;
    textbox.value("");
                  
    let row = createDiv().addClass('poem-row').parent(poem);
    let textSpan = createSpan(userLine).parent(row);
    let slider = createSlider(0,360, floor(random(360)), 1).parent(row);
    
    const apply = () => textSpan.style('color', 'hsl(${slider.value()}, 80%, 50%)');
    slider.input(apply);
    apply();
  })
}

function draw() {
  background(220);
}
