function longestSub(input)
{
  let i = 0
  let j = 0
  let longest = ""
  let k = {}

  while (j < input.length)
    {
      if(input[j] in k)
      {
        k[input[j]] = k[input[j]] + 1
      }else
      {
        k[input[j]] = 1
      }

      if(k[input[j]] > 1)
      {
        //catchup phase
        let temp = input.slice(i,j)
        longest = longest.length > temp.length ? longest : temp
        while(i < j)
          {
              k[input[i]] = k[input[i]] - 1
              i++
              if(k[input[i]] <= 1)
                  break;  
          }
      }
      j++
    }
  return longest;
}
/*
Given a string s, find the longest substring without repeating characters.

Input: String
Output: String

Input: pwwkew		=>	Output: wke, kew 
Input: abcdbcbb      =>	Output: abcd

N ~ Length of input string
K ~ Number of unique characters in input string

Time Complexity: O(N)
Auxiliary Space Complexity: O(K)

i = 0
j = 0 
longest = ""
 K = { a : 0
       b : 0
       c : 0
       d : 0
 }             
                    a b c d b c b b
                    i
                    j

        while j < input length 
          add input j to K
          if input j in K > 1 
            //catchup phase
            longest = longest.length > input[i-j] : longest ? input[i-j]
            while(i < j)
            {  
                input i in K - 1
                if(input i in K >= 1)
                  break;
                i++
            }
          j++                   
*/
