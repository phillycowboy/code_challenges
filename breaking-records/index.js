console.log("Breaking Records Solution")

// scores = [12,24,10,24]
// scores are in the same order as the games played 
// given the scores for a season determine the number of times maria breaks her records for most and least points scored during the season 

function breakingRecords(scores){
    let [hi, lo] = [scores[0], scores[0]]
    let [max, min] = [0,0]
    for(let i = 1; i < scores.length; i++){
        if(scores[i] > hi){hi = scores[i]; max++}
        if(scores[i] < lo){lo = scores[i]; min++}
    }
    return [max, min];
}