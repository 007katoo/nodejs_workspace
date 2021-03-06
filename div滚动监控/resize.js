window.onload = function () {
  
  var left = document.getElementById('item-left')
  var right = document.getElementById('item-right')
  var controllerLeft = document.getElementById('controller-left')
  var controllerRight = document.getElementById('controller-right')

  onelresize(left, function () {
    // right.style.width = left.offsetWidth + 'px'
    // right.style.height = left.offsetHeight + 'px'
    console.log('变化了');
  })

  onelresize(right, function () {
    left.style.width = right.offsetWidth + 'px'
    left.style.height = right.offsetHeight + 'px'
  })

  var isLeftMousedown = false
  var isRightMousedown = false
  var lastMouseX = 0
  var lastMouseY = 0

  document.addEventListener('mousemove', function (e) {
    var el
    if (isLeftMousedown) {
      el = left
    } else if (isRightMousedown) {
      el = right
    } else {
      return
    }

    el.style.width = el.offsetWidth + e.clientX - lastMouseX + 'px'
    el.style.height = el.offsetHeight + e.clientY - lastMouseY + 'px'

    lastMouseX = e.clientX
    lastMouseY = e.clientY
  })

  controllerLeft.addEventListener('mousedown', function (e) {
    e.preventDefault()
    lastMouseX = e.clientX
    lastMouseY = e.clientY
    isLeftMousedown = true
    left.style.willChange = 'width,height'
  })

  controllerRight.addEventListener('mousedown', function (e) {
    e.preventDefault()
    lastMouseX = e.clientX
    lastMouseY = e.clientY
    isRightMousedown = true
    right.style.willChange = 'width,height'
  })

  document.addEventListener('mouseup', function () {
    isLeftMousedown = false
    isRightMousedown = false
    left.style.willChange = ''
    right.style.willChange = ''
  })

  //////////\\\///\\\\\\\\\\

  // scroll passive events
  var passiveEvents = false
  try {
    var opts = Object.defineProperty({}, 'passive', {
      get: function () {
        passiveEvents = { passive: true }
      }
    })
    window.addEventListener('test', null, opts)
  } catch (e) {}

  function onelresize (el, handler) {
    if (!(el instanceof HTMLElement)) {
      throw new TypeError("Parameter 1 is not instance of 'HTMLElement'.")
    }
    // https://www.w3.org/TR/html/syntax.html#writing-html-documents-elements
    if (/^(area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr|script|style|textarea|title)$/i.test(el.tagName)) {
      throw new TypeError('Unsupported tag type. Change the tag or wrap it in a supported tag(e.g. div).')
    }
    if (typeof handler !== 'function') { throw new TypeError("Parameter 2 is not of type 'function'.") }

    var lastWidth = el.offsetWidth || 1
    var lastHeight = el.offsetHeight || 1
    var maxWidth = 10000 * (lastWidth)
    var maxHeight = 10000 * (lastHeight)

    var expand = document.createElement('div')
    expand.style.cssText = 'position:absolute;top:0;bottom:0;left:0;right:0;z-index=-10000;overflow:hidden;visibility:hidden;'
    var shrink = expand.cloneNode(false)

    var expandChild = document.createElement('div')
    expandChild.style.cssText = 'transition:0s;animation:none;'
    var shrinkChild = expandChild.cloneNode(false)

    expandChild.style.width = maxWidth + 'px'
    expandChild.style.height = maxHeight + 'px'
    shrinkChild.style.width = '250%'
    shrinkChild.style.height = '250%'

    expand.appendChild(expandChild)
    shrink.appendChild(shrinkChild)
    el.appendChild(expand)
    el.appendChild(shrink)

    if (expand.offsetParent !== el) {
      el.style.position = 'relative'
    }

    expand.scrollTop = shrink.scrollTop = maxHeight
    expand.scrollLeft = shrink.scrollLeft = maxWidth

    var newWidth = 0
    var newHeight = 0
    function onResize () {
      if (newWidth !== lastWidth || newHeight !== lastHeight) {
        lastWidth = newWidth
        lastHeight = newHeight
        handler()
      }
    }

    function onScroll () {
      newWidth = el.offsetWidth || 1
      newHeight = el.offsetHeight || 1
      if (newWidth !== lastWidth || newHeight !== lastHeight) {
        requestAnimationFrame(onResize)
      }
      expand.scrollTop = shrink.scrollTop = maxHeight
      expand.scrollLeft = shrink.scrollLeft = maxWidth
    }

    expand.addEventListener('scroll', onScroll, passiveEvents)
    shrink.addEventListener('scroll', onScroll, passiveEvents)
  }

}
