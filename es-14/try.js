//=====challenge 1

const surprisingFact = "The bumblebee bat is the world's smallest mammal";

console.log('Surprising Fact:', surprisingFact)
console.log({surprisingFact})

//=====challenge 2

const familyTree = [
    {
      name: "Person 1",
      children: [
        {
          name: "Person 2",
          children: [
            {
              name: "Person 3",
              children: [
                {
                  name: "Person 4",
                },
              ],
            },
          ],
        },
      ],
    },
  ];

console.dir(familyTree, {depth: null})
console.log(JSON.stringify(familyTree, null, 2));
// console.table(familyTree) //inutile in questo caso

//=====challenge 3

function importantTask() {
    console.count()
}

importantTask();
importantTask();
importantTask();
importantTask();
console.countReset()
importantTask();
importantTask();