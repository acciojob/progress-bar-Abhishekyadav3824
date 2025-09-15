//your JS code here. If required.
	  const circle = document.querySelectorAll(".circle")
      const prevbtn = document.getElementById("previous")
      const nextbtn = document.getElementById("next")

      let currentActive = 0; // only one circle active at a time

      updateUI()

      prevbtn.addEventListener("click", btnclicked)
      nextbtn.addEventListener("click", btn2clicked)

      function btnclicked(e){
        if(currentActive > 0){
          currentActive--;
        }
        updateUI()
      }

      function btn2clicked(e){
        if(currentActive < circle.length - 1){
          currentActive++;
        }
        updateUI()
      }

      function updateUI(){
        // reset all circles
        circle.forEach((c, idx) => {
          c.classList.remove("active")
          if(idx === currentActive){
            c.classList.add("active")
          }
        })

        // disable buttons at ends
        prevbtn.disabled = currentActive === 0
        nextbtn.disabled = currentActive === circle.length - 1
      }