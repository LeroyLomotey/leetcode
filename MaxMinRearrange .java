class CheckMaxMin {
  public static void maxMin(int[] arr) {
    /*
    - Done without using Array.copyOfRange to split array
    - Another  appproach can be done by shifting elements down as you
      rearrange, but is expensive without a linkedList
      
    time complexity -> O(n)
    aux space complexity -> O(n)
      {5, 1, 4, 2, 3}
            
      half1 = {1,2,3}
      half2 = {4,5}

      half1Pointer = 0
      half2Pointer = half2.length-1
      while i < length of arr
        if(half2Pointer >= 0 )
          arr[i] = half2[half2Pointer]
          half2Pointer++
          i++
        if(half1Pointer < half1.length)
          arr[i] = half1[half1Pointer]
          half1Pointer++

        
    */
    // Write - Your - Code

    int mid = arr.length/2;
    int[] half1 = new int[mid];
    int[] half2 = new int[arr.length - mid];
    int half1Pointer = 0;
    int half2Pointer = half2.length-1;
    
    //Splitting array manually
    for(int i = 0; i < arr.length; i++)
    {
      
      if(i < mid)
      {
        half1[i] = arr[i];
      }
      else
      {
        half2[i - mid] = arr[i];
      }
    }

    //merging halfs into original array
    for(int i = 0; i < arr.length; i++)
    {
      if(half2Pointer >= 0)
      {
        arr[i] = half2[half2Pointer];
        half2Pointer --;
        i++;
      }
      if(half1Pointer < half1.length)
      {
        arr[i] = half1[half1Pointer];
        half1Pointer++;
      }
    }

  }
}
