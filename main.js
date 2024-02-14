// Write your code here
console.log(parseInt(50 + Math.random() * 200)); // es 50dan rom daiwyos randomi da 250 mde ciprebshi gacherdes
2 == "2"; // ეს თუ შეცდომა არა და სპეციალურად აკლია მეორე ფრჩხილი დააერორეს ისე წესით true მოგვცემს პასუხს
2 === 2; //აქ true
10 % 3 === 0; //აქ false
10 % 3 === 1; //აქ true
true && false; //აქ false    
false || true; //აქ true
true || false;  //აქ true
5 + 8 >= 12 || 19 < 90 || !false; //აქ true
"Josh" == "josh" && !true && false && 17.9 + 0.1 == 18.1; //აქ false 
0.1 + 0.2 == 0.3; //აქ true
Math.min(0, 1, 2, 10, 11, 100) && Math.max(-100, -90, -1, -0.9, 0); //აქ 0
Math.max(0, 1, 2, 10, 11, 100) && Math.min(-100, -90, -1, -0.9, 0); //აქ 0
Math.min(0, 1, 2, 10, 11, 100) || Math.min(-100, -90, -1, -0.9, 0); //აქ -100
!Math.min(0, 1, 2, 10, 11, 100) || !Math.max(-100, -90, -1, -0.9, 0); //აქ 0 ალბათ