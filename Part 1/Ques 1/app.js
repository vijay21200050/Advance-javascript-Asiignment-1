const data = require('/home/coha/Documents/assignment/battles.json');

let ans = {
    'most_active':{
        'attacker_king': '',
        'defender_king': '',
        'region': '',
        'name': ''
    },
    'attacker_outcome':{
        'win': '', 
        'loss': '' 
    },
    'battle_type':[], 
    'defender_size':{
        'average': '',
        'min': '',
        'max': ''
        }
    }

function mostactive() {
    var hash1 = {};
    var hash2 = {};
    var hash3 = {};
    var hash4 = {};
    var maxi1 = data[0].attacker_king;
    var maxi2 = data[0].defender_size;
    var maxi3 = data[0].region;
    var maxi4 = data[0].name;
    var max_count1 = 1;
    var max_count2 = 1;
    var max_count3 = 1;
    var max_count4 = 1;

    data.forEach(element => {
        var el1 = element.attacker_king;
        if(hash1[el1] == null)
            hash1[el1] = 1;
        else
            hash1[el1]++;
        
        if(hash1[el1] > max_count1)
        {
            maxi1 = el1;
            max_count1 = hash1[el1];
        }
    })
    ans['most_active'].attacker_king = maxi1;

    data.forEach(element => {
        var el2 = element.defender_king;
        if(hash2[el2] == null)
            hash2[el2] = 1;
        else
            hash2[el2]++;
        
        if(hash2[el2] > max_count2)
        {
            maxi2 = el2;
            max_count2 = hash2[el2];
        }
    })
    ans['most_active'].defender_king = maxi2;

    data.forEach(element => {
        var el3 = element.region;
        if(hash3[el3] == null)
            hash3[el3] = 1;
        else
            hash3[el3]++;
        
        if(hash3[el3] > max_count3)
        {
            maxi3 = el3;
            max_count3 = hash3[el3];
        }
    })
    ans['most_active'].region = maxi3;

    data.forEach(element => {
        var el4 = element.name;
        if(hash4[el4] == null)
            hash4[el4] = 1;
        else
            hash4[el4]++;
        
        if(hash4[el4] > max_count4)
        {
            maxi4 = el4;
            max_count4 = hash4[el4];
        }
    })
    ans['most_active'].name = maxi4;

}
mostactive();

function attacker_outcome() {
    let swin = 0;
    let sloss = 0;
    data.forEach(element => {
        if(element.attacker_outcome === "win")
            swin++;
        if(element.attacker_outcome === "loss")
            sloss++;
    })
    ans['attacker_outcome'].win = swin;
    ans['attacker_outcome'].loss = sloss;
}    

attacker_outcome();

function defender() {
    let sum = 0;
    ans['defender_size'].min = data[0].defender_size;
    ans['defender_size'].max = data[0].defender_size;

    data.forEach(element => {
        if(element.defender_size < ans['defender_size'].min && element.defender_size != null)
            ans['defender_size'].min = element.defender_size;
        if(element.defender_size > ans['defender_size'].max && element.defender_size != null)
            ans['defender_size'].max = element.defender_size;
        
        sum += element.defender_size;

        })
        ans['defender_size'].average = parseInt(sum / data.length);
}
defender();

function battle_type() {
    var hash = {};
    data.forEach(element => {
        var el = element.battle_type;
        if(hash[el] == null) {
            hash[el] = 3;
            ans['battle_type'].unshift(el);
        }
    })
    ans['battle_type'].shift();
}

battle_type();

console.log(ans);