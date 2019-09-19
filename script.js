$(document).ready(function() {    

    function changeRandomElement(oldId, oldStyle, idx) {
        if (oldId === undefined) {
            oldId = []
            oldStyle = []
            idx = 0
        } else {
            if (idx > 11) {
                idx = 0
            } else {
                idx+= 1
            }

            $(`#${oldId[idx]}`).attr('style', oldStyle[idx])
        }

        let elementList = [];
        let arrayOut = $('#svg8 path').toArray()

        arrayOut.forEach(element => {
            let elementStyle = $(`#${element.id}`).attr('style')
            if (!elementStyle) {
                return
            } 
            if (elementStyle.split(';')[0].split(':')[1] === "none") {
                return
            }
            if (oldId.indexOf(element.id) >= 0) {
                return
            }

            elementList.push(element)
        })

        let randomElement = elementList.splice(Math.floor(Math.random() * elementList.length), 1)[0]

        oldId[idx] = randomElement.id
        oldStyle[idx] = $(`#${randomElement.id}`).attr('style')

        let oldStyleArray = oldStyle[idx].split(';')
        oldColor = oldStyleArray[0].split(':')[1]

        let newStyleArray = oldStyleArray.slice()
        newStyleArray[0] = `fill:#eeeeee`

        $(`#${randomElement.id}`).attr('style', newStyleArray.join(';'))

        

        setTimeout(() => {
            changeRandomElement(oldId, oldStyle, idx)
        }, 75)

    }
    
    changeRandomElement()

    $("#cowDivTags").text('Hello World!')
    $("#stopAnimation").on('click', function() {
        console.log('Pressed Button')
    })

})