// these three are arrays 
uniqueInOrder('AAABBBCCDAABBB') == ['A','B','C','D','A','B']
uniqueInOrder('ABBCcAD') == ['A','B','C','c','D']
uniqueInOrder([1,2,2,3,3]) == [1,2,3]

function uniqueInOrder(it) {
    var result = []
    var last
    for (var i = 0; i < it.length; i++){
        if (it[i] !== last) {
            // i++ is behind the console because it will add 1 if its above
            result.push(last = it[i])
        }
    }
    return result
}