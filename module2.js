function all(x) {
    let j = '<tr>'
    for (let i = 0; i <= x; i++) {

        if (i < 1) {
            j += `<td style="background-color:grey;color:white;"> x </td>`
        } else {
            j += `<td style="background-color:grey;color:white;"> ${i} </td>`
        }
    }
    j += '</tr>'
    return j
}

function final(a, y) {
    let f = ''
    for (let b = 1; b <= y; b++) {
        if (a * b == a) {
            f += `<td> ${a} </td>`
        }
        f += `
          
       <td> ${a * b} </td>`

    }

    return f
}

function all2(x, y) {
    let k = ''
    for (let a = 1; a <= x; a++) {
        k += `
           <tr>
                ${final(a, y)}
           </tr>
           `
    }

    return k
}

function multiplication(xAxis, yAxis) {
    return `
    ${all(xAxis)}
    ${all2(xAxis, yAxis)}
    `
}
export default multiplication

