/*
Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
Return k.
*/

var removeElement = function(nums, val) {
    var i = 0;
    var j = nums.length-1;

    while(i <= j)
    {
        if(nums[i] === val)
        {
            if(nums[j] !== val)
            {
                let temp = nums[i]
                nums[i] = nums[j]
                nums[j] = temp
                i++
                j--
            }else
            {
                j--
            }
        }else
        {
            i++
        }
    }
    console.log(i)
    return i;
};

/*
Input: nums = [3,2,2,3], val = 3

                         i
                      [2,2,3,3]
                         j

    while i  is not greater than j
        if nums[i] == val
            if nums[j] != val
                temp = nums[i]
                nums[i] = nums[j]
                nums[j] = temp
                i++
                j--
            else
                j--
        else
            i++

    return nums[i] == val ? i + 1 : i;
*/

