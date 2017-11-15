function productOf3Numbers(nums) {
    let num1 = Number(nums[0]);
    let num2 = Number(nums[1]);
    let num3 = Number(nums[2]);

    let cnt = 0;

    if (num1 <0){
        cnt++;
    }
    if (num2 <0){
        cnt++;
    }
    if (num3 <0){
        cnt++;
    }

    if(cnt === 0 || cnt === 2){

        return "Positive"
    }
    else {
        return "Negative"
    }
}