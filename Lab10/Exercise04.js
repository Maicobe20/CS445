function fibonacci(n,prevValues=[]) {
    if(prevValues[n]!=null){
        return prevValues[n]
    }
    let result;
    if (n <= 1) {
        return 1;
    }else{

      result = fibonacci(n - 1,prevValues) + fibonacci(n - 2,prevValues);
    }
    prevValues[n] = result
    return result
}