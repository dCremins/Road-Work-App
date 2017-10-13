var showing = 'none'

function slide(id) {
  switch(showing) {
    case id:
      document.getElementById(id).removeAttribute("style")
      document.getElementsByClassName(id)[0].removeAttribute("style")
      break
    case 'group-1':
      document.getElementById('group-1').removeAttribute("style")
      document.getElementsByClassName('group-1')[0].removeAttribute("style")
      break
    case 'group-2':
      document.getElementById('group-2').removeAttribute("style")
      document.getElementsByClassName('group-2')[0].removeAttribute("style")
      break
    case 'group-3':
      document.getElementById('group-3').removeAttribute("style")
      document.getElementsByClassName('group-3')[0].removeAttribute("style")
      break
    case 'group-4':
      document.getElementById('group-4').removeAttribute("style")
      document.getElementsByClassName('group-4')[0].removeAttribute("style")
      break
    case 'group-5':
      document.getElementById('group-5').removeAttribute("style")
      document.getElementsByClassName('group-5')[0].removeAttribute("style")
      break
    case 'group-6':
      document.getElementById('group-6').removeAttribute("style")
      document.getElementsByClassName('group-6')[0].removeAttribute("style")
      break
    default:
      break
  }
  if (showing !== id) {
    document.getElementsByClassName(id)[0].style.backgroundColor = "#666"
    document.getElementById(id).style.width = "300px"
    showing = id
  } else {
    showing = 'none'
  }
}


function onDocumentMouseMove( event ) {
	event.preventDefault()
	var rect = renderer.domElement.getBoundingClientRect()
	mouse.x = ( ( event.clientX - rect.left ) / rect.width ) * 2 - 1
	mouse.y = - ( ( event.clientY - rect.top ) / rect.height ) * 2 + 1
	raycaster.setFromCamera( mouse, camera )
	if ( selected ) {
			if ( raycaster.intersectObjects( objects ) ) {
				selected.position.set(0, 1, 0)
				selected.position.set( raycaster.intersectObjects( objects )[0].point.x, selected.position.y, raycaster.intersectObjects( objects )[0].point.z );
			}
		}
		raycaster.setFromCamera( mouse, camera );
		var intersects = raycaster.intersectObjects( flaggers );
		if ( intersects.length > 0 ) {
			var object = intersects[ 0 ].object;
			if ( hovered !== object ) {
				renderer.domElement.style.cursor = 'pointer';
				hovered = object;
			}
		} else {
			if ( hovered !== null ) {
				renderer.domElement.style.cursor = 'auto';
				hovered = null;
			}
		}
}

function onDocumentTouchMove( event ) {
	event.preventDefault()
  event = event.changedTouches[ 0 ]
	var rect = renderer.domElement.getBoundingClientRect()
	mouse.x = ( ( event.clientX - rect.left ) / rect.width ) * 2 - 1
	mouse.y = - ( ( event.clientY - rect.top ) / rect.height ) * 2 + 1
	raycaster.setFromCamera( mouse, camera )
	if ( selected ) {
		if ( raycaster.intersectObjects( objects ) ) {
			selected.position.set(0, 1, 0)
			selected.position.set( raycaster.intersectObjects( objects )[0].point.x, selected.position.y, raycaster.intersectObjects( objects )[0].point.z );
		}
	}
}

function onDocumentMouseDown( event ) {
	controls.enabled = false
	event.preventDefault();
	raycaster.setFromCamera( mouse, camera );
	var intersects = raycaster.intersectObjects( flaggers );
	if ( intersects.length > 0 ) {
		selected = intersects[ 0 ].object;
		if ( raycaster.intersectObjects( objects ) ) {
			offset.copy( intersection ).sub( selected.position );
		}
		renderer.domElement.style.cursor = 'move';
	}
}

function onDocumentTouchStart( event ) {
	controls.enabled = false
	event.preventDefault()
  event = event.changedTouches[ 0 ]
	var rect = renderer.domElement.getBoundingClientRect()
	mouse.x = ( ( event.clientX - rect.left ) / rect.width ) * 2 - 1
	mouse.y = - ( ( event.clientY - rect.top ) / rect.height ) * 2 + 1
	raycaster.setFromCamera( mouse, camera );
	var intersects = raycaster.intersectObjects( flaggers )
	if ( intersects.length > 0 ) {
		selected = intersects[ 0 ].object;
		if ( raycaster.intersectObjects( objects ) ) {
			offset.copy( intersection ).sub( selected.position );
		}
		renderer.domElement.style.cursor = 'move';
	}
}

function onDocumentMouseCancel( event ) {
	controls.enabled = true
	event.preventDefault();
	if ( selected ) {
		selected = null;
	}
	renderer.domElement.style.cursor = 'auto';
}

function onDocumentTouchEnd( event ) {
  controls.enabled = true
  event.preventDefault();
  if ( selected ) {
    selected = null;
  }
  renderer.domElement.style.cursor = 'auto';
}
