  function forEach(arr, fn) {
      var newarray = [];
      for (var i = 0; i < arr.length; ++i) {
          newarray.push(fn(arr[i]));
      }
      return newarray;
  }

  forEach([3, 5, 2], function (el) {
      console.log(el);
      return el;
  });
