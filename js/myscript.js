let card = {
    name : 'Bearer of the Heavens',
    launchCost : {
        common: 7,
        white : 0,
        blue: 0,
        black: 0,
        red: 1,
        green: 0
    },
    type : 'Creature',
    subtype : 'Giant',

    expansion: {
        expansionID : '8',
        numberOfAllCards: 165,
        name : 'Journey into Nyx',
        rarity : 'rare',
    },

    flavourText : {
        author : 'Uno A Caso',
        quote : 'To hold the heavens from the earth is no curse, but a titanic responsibility.',
    },
    ability : 'When Bearer of the Heavens dies, destroy all permanents at the beginning of the next end step.',
    illustratorInfo : {
        name : 'Ryan Alexander',
        surname : 'Lee',
        dateOfBirth : '07/27/1993',
        placeOfBirth: 'Woodstock'
    },

    collectionNumber : 89, 

    strength : 10,
    constitution: 10,
    borderCardColour : 'black',
    


    combinedManaCost :
    function(){
        let sum = 0;
        for(let color in this.launchCost){
            sum += this.launchCost[color];

        }
        return sum;
    }

}


console.log(card.combinedManaCost())


let cardDisplayHTML = 
`<ul>
    <li>name: ${card.name}</li>
    <li>launch cost: 
        <ul>
            <li>common: ${card.launchCost.common}</li>
            <li>white: ${card.launchCost.white}</li>
            <li>blue: ${card.launchCost.blue}</li>
            <li>black: ${card.launchCost.black}</li>
            <li>red: ${card.launchCost.red}</li>
            <li>green: ${card.launchCost.green}</li>
        </ul>
    </li>
    <li>combined launch cost : ${card.combinedManaCost()}</li>
    <li>type : ${card.type}</li>
    <li>subtype: ${card.subtype}</li>
    <li>expansion:
        <ul>
            <li>number of the expansion: ${card.expansion.expansionID}</li>
            <li>name of the expansion : ${card.expansion.name}</li>
            <li>rarity : ${card.expansion.rarity}</li>
            <li>number of all the expansion cards : ${card.expansion.numberOfAllCards}</li>
        </ul>
    
    </li>
    <li>ability : ${card.ability}</li>
    <li>flavour text : ${card.flavourText}</li>
    <li>Illustrator info: ${card.illustratorInfo.name}  ${card.illustratorInfo.surname} born in ${card.illustratorInfo.placeOfBirth}</li> on the ${card.illustratorInfo.dateOfBirth}
    <li>collection number : ${card.collectionNumber} / ${card.expansion.numberOfAllCards}</li>
    <li>P/T : ${card.strength} / ${card.constitution}</li>
    <li>color of the card-border : ${card.borderCardColour}</li>
    <li>image of the card: </li>
    <img src="img/carta.jpg">

    `


document.getElementById('deck').innerHTML += cardDisplayHTML;