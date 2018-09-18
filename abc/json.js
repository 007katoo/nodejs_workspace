var jsonTemp = [
    {title:"goldenstatewarrior",key:1,children:[{title:"hongshao",key:3,isLeaf:true,children:[{title:"cav",key:8}]},{title:"curry",key:4,isLeaf:true}]},
    {title:"cav",key:2},{title:"LA",key:5},{title:"LA",key:6},{title:"LA",key:7},{title:"LA",key:9}
                ]

// console.log(jsonTemp instanceof Array)

// function insertJson(key,detail,jsonTemp) {
//     for (var jsonUnit of jsonTemp) {
//         if (jsonUnit.key == key && jsonUnit.isLeaf !=true) {
//             if (jsonUnit.children) {
//                 jsonUnit.children.push(detail);
//             } else {
//                 jsonUnit.children = detail;
//             }
//         } else if ('children' in jsonUnit) {
//             innerjsonTemp = jsonUnit.children;
//             insertJson(key,detail,innerjsonTemp);
//         }
//         return jsonTemp;
//     }
// }

// // var newjsonTemp = insertJson(4,{title:"lbj",key:3,isLeaf:true},jsonTemp);
// var newjsonTemp1 = insertJson(3,{title:"lbj",key:4,isLeaf:true},jsonTemp);
// console.log(newjsonTemp1);

// var json0 = {username:"honghshao",password:"SP_8851##",dbType:"Mysql"}
// var jsonStr = JSON.stringify(json0);
// console.log(jsonStr);
// console.log(JSON.parse(jsonStr));


function deleteJson(key,json) {
    
    for (unitJson of json) {
        if (unitJson.key == key) {
            deleteIndex = json.indexOf(unitJson);
            json.splice(deleteIndex,1);
        } else if (unitJson.children) {
            deleteJson(key,unitJson.children);
        }
    }
}



function loopDeleteJson (keys,json) {
    for (key of keys) {
        deleteJson(key,json);
        console.log("after delete",JSON.stringify(json));
    }
}
// deleteJson(4,jsonTemp);
// console.log("after delete",JSON.stringify(jsonTemp));
// deleteJson(2,jsonTemp);
// console.log("after delete",JSON.stringify(jsonTemp));
// deleteJson(8,jsonTemp);
// console.log("after delete",JSON.stringify(jsonTemp));

loopDeleteJson([3,4,5,6,7],jsonTemp)
// console.log("after delete1",JSON.stringify(jsonTemp1));