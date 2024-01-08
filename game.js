const scene = document.querySelector('a-scene')
const MAGICAL_ITEMS = 2
let score = 0
const text = scene.querySelector('a-text')

const magicalItemCollectHandler = (el) => {
  scene.removeChild(el)
  ++score
  if (score === MAGICAL_ITEMS) {
    text.setAttribute('value', 'Congrats! You collected all the magical item!!!')
    const dumbledore = document.createElement('a-entity')
    dumbledore.setAttribute('gltf-model', '#dumbledore')
    dumbledore.setAttribute('position', '-8 -3 0')
    dumbledore.setAttribute('scale', '2 2 2')
    dumbledore.setAttribute('rotation', '0 90 0')
    dumbledore.setAttribute('animation', {
      property: 'rotation',
      to: '0 450 0',
      startEvents: 'click'
    })
    dumbledore.addEventListener('click', () => {
      const pancakes = document.createElement('a-entity')
      pancakes.setAttribute('gltf-model','#pancakes')
      pancakes.setAttribute('position', '-2.8 -0.8 -3')
      pancakes.setAttribute('scale', '2 2 2')
      pancakes.addEventListener('click', () => {
        text.setAttribute('value', 'Meet me at Benedict on Friday at 12:30 for some pancakes!!!')
      })
      scene.appendChild(pancakes)
    })
    scene.appendChild(dumbledore)
  } else {
    text.setAttribute('value', `Congrats! You collect a magical item. You have ${MAGICAL_ITEMS - score} more to collect`)
  }
}

const run = () => {
  const timeTurner = scene.querySelector('#timeTurner')
  const elderWand = scene.querySelector('#elderWand')
  timeTurner.addEventListener('click', () => {
    magicalItemCollectHandler(timeTurner)
  })
  elderWand.addEventListener('click', () => {
    magicalItemCollectHandler(elderWand)
  })
}

if (scene.hasLoaded) {
  run()
} else {
  scene.addEventListener('loaded', () => {
    run()
  })
}