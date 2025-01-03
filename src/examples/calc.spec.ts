export function add(x: number, y: number) {
  return x + y;
}


describe('Initial test',  () => { // parametro 1 = nome do teste | parametro 2 = anonima que executa o teste
  test('add function', () => {
    expect(add(1,3)).toEqual(4)
  })
})

// expect = espero | comando
// toBe = que faça | res