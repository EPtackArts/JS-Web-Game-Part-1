function newImage(url, left, bottom) {
    let imgName = document.createElement('img')
    imgName.src = url
    imgName.style.position = 'fixed'
    imgName.style.left = left
    imgName.style.bottom = bottom
    document.body.append(imgName)
    return imgName
}

newImage('assets/green-character.gif', '100px', '100px')
newImage('assets/pine-tree.png', '450px', '200px')
newImage('assets/pillar.png', '350px', '100px')
newImage('assets/crate.png', '150px', '200px')
newImage('assets/well.png', '500px', '425px')

function newItem(url, left, bottom) {
let itemName = document.createElement('img')
    itemName.src = url
    itemName.style.position = 'fixed'
    itemName.style.left = left
    itemName.style.bottom = bottom
    document.body.append(itemName)

    itemName.addEventListener('dblclick', function(){
        itemName.remove()
    })
    return itemName
}

newItem('assets/sword.png', '500px', '405px')
newItem('assets/sheild.png', '165px', '185px')
newItem('assets/staff.png', '600px', '100px')