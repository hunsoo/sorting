describe("Merge Sort", function() {
  beforeEach(function() {
    spyOn(window, "split").and.callThrough();
  });

  it("handles an empty array", function() {
    expect(mergeSort([])).toEqual([]);
  });

  it("handles an array of one element", function() {
    expect(mergeSort([42])).toEqual([42]);
  });

  it("is able to merge two sorted arrays into one sorted array", function() {
    expect(mergeSort([5, 9, 2, 78, 100, 3])).toEqual([2, 3, 5, 9, 78, 100]);
  });

  describe("Split Array function", function() {
    it("is able to split an array into two halves", function() {
      expect(split([2, 5])).toEqual([[2], [5]]);
    });
  });
  describe('Merge function', function(){
    it('is able to merge two sorted arrays into one sorted array', function(){
      expect(merge([1,5,9],[2,4,78])).toEqual([1,2,4,5,9,78]);
    });
  });
});
