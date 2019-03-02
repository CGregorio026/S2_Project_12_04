"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 4

   Author: 
   Date:   
   
   Filename: vw_results.js
   
   Functions:
   
   The calcSum() function is a callback function used to
   calculte the total value from items within an array
   
   The calcPercent(value, sum) function calculates the percentage given
   a value and a sum
   
   The createBar(partyType, percent) function writes a different
   table data table based on the candidates party affilication.
   
      
*/
// begins to create a report of the voter results
var reportHTML = "<h1>" + raceTitle + "</h1>";

for (var i = 0; i < race.length; i++) {
    var totalVotes = 0;
    // applies the calcsum function to each of the items in the votes array.
    votes[i].forEach(calcSum);
    reportHTML += "<table> <caption>" + race[i] + "</caption> <tr><th>Candidate</th><th>Votes</th></tr>";

    candidateRows(i, totalVotes);

    reportHTML += candidateRows;
    // Finishes the table
    reportHTML += "</table>";
}

document.getElementById('section').innerHTML = reportHTML;

function candidateRows(raceNum, totalVotes) {
    var rowHTML = "";
    for (var j = 0; j < 3; j++) {
        var candidateName = candidate[raceNum][j];
        var candidateParty = party[raceNum][j];
        var candidateVotes = votes[raceNum][j];
        var candidatePercent = calcPercent(candidateVotes, totalVotes);
        rowHTML += "<tr> <td>" + candidateName + "(" + candidateParty + ")</td> <td>" + candidateVotes.toLocaleString() + "(" + candidatePercent.toFixed(1) + ")</td></tr>";
    }
    return rowHTML;
}



/* Callback Function to calculate an array sum */
function calcSum(value) {
    totalVotes += value;
}

/* Function to calculate a percentage */
function calcPercent(value, sum) {
    return (100 * value / sum);
}