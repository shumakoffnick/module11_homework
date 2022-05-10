/** Тест для третьей задачи
const repeatWord = require("./script.js");
test("repeat word", ()=>{
    expect(repeatWord('po', 2)).toBe("popo")
})
*/

/**тест для второй задачи
const getPercent = require("./script.js");
test('persent result',()=>{
    expect(getPercent(10,200)).toBe(5)
})
 */

/** Тест для пятой задачи

const month = require("./script.js");
test('the month has number', ()=>{
    expect(month[1]).toContain('январь');
    expect(month[2]).toContain('февраль');
    expect(month[3]).toContain('март');
    expect(month[4]).toContain('апрель');
    expect(month[5]).toContain('май');
    expect(month[6]).toContain('июнь');
    expect(month[7]).toContain('июль');
    expect(month[8]).toContain('август');
    expect(month[9]).toContain('сентябрь');
    expect(month[10]).toContain('октябрь');
    expect(month[11]).toContain('ноябрь');
    expect(month[12]).toContain('декабрь');
    
})
 */
