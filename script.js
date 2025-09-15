	const circle = document.querySelectorAll('.circle')   // NodeList of the five circles
    const prevbtn = document.getElementById('prev')       // Previous button (id: prev)
    const nextbtn = document.getElementById('next')       // Next button (id: next)
    const progress = document.getElementById('progress')  // fill element for the line

    // currentActive is 1..circle.length (1-indexed) so it's easy to reason about steps
    let currentActive = 1

    // initialize UI to match acceptance criteria:
    // - circle-1 active
    // - prev disabled
    // - next enabled
    updateUI()

    // event listeners
    nextbtn.addEventListener('click', () => {
      if (currentActive < circle.length) {
        currentActive = Math.min(circle.length, currentActive + 1)
        updateUI()
      }
    })

    prevbtn.addEventListener('click', () => {
      if (currentActive > 1) {
        currentActive = Math.max(1, currentActive - 1)
        updateUI()
      }
    })

    // central update function: sets active classes, progress width and button states
    function updateUI(){
      // Activate circles cumulatively: indices < currentActive become active
      circle.forEach((c, idx) => {
        if (idx < currentActive) {
          c.classList.add('active')
        } else {
          c.classList.remove('active')
        }
      })

      // Fill progress width: proportion of steps completed between first and last circle
      // When currentActive === 1 -> 0% (only first circle active)
      // When currentActive === circles.length -> 100%
      const steps = circle.length - 1
      const percent = steps === 0 ? 0 : ((currentActive - 1) / steps) * 100
      progress.style.width = percent + '%'

      // Buttons enabling/disabling
      prevbtn.disabled = (currentActive === 1)
      nextbtn.disabled = (currentActive === circle.length)
    }