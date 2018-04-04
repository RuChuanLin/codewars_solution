// Coding 3min : Jumping Dutch act
// Task: Mr. despair wants to jump off Dutch act, So he came to the top of a building.
// Scientific research shows that a man jumped from the top of the roof, when the floor more than 6, the person will often die in an instant; When the floor is less than or equal to 6, the person will not immediately die, he would scream. (without proof)
// Input: floor, The height of the building (floor)
// Output: a string, The voice of despair(When jumping Dutch act)

// 故事：絕望先生想要自殺，所以他來到了建築物的最上層。
// 根據科學家的研究表示：當一個人跳樓時，樓層超過六層的話，那個人便會瞬間死亡。
// 但是跳樓是 <= 6樓層時，那個人不會瞬死（咦？）
// 他還會叫幾聲尖叫來給你聽聽呢！
// 任務：你必須算出這個人要跳樓時，會發出什麼樣的聲音
// Mr. despair jumped from the 2 floor, the voice is "Aa~"
// He fell on the ground, the voice is "Pa!"
// He did not die immediately, and the final voice was "Aa!"
// sc(6) should return "Aa~ Aa~ Aa~ Aa~ Aa~ Pa! Aa!"
// sc(7) should return "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!"
// sc(10) should return "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!"
// if floor<=1, Mr. despair is safe, return ""
function sc(floor) {
  if (floor <= 1) return "";
  return "Aa~ ".repeat(floor - 1) + "Pa!" + (floor <= 6 ? " Aa!" : "");
}
console.log(sc(2)); // Aa~ Pa! Aa!
console.log(sc(6)); // Aa~ Aa~ Aa~ Aa~ Aa~ Pa! Aa!
console.log(sc(10));
