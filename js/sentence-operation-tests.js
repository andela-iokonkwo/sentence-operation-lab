(function(){
  'use strict';
  describe("Sentence Operation", function() {
    it("Letter changes from `where did you come from` to `xIfsf EjE zpv dpnf gspn`", function() {
      var opr = new Operation('where did you come from');
      expect(opr.LetterChanges()).toBe('xIfsf EjE zpv dpnf gspn');
    });

    it("Letter changes from `where!! did.. you,, !!come!! from1111` to `xIfsf!! EjE.. zpv,, !!dpnf!! gspn1111`", function() {
      var opr = new Operation('where!! did.. you,, !!come!! from1111');
      expect(opr.LetterChanges()).toBe('xIfsf!! EjE.. zpv,, !!dpnf!! gspn1111');
    });

    it("The word `did you write the test scripts` should become `Did You Write The Test Scripts`", function() {
      var opr = new Operation('did you write the test scripts');
      expect(opr.LetterCapitalize()).toBe('Did You Write The Test Scripts');
    });

    it("The word `who are you` should become `Who Are You`", function() {
      var opr = new Operation('who are you');
      expect(opr.LetterCapitalize()).toBe('Who Are You');
    });

     it("The longest word in `where are you` should be `where`", function() {
      var opr = new Operation('where are you');
      expect(opr.LongestWord()).toBe('where');
    });

    it("The longest word  in `a beautiful sentence^&!` should be `beautiful`", function() {
      var opr = new Operation('a beautiful sentence^&!');
      expect(opr.LongestWord()).toBe('beautiful');
    });

    it("The longest word in `letter after letter!!` should be letter`", function() {
      var opr = new Operation('letter after letter!!');
      expect(opr.LongestWord()).toBe('letter');
    });

    it("The longest word in `a confusing /:sentence:/[ this is not!!!!!!!~` should be `sentence`", function() {
      var opr = new Operation('a confusing /:sentence:/[ this is not!!!!!!!~');
      expect(opr.LongestWord()).toBe('confusing');
    });
  });
})();