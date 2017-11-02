describe('Bubble Sort', function(){
  beforeEach(function() {
    spyOn(window, 'swap').and.callThrough();
  })

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles an array of one element', function(){
    expect( bubbleSort([42]) ).toEqual( [42] );
  });

  it('handles an array of multiple elements', function(){
    expect( bubbleSort([5,9,2,78,100,3]) ).toEqual( [2,3,5,9,78,100] );
  });

  it('does not swap when the array is already sorted', function() {
    bubbleSort([1,2,3,4,5]);
    expect(window.swap.calls.count()).toEqual(0);
  });

  it('swaps only once when the array can be sorted with a single swap', function() {
    bubbleSort([1,2,4,3,5]);
    expect(window.swap.calls.count()).toEqual(1);
  });
});
