  function* factorial(n) {
      // your code here
      var z = 1;
      for (let i = 1; i <= n; i++) {
          yield z *= i;
      }

  }

  for (var n of factorial(5)) {
      console.log(n)
  }
