document.addEventListener("DOMContentLoaded", function() {
    const colorPicker = document.getElementById("colorPicker");
    const fontSizeInput = document.getElementById("fontSize");
    const fontFamilySelect = document.getElementById("fontFamily");
    const paragraph = document.getElementById("paragraph");
  
  
    colorPicker.addEventListener("change", function() {
      paragraph.style.color = colorPicker.value;
    });
  
  
    fontSizeInput.addEventListener("input", function() {
      paragraph.style.fontSize = `${fontSizeInput.value}px`;
    });
  
    
    fontFamilySelect.addEventListener("change", function() {
      paragraph.style.fontFamily = fontFamilySelect.value;
    });


    textInput.addEventListener("input", function() {
        paragraph.textContent = textInput.value;
      });

    


    
  });
  